import ChartSpec from './ChartSpec.js';
import ActionSpec from './ActionSpec.js';
import GroupingSpec from './GroupingSpec.js';
import TimingSpec from './TimingSpec.js';
import { CanisUtil } from './util/Util.js';
import { globalVar } from './util/GlobalVar.js';
import { getBoundingBox } from 'jsmovin/bin/helper';
import { LayerFactory } from 'jsmovin';

class Animation extends TimingSpec {
    constructor() {
        super();
        this._id;
        this.chartIdx;
        this.selector;
        this._align = Animation.alignTarget.object;
        this.grouping = new GroupingSpec();
        this.actions = [];

        //save all dom attrs of the marks selected in this animation
        // Animation.domMarks = new Map();//key: markId, value: dom attrs
        this.animationStartTime = 1000000;
        this.animationEndTime = 0;
        this.root = {};
        this.leaves = [];
        this.allMarksThisAni = [];
        this.marksInOrder = [];
        this.anisAligned = [];
        this.alignOnData = false;
    }

    /***** getters and setters *****/
    set id(id) {
        if (typeof this._id === 'undefined') {
            if (typeof id !== 'undefined') {
                this._id = id;
            } else {//add default id
                this._id = 'ani' + Animation.aniIdx;
                Animation.aniIdx++;
            }
        } else {
            // console.log('animation ' + this._id + ' already has an id.');
        }
    }

    get id() {
        return this._id;
    }

    set align(align) {
        if (typeof align !== 'undefined' && typeof align === 'object') {
            this._align = align;
        }
    }

    get align() {
        return this._align;
    }
    /***** end getters and setters *****/

    replaceConstants(constants, status = {}) {
        //replace constants in animation timing
        this.replaceOffsetConst(constants, status);

        //replace constants in grouping timing
        if (this.grouping !== 'undefined') {
            this.grouping.replaceDelayConst(constants, status);
        }

        //replace constants in action timing
        this.actions.forEach(a => {
            a.replaceOffsetConst(constants, status);
            a.replaceDurationConst(constants, status);
        })
    }

    /**
     * translate from json object to Animation object
     * @param {JSON obj} animationJson 
     */
    translate(animationJson, usedChangedAttrs, updating, status={}) {
        this.chartIdx = animationJson.chartIdx;
        if (!updating) {
            this.selector = animationJson.selector;//init selector
        }
        this.id = animationJson.id;
        this.reference = animationJson.reference;
        this.offset = animationJson.offset;
        this.align = animationJson.align;
        if (typeof animationJson.grouping !== 'undefined') {//init grouping
            this.grouping.initGrouping(animationJson.grouping);
        }

        //translate action specs in the animation Json
        if (typeof animationJson.effects !== 'undefined') {//init actions
            if (updating) {
                this.actions = [];
            }
            for (let i = 0, actionJson; i < animationJson.effects.length | (actionJson = animationJson.effects[i]); i++) {
                actionJson.chartIdx = animationJson.chartIdx;
                let visAttrActionJsonArr = ActionSpec.transToVisualAttrAction(actionJson, animationJson.chartIdx, usedChangedAttrs, ChartSpec.dataTrans, status);//translate templates to no-templates
                // console.log('translated visual action: ', visAttrActionJsonArr);
                for (let j = 0, visAttrActionJson; j < visAttrActionJsonArr.length | (visAttrActionJson = visAttrActionJsonArr[j]); j++) {
                    let tmpAction = new ActionSpec();
                    tmpAction.initAction(visAttrActionJson);
                    this.actions.push(tmpAction);
                }
            }
        }

    }

    /**
     * calculate timing for each mark;
     * @param {Array} markIds : array of mark ids
     * @param {Animation} lastAnimation : last animation in order to calculate time
     */
    // calAniTime(markIds, lastAnimation) {
    calAniTime(markIds) {
        let lastAnimation, aligning = false;
        if (typeof this.align !== 'undefined') {
            Animation.animations.forEach((value, key) => {
                if (this.align.target === value.id) {
                    lastAnimation = value;
                    if (this.align.type === Animation.alignTarget.withEle) {
                        aligning = true;
                        this._grouping = value.grouping;
                        // this.grouping = value.grouping;
                    }

                }
            })
        }
        if (typeof lastAnimation != 'undefined') {
            lastAnimation.anisAligned.push(`${this.chartIdx}_${this.selector}`);
        }

        let that = this;
        //check whether the durations of the actions are set with the data variables
        let durationAttrValues = new Map();
        for (let i = 0, markId; i < markIds.length | (markId = markIds[i]); i++) {
            let tmpAttrValues = new Map();
            for (let j = 0, action; j < this.actions.length | (action = this.actions[j]); j++) {
                if (typeof action.duration === 'object') {
                    let datum = Animation.domMarks.get(markId)['data-datum'];
                    let value = parseFloat(datum[action.duration.field]);
                    let minDuration = typeof action.duration.minDuration == 'undefined' ? 300 : action.duration.minDuration;
                    tmpAttrValues.set(action.duration.field, [value, minDuration]);
                }
            }
            durationAttrValues.set(markId, tmpAttrValues);
        }
        //calculate the duration of all actions
        let [actionsDurations, minValueEachAttr, processedActions] = ActionSpec.calActionDuration(this.actions, durationAttrValues, Animation.domMarks);
        //construct tree while order the marks according to "sort"
        // console.log('current groupig: ', this.grouping);
        let tmpMarksInOrder = [], leavesOfAnimation = [];
        if (aligning) {
            [tmpMarksInOrder, leavesOfAnimation] = this._grouping.arrangeOrder(markIds, Animation.domMarks, this.root, this.reference, aligning);
        } else {
            [tmpMarksInOrder, leavesOfAnimation] = this.grouping.arrangeOrder(markIds, Animation.domMarks, this.root, this.reference, aligning);
        }
        if (aligning) {
            this.root.children = leavesOfAnimation;
        }
        // console.log('after grouping: ', this.grouping);
        this.marksInOrder = tmpMarksInOrder;
        this.leaves = leavesOfAnimation;

        let markAni = new Map();//the time specs and action specs of each mark, for now using Map, check later to see whether it is worthy to change to Array
        for (let i = 0, markId; i < this.marksInOrder.length | (markId = this.marksInOrder[i]); i++) {
            //record visual status of all marks
            let tmpObj = {};
            for (let j = 0, vAttr; j < Animation.visualAttrs.length | (vAttr = Animation.visualAttrs[j]); j++) {
                if (typeof Animation.domMarks.get(markId)[vAttr] === 'undefined') {
                    switch (vAttr) {
                        case 'opacity'://give default opacity 1
                            tmpObj[vAttr] = 1;
                            break;
                        case 'width'://use the width of the bounding box 
                            tmpObj[vAttr] = Animation.domMarks.get(markId)['bbWidth'];
                            break;
                        case 'height'://use the height of the bounding box 
                            tmpObj[vAttr] = Animation.domMarks.get(markId)['bbHeight'];
                            break;
                        case 'x'://use the position x of the bounding box 
                            tmpObj[vAttr] = Animation.domMarks.get(markId)['bbX'];
                            break;
                        case 'y'://use the position y of the bounding box 
                            tmpObj[vAttr] = Animation.domMarks.get(markId)['bbY'];
                            break;
                        case 'cx'://use the center of the bounding box 
                            if (typeof Animation.domMarks.get(markId)['cx'] !== 'undefined') {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['cx'];
                            } else {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['bbX'] + Animation.domMarks.get(markId)['bbWidth'] / 2;
                            }
                            break;
                        case 'cy'://use the center of the bounding box 
                            if (typeof Animation.domMarks.get(markId)['cy'] !== 'undefined') {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['cy'];
                            } else {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['bbY'] + Animation.domMarks.get(markId)['bbHeight'] / 2;
                            }
                            break;
                        case 'innerRadius'://give default inner radius 0
                            if (typeof Animation.domMarks.get(markId)['innerRadius'] !== 'undefined') {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['innerRadius'];
                            } else {
                                tmpObj[vAttr] = 0
                            }
                            break;
                        case 'outterRadius'://use half of the diagonal line of the bounding box
                            if (typeof Animation.domMarks.get(markId)['outterRadius'] !== 'undefined') {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['outterRadius'];
                            } else {
                                tmpObj[vAttr] = Math.sqrt(Math.pow(Animation.domMarks.get(markId)['bbWidth'] / 2, 2) + Math.pow(Animation.domMarks.get(markId)['bbHeight'] / 2, 2)) + 1;
                            }
                            break;
                        case 'startAngle':
                            if (typeof Animation.domMarks.get(markId)['startAngle'] !== 'undefined') {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['startAngle'];
                            } else {
                                tmpObj[vAttr] = 0;
                            }
                            break;
                        case 'endAngle':
                            if (typeof Animation.domMarks.get(markId)['endAngle'] !== 'undefined') {
                                tmpObj[vAttr] = Animation.domMarks.get(markId)['endAngle'];
                            } else {
                                tmpObj[vAttr] = Math.PI * 2;
                            }
                            break;
                    }
                } else {
                    tmpObj[vAttr] = Animation.domMarks.get(markId)[vAttr];
                }
            }
            if (typeof Animation.finalStatus.get(markId) === 'undefined') {
                Animation.finalStatus.set(markId, []);
            }
            Animation.finalStatus.get(markId).push(tmpObj);

            markAni.set(markId, {
                'startTime': 0, //start time of this mark 
                'totalDuration': actionsDurations.get(markId), //total duration of all the actions of this mark
                'actionAttrs': [] //action attributes of this mark
            });
        }
        //calculate time according to grouping
        let timeDiff = new Map();
        if (typeof this.align !== 'undefined') {
            switch (this.align.type) {
                case Animation.alignTarget.withEle:
                    timeDiff = this.calTimeAsEle(markAni, lastAnimation);
                    break;
                case Animation.alignTarget.withObj:
                    timeDiff = this.calTimeAsObj(markAni, lastAnimation);
                    break;
            }
        } else {//first animation unit
            timeDiff = this.calTimeAsObj(markAni, lastAnimation);
        }

        markAni.forEach(function (value, markId) {
            let tmpObj = { 'startTime': value.startTime + timeDiff.get(markId), 'totalDuration': value.totalDuration, 'actionAttrs': [] };
            that.updateAniStartAndEndTime(tmpObj);
            for (let i = 0, a; i < processedActions.length | (a = processedActions[i]); i++) {
                let tmpActionSpec = new ActionSpec();
                let keys = Object.keys(a);
                for (let j = 0, attr; j < keys.length | (attr = keys[j]); j++) {
                    tmpActionSpec[attr] = a[attr];
                    if (attr === '_duration' && typeof a[attr] === 'object') {
                        let datum = Animation.domMarks.get(markId)['data-datum'];
                        let minAttrValue = minValueEachAttr.get(a[attr].field);
                        tmpActionSpec[attr] = a[attr].minDuration * parseFloat(datum[a[attr].field]) / minAttrValue;
                    } else if (attr === 'offsetStart') {
                        tmpActionSpec[attr] = a[attr].get(markId);
                    }
                }
                //if the animation type is custom then judge if the attribute in the action about to add is a valid property of the target mark
                if (tmpActionSpec.animationType === ActionSpec.targetAnimationType.custom) {
                    if (CanisUtil.checkValidProp(Animation.domMarks.get(markId)['tagName'], tmpActionSpec.attribute[0].attrName)) {
                        tmpObj.actionAttrs.push(tmpActionSpec);
                    }
                } else {
                    tmpObj.actionAttrs.push(tmpActionSpec);
                }
            }

            markAni.set(markId, tmpObj);
        })

        markAni.forEach(function (value, markId) {
            //update the start time of actions
            let frameTimePoint = 0;
            for (let i = 0; i < value.actionAttrs.length; i++) {
                value.actionAttrs[i].startTime = value.startTime + value.actionAttrs[i].offsetStart;//absolute start time
                if (value.actionAttrs[i].startTime + value.actionAttrs[i].duration > frameTimePoint) {
                    frameTimePoint = value.actionAttrs[i].startTime + value.actionAttrs[i].duration;
                }
            }
            if (typeof Animation.allMarkAni.get(markId) === 'undefined') {
                Animation.allMarkAni.set(markId, value);
            } else {//merge animation specs for the same mark
                let currentStartTime = Animation.allMarkAni.get(markId).startTime;
                let currentEndTime = currentStartTime + Animation.allMarkAni.get(markId).totalDuration;
                Animation.allMarkAni.get(markId).startTime = currentStartTime < value.startTime ? currentStartTime : value.startTime;
                let tmpEndTime = value.startTime + value.totalDuration;
                currentEndTime = currentEndTime > tmpEndTime ? currentEndTime : tmpEndTime;
                Animation.allMarkAni.get(markId).totalDuration = currentEndTime - Animation.allMarkAni.get(markId).startTime;
                Animation.allMarkAni.get(markId).actionAttrs = [...Animation.allMarkAni.get(markId).actionAttrs, ...value.actionAttrs];
            }
        })
    }

    calTimeAsEle(markAni, lastAnimation) {
        const that = this;
        this.root.align = this.align;
        //record the start time and duration of the leaves in last animation
        lastAnimation.leaves.forEach(l => {
            const marksInLeaf = l.marks;
            l.leafStart = 100000;
            l.leafEnd = 0;
            marksInLeaf.forEach(mId => {
                const tmpMAni = Animation.allMarkAni.get(mId);
                tmpMAni.startTime < l.leafStart ? l.leafStart = tmpMAni.startTime : null;
                (tmpMAni.startTime + tmpMAni.totalDuration) > l.leafEnd ? l.leafEnd = (tmpMAni.startTime + tmpMAni.totalDuration) : null;
            })
        })
        //check whether can align based on data
        // let alignOnData = false;
        let leafMapping = new Map();//key: leaf index in current animation, value: index of the corresponding leaf in last animation
        lastAnimation.leaves.forEach((l, leafIdx) => {
            let marksSameDatum = [];
            l.marks.forEach(mId => {
                if (typeof ChartSpec.marksWithSameDatum.get(mId) !== 'undefined') {
                    marksSameDatum.push(...ChartSpec.marksWithSameDatum.get(mId));
                }
            })
            marksSameDatum = [...new Set(marksSameDatum)];
            // console.log('marks same datum: ', marksSameDatum, that.leaves);
            for (let i = 0, len = that.leaves.length, tmpL; i < len | (tmpL = that.leaves[i]); i++) {
                if (typeof leafMapping.get(i) === 'undefined') {
                    leafMapping.set(i, []);
                }
                // console.log('checking: ', marksSameDatum, tmpL.marks);
                if (CanisUtil.arrIsContained(marksSameDatum, tmpL.marks)) {
                    // console.log('contained');
                    leafMapping.get(i).push(leafIdx);
                    that.alignOnData = true;
                }
            }
        })
        // console.log('whether align on data: ', this, this.alignOnData, this.leaves);
        if (!this.alignOnData) {//align one after another
            const leafNum = this.leaves.length > lastAnimation.leaves.length ? this.leaves.length : lastAnimation.leaves.length;
            let ofstTime = 0;//record the time offset for each leaf of the last 
            for (let i = 0; i < leafNum; i++) {
                let currentLeafLastAni = lastAnimation.leaves[i];
                let lastleafCurrentAni = this.leaves[i - 1];
                let currentLeafCurrentAni = this.leaves[i];
                let alignToId = '', alignWithId = '';
                //update timig of the current leaf from current animation
                if (typeof currentLeafCurrentAni !== 'undefined') {
                    alignWithId = currentLeafCurrentAni.id;
                    if (typeof currentLeafLastAni === 'undefined') {//cannot find the correspnding leaf from last animation
                        if (typeof lastleafCurrentAni !== 'undefined') {//align with last leaf
                            //find start and end of last leaf
                            lastleafCurrentAni.leafStart = 100000;
                            lastleafCurrentAni.leafEnd = 0;
                            lastleafCurrentAni.marks.forEach(mId => {
                                const tmpMAni = Animation.allMarkAni.get(mId);
                                tmpMAni.startTime < lastleafCurrentAni.leafStart ? lastleafCurrentAni.leafStart = tmpMAni.startTime : null;
                                (tmpMAni.startTime + tmpMAni.totalDuration) > lastleafCurrentAni.leafEnd ? lastleafCurrentAni.leafEnd = (tmpMAni.startTime + tmpMAni.totalDuration) : null;
                            })

                            ofstTime = this.calOfstTimeForLastAni(currentLeafCurrentAni, lastleafCurrentAni, markAni);
                        }
                    } else {//align with the corresponding leaf from last animation
                        currentLeafCurrentAni.alignTo = currentLeafLastAni.id;
                        if (typeof currentLeafLastAni.alignWithLeaves === 'undefined') {
                            currentLeafLastAni.alignWithLeaves = [];
                        }
                        currentLeafLastAni.alignWithLeaves.push(currentLeafCurrentAni);
                        alignToId = currentLeafLastAni.id;
                        ofstTime = this.calOfstTimeForLastAni(currentLeafCurrentAni, currentLeafLastAni, markAni);
                    }
                } else {
                    ofstTime = 0;
                }

                //update timing of the current leaf from last animation
                // const tmpAniId = `${this.chartIdx}_#${this.marksInOrder.join(', #')}`;
                const tmpAniId = `${this.chartIdx}_${this.selector}`;
                // console.log('align on nondata: aniId', tmpAniId);
                this.updateLastAnimationTiming(lastAnimation, currentLeafLastAni, ofstTime, alignToId, alignWithId, tmpAniId);
                // this.updateLastAnimationTiming(lastAnimation, currentLeafLastAni, ofstTime, alignToId, alignWithId, this.id);
            }
        } else {
            const leafNum = this.leaves.length;
            let ofstTime = 0;//record the time offset for each leaf of the last 
            for (let i = 0; i < leafNum; i++) {
                let currentLeafLastAni = lastAnimation.leaves[leafMapping.get(i)[0]];
                let lastleafCurrentAni = this.leaves[i - 1];
                let currentLeafCurrentAni = this.leaves[i];
                // console.log('align realion: ', currentLeafCurrentAni, lastleafCurrentAni, currentLeafLastAni);
                let alignToId = '', alignWithId = '';
                //update timig of the current leaf from current animation
                if (typeof currentLeafCurrentAni !== 'undefined') {
                    alignWithId = currentLeafCurrentAni.id;
                    if (typeof currentLeafLastAni === 'undefined') {//cannot find the correspnding leaf from last animation
                        if (typeof lastleafCurrentAni !== 'undefined') {//align with last leaf
                            //find start and end of last leaf
                            lastleafCurrentAni.leafStart = 100000;
                            lastleafCurrentAni.leafEnd = 0;
                            lastleafCurrentAni.marks.forEach(mId => {
                                const tmpMAni = markAni.get(mId);
                                tmpMAni.startTime < lastleafCurrentAni.leafStart ? lastleafCurrentAni.leafStart = tmpMAni.startTime : null;
                                (tmpMAni.startTime + tmpMAni.totalDuration) > lastleafCurrentAni.leafEnd ? lastleafCurrentAni.leafEnd = (tmpMAni.startTime + tmpMAni.totalDuration) : null;
                            })

                            ofstTime = this.calOfstTimeForLastAni(currentLeafCurrentAni, lastleafCurrentAni, markAni);
                        }
                    } else {//align with the corresponding leaf from last animation
                        currentLeafCurrentAni.alignTo = currentLeafLastAni.id;
                        if (typeof currentLeafLastAni.alignWithLeaves === 'undefined') {
                            currentLeafLastAni.alignWithLeaves = [];
                        }
                        currentLeafLastAni.alignWithLeaves.push(currentLeafCurrentAni);
                        alignToId = currentLeafLastAni.id;
                        ofstTime = this.calOfstTimeForLastAni(currentLeafCurrentAni, currentLeafLastAni, markAni);
                    }
                } else {
                    ofstTime = 0;
                }

                //update timing of the current leaf from last animation
                // const tmpAniId = `${this.chartIdx}_#${this.marksInOrder.join(', #')}`;
                const tmpAniId = `${this.chartIdx}_${this.selector}`;
                // console.log('align on data: aniId', tmpAniId);
                this.updateLastAnimationTiming(lastAnimation, currentLeafLastAni, ofstTime, alignToId, alignWithId, tmpAniId);
                // this.updateLastAnimationTiming(lastAnimation, currentLeafLastAni, ofstTime, alignToId, alignWithId, this.id);
            }
        }

        return this.calAniOffset(markAni, undefined, Animation.alignTarget.withEle);
    }

    calOfstTimeForLastAni(leaf, leafToAlign, markAni) {
        // console.log('cal offset time: ', leaf, leafToAlign);
        let tmpOfstTime = 0;
        leaf.start = 1000000;
        leaf.end = 0;
        let mStartTime = 0;
        switch (this.reference) {
            case TimingSpec.timingRef.previousStart:
                mStartTime = leafToAlign.leafStart;
                leaf.marks.forEach(mId => {
                    const mDuration = markAni.get(mId).totalDuration;
                    markAni.get(mId).startTime = mStartTime;
                    if (mStartTime + mDuration - leafToAlign.leafEnd > tmpOfstTime) {
                        tmpOfstTime = mStartTime + mDuration - leafToAlign.leafEnd;
                    }
                    if (mStartTime < leaf.start) {
                        leaf.start = mStartTime;
                    }
                    if (mStartTime + mDuration > leaf.end) {
                        leaf.end = mStartTime + mDuration;
                    }
                })
                return tmpOfstTime;
            case TimingSpec.timingRef.previousEnd:
                mStartTime = leafToAlign.leafEnd;
                leafToAlign.alignWithLeaves.forEach(l => {
                    if (typeof l.leafEnd !== 'undefined') {
                        if (l.leafEnd > mStartTime) {
                            mStartTime = l.leafEnd;
                        }
                    } else {
                        l.marks.forEach(mId => {
                            if (typeof Animation.allMarkAni.get(mId) !== 'undefined') {
                                const mEndTime = Animation.allMarkAni.get(mId).startTime + Animation.allMarkAni.get(mId).totalDuration;
                                if (mEndTime > mStartTime) {
                                    mStartTime = mEndTime;
                                }
                            }
                        })
                    }
                })

                leaf.marks.forEach(mId => {
                    const mDuration = markAni.get(mId).totalDuration;
                    markAni.get(mId).startTime = mStartTime;
                    if (mStartTime + mDuration > tmpOfstTime) {
                        tmpOfstTime = mDuration;
                    }
                    if (mStartTime < leaf.start) {
                        leaf.start = mStartTime;
                    }
                    if (mStartTime + mDuration > leaf.end) {
                        leaf.end = mStartTime + mDuration;
                    }
                })
                return tmpOfstTime;
            default:
        }
    }

    updateLastAnimationTiming(lastAnimation, currentLeafLastAni, ofstTime, alignToId, alignWithId, alignWithAniId, keepUpdating = true) {
        const that = this;
        // let tmpAlignToId = '';
        if (alignToId !== '') {
            lastAnimation.leaves.forEach(l => {
                if (l.id === alignToId) {
                    if (typeof l.alignWith === 'undefined') {
                        l.alignWith = [];
                    }
                    l.alignWith.push(alignWithAniId);
                    if (typeof l.alignWithIds === 'undefined') {
                        l.alignWithIds = [];
                    }
                    l.alignWithIds.push(alignWithId);
                }
            })
        }
        if (typeof currentLeafLastAni !== 'undefined') {
            const that = this;
            //find the leaves from last animation with the same start time as currentLeafLastAni
            lastAnimation.leaves.forEach(l => {
                let currentLeafLastAniStart = currentLeafLastAni.leafStart;
                if (typeof currentLeafLastAniStart === 'undefined') {
                    currentLeafLastAniStart = 10000000;
                    currentLeafLastAni.marks.forEach(mId => {
                        if (Animation.allMarkAni.get(mId).startTime < currentLeafLastAniStart) {
                            currentLeafLastAniStart = Animation.allMarkAni.get(mId).startTime;
                        }
                    })
                }
                if (typeof l.leafStart !== 'undefined') {
                    if (l.leafStart > currentLeafLastAniStart) {
                        let tmpLeafStart = 100000;
                        l.marks.forEach(mId => {
                            Animation.allMarkAni.get(mId).startTime += ofstTime;
                            if (Animation.allMarkAni.get(mId).startTime < tmpLeafStart) {
                                tmpLeafStart = Animation.allMarkAni.get(mId).startTime;
                            }
                            if (Animation.allMarkAni.get(mId).startTime + Animation.allMarkAni.get(mId).totalDuration > l.leafEnd) {
                                l.leafEnd = Animation.allMarkAni.get(mId).startTime + Animation.allMarkAni.get(mId).totalDuration
                            }
                            if (l.leafEnd > lastAnimation.animationEndTime) {
                                lastAnimation.animationEndTime = l.leafEnd;
                            }
                            Animation.allMarkAni.get(mId).actionAttrs.forEach(a => {
                                a.startTime += ofstTime;
                            })
                        })
                        l.leafStart = tmpLeafStart;
                    }
                } else {
                    l.marks.forEach(mId => {
                        if (Animation.allMarkAni.get(mId).startTime > currentLeafLastAniStart) {
                            Animation.allMarkAni.get(mId).startTime += ofstTime;
                            if (Animation.allMarkAni.get(mId).startTime + Animation.allMarkAni.get(mId).totalDuration > lastAnimation.animationEndTime) {
                                lastAnimation.animationEndTime = Animation.allMarkAni.get(mId).startTime + Animation.allMarkAni.get(mId).totalDuration;
                            }
                            Animation.allMarkAni.get(mId).actionAttrs.forEach(a => {
                                a.startTime += ofstTime;
                            })
                        }
                    })
                }

            })
            //check whether there are other anis aligned to this one
            if (lastAnimation.anisAligned.length > 0) {
                lastAnimation.anisAligned.forEach(aniId => {
                    if (aniId !== `${that.chartIdx}_${that.selector}`) {
                        const aniAligned = Animation.animations.get(aniId);
                        let currentleafAlignedAni;
                        for (let i = 0, len = currentLeafLastAni.alignWithLeaves.length; i < len; i++) {
                            let tmpLeaf = currentLeafLastAni.alignWithLeaves[i];
                            for (let j = 0, len2 = aniAligned.leaves.length; j < len2; j++) {
                                if (tmpLeaf.id === aniAligned.leaves[j].id) {
                                    currentleafAlignedAni = tmpLeaf;
                                    break;
                                }
                            }
                            if (typeof currentleafAlignedAni !== 'undefined') {
                                break;
                            }
                        }
                        that.updateLastAnimationTiming(aniAligned, currentleafAlignedAni, ofstTime, '', '', '', false);
                    }
                })
            }

            //check whether need to keep updating 
            if (typeof lastAnimation.align !== 'undefined' && keepUpdating) {
                if (lastAnimation.align.type === Animation.alignTarget.withEle) {
                    let tmpAni;
                    Animation.animations.forEach((value, key) => {
                        if (lastAnimation.align.target === value.id) {
                            tmpAni = value;
                        }
                    })
                    that.updateLastAnimationTiming(tmpAni, currentLeafLastAni, ofstTime, '', '', '');
                }
            }
        }
    }

    calTimeAsObj(markAni, lastAnimation) {
        this.grouping.calTimeWithTree(this.root, -1, -1, markAni);
        this.root.timingRef = this.reference;
        this.root.offset = this.offset;
        this.root.align = this.align;
        this.root.aniId = this.id;
        //update time according to the time spec of animation
        return this.calAniOffset(markAni, lastAnimation, Animation.alignTarget.withObj);
    }

    calAniOffset(markAni, lastAnimation, type) {
        let tmpAllStart = 10000;
        markAni.forEach(function (value, markId) {
            if (value.startTime < tmpAllStart) {
                tmpAllStart = value.startTime;
            }
        })
        if (type === Animation.alignTarget.withEle) {
            return this.calELeOffsetTime(Animation.domMarks);
        } else {
            return typeof lastAnimation === 'undefined' ? this.calOffsetTime(0, 0, tmpAllStart, Animation.domMarks) : this.calOffsetTime(lastAnimation.animationStartTime, lastAnimation.animationEndTime, tmpAllStart, Animation.domMarks);
        }
    }

    updateAniStartAndEndTime(aniObj) {
        if (aniObj.startTime < this.animationStartTime) {
            this.animationStartTime = aniObj.startTime;
        }
        if (aniObj.startTime + aniObj.totalDuration > this.animationEndTime) {
            this.animationEndTime = aniObj.startTime + aniObj.totalDuration;
        }
    }

    /**
     * calculate timing for each action then render animation by slicing the action specs into frames
     */
    static renderAnimation(status = {}) {
        let that = this;
        this.allMarkAni.forEach((value, markId) => {
            //record the end time of the entire animation, and record the init status of each mark
            if (that.wholeEndTime < value.startTime + value.totalDuration) {
                that.wholeEndTime = value.startTime + value.totalDuration;
            }
        })
        status.info = 'The duration of the generated animation is: ' + this.wholeEndTime + 'ms';

        //replace the 'wholeEnd' place holder in duration
        this.allMarkAni.forEach((value, a) => {
            for (let i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
                if (item.duration === 'wholeEnd') {
                    item.duration = that.wholeEndTime - item.startTime;
                }
            }
        })
    }

    static translateToLottieChannel(attrName) {
        switch (attrName) {
            case 'opacity':
                return ['opacity']
            case 'x':
            case 'cx':
                return ['x'];
            case 'y':
            case 'cy':
                return ['y'];
            case 'r':
                return ['scaleX', 'scaleY'];
            case 'width':
                return ['scaleX'];
            case 'height':
                return ['scaleY'];
            case 'd':
            case 'x1':
            case 'x2':
            case 'y1':
            case 'y2':
                return ['shape'];
            case 'textContent':
                return ['text'];
            case 'fill':
                return ['fillColor'];
            case 'stroke':
                return ['strokeColor'];
        }
    }

    static mapToLottieSpec() {
        let that = this;
        this.allMarkAni.forEach(function (value, markId) {
            for (let i = 0; i < value.actionAttrs.length; i++) {
                let tmpActionSpec = value.actionAttrs[i];
                if (tmpActionSpec.duration > 0) {
                    let targetMark = document.getElementById(markId);//TODO: pass dom here
                    if (tmpActionSpec.type === ActionSpec.actionTargets.mark) {
                        //TODO: consider 'custom'
                        let startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / TimingSpec.FRAME_RATE));
                        let endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / TimingSpec.FRAME_RATE));
                        tmpActionSpec.attribute.forEach((attr) => {
                            if (tmpActionSpec.animationType === ActionSpec.targetAnimationType.custom) {
                                //set anchor for r and text position changings
                                if (attr.attrName === 'r') {
                                    const tmpBbox = getBoundingBox(targetMark);
                                    globalVar.markLayers.get(markId).setStaticProperty('anchorX', tmpBbox[2] / 2);
                                    globalVar.markLayers.get(markId).setStaticProperty('anchorY', tmpBbox[3] / 2);
                                } else if (document.getElementById(markId).tagName === 'text') {
                                    globalVar.markLayers.get(markId).setStaticProperty('anchorY', 0);
                                }

                                //translate visual channels to lottie channels
                                let lottieChannels = Animation.translateToLottieChannel(attr.attrName);
                                if (Array.isArray(attr.to)) {//doing transition
                                    let fromValue = 0, toValue = 0;
                                    for (let j = 0; j < attr.to.length; j++) {
                                        if (attr.to[j][0] === markId) {
                                            fromValue = attr.from[j][1];
                                            toValue = attr.to[j][1];
                                            break;
                                        }
                                    }

                                    lottieChannels.forEach((lc) => {
                                        if (lc === 'shape') {
                                            //transform the start d and end d to shape specification
                                            let fromPosi = [0, 0], toPosi = [0, 0];
                                            // console.log('translating d to lottie spec: ', fromValue, toValue);
                                            [fromPosi, fromValue] = CanisUtil.transDToLottieSpec(fromValue);
                                            [toPosi, toValue] = CanisUtil.transDToLottieSpec(toValue);
                                            globalVar.markLayers.get(markId).setAnimatableProperty(
                                                'x',
                                                startFrame,
                                                endFrame,
                                                fromPosi[0],
                                                toPosi[0],
                                                ActionSpec.transToLottieAction(tmpActionSpec.easing)
                                            );
                                            globalVar.markLayers.get(markId).setAnimatableProperty(
                                                'y',
                                                startFrame,
                                                endFrame,
                                                fromPosi[1],
                                                toPosi[1],
                                                ActionSpec.transToLottieAction(tmpActionSpec.easing)
                                            );
                                        } else if (lc === 'fillColor' || lc === 'strokeColor') {
                                            if (fromValue && toValue && fromValue !== 'none' && toValue !== 'none') {
                                                fromValue = CanisUtil.toLottieRGBA(fromValue);
                                                toValue = CanisUtil.toLottieRGBA(toValue);
                                            } else {
                                                fromValue = toValue = [0, 0, 0, 0];
                                            }

                                        } else if (lc === 'opacity') {
                                            fromValue *= 100;
                                            toValue *= 100;
                                        }

                                        globalVar.markLayers.get(markId).setAnimatableProperty(
                                            lc,
                                            startFrame,
                                            endFrame,
                                            fromValue,
                                            toValue,
                                            ActionSpec.transToLottieAction(tmpActionSpec.easing)
                                        );
                                    })
                                } else {
                                    lottieChannels.forEach((lc) => {//TODO: difference from and to strategy with positions and channels like opacity
                                        globalVar.markLayers.get(markId).setAnimatableProperty(
                                            lc,
                                            startFrame,
                                            endFrame,
                                            attr.from * 100,
                                            attr.to * 100,
                                            ActionSpec.transToLottieAction(tmpActionSpec.easing)
                                        );
                                    })
                                }
                            } else {//if not custom, then attrName is already lottie channels
                                globalVar.markLayers.get(markId).setAnimatableProperty(
                                    attr.attrName,
                                    startFrame,
                                    endFrame,
                                    attr.from * 100,
                                    attr.to * 100,
                                    ActionSpec.transToLottieAction(tmpActionSpec.easing)
                                );
                            }
                        })
                    } else if (tmpActionSpec.type === ActionSpec.actionTargets.mask) {
                        let maskLayer;
                        const tmpBbox = getBoundingBox(targetMark);
                        let r = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['outterRadius'];
                        switch (tmpActionSpec.animationType) {
                            //create rect mask
                            case ActionSpec.targetAnimationType.wipe:
                            case ActionSpec.targetAnimationType.move:
                            case ActionSpec.targetAnimationType.appear:
                                maskLayer = LayerFactory.boundingBox(targetMark);
                                break;
                            //create circle mask
                            case ActionSpec.targetAnimationType.circle:
                                maskLayer = LayerFactory.ellipse(tmpBbox[0] + tmpBbox[2], tmpBbox[1] + tmpBbox[3], r, r);
                                maskLayer.setStaticProperty('anchorX', tmpBbox[2] / 2);
                                maskLayer.setStaticProperty('anchorY', tmpBbox[3] / 2);
                                break;
                            //create circle mask with thick border
                            case ActionSpec.targetAnimationType.wheel:
                                // console.log('going to get path offset: ', d);
                                let pathOffset = CanisUtil.getPathOffset(targetMark.getAttribute('d'));
                                let tmpOffsetX = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['cx'] + tmpBbox[0] - pathOffset[0];
                                let tmpOffsetY = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['cy'] + tmpBbox[1] - pathOffset[1];
                                maskLayer = LayerFactory.ellipse(tmpOffsetX, tmpOffsetY, r, r);

                                let tmpStartAngle = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['startAngle'];
                                let tmpEndAngle = that.finalStatus.get(markId)[tmpActionSpec.chartIdx]['endAngle'];
                                maskLayer.setStaticProperty('trimOffset', -tmpStartAngle / Math.PI / 2 * 360 - 360 / 4);
                                tmpActionSpec.attribute[0].to = 1 - ((tmpEndAngle - tmpStartAngle) % (Math.PI * 2)) / (Math.PI * 2);

                                maskLayer.setStaticProperty('strokeWidth', 2 * r);
                                maskLayer.setStaticProperty('fillOpacity', 0);
                                break;
                            //create path mask
                        }
                        let startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / TimingSpec.FRAME_RATE));
                        let endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / TimingSpec.FRAME_RATE));
                        tmpActionSpec.attribute.forEach((attr) => {
                            maskLayer.setAnimatableProperty(
                                attr.attrName,
                                startFrame,
                                endFrame,
                                attr.from * 100,
                                attr.to * 100,
                                ActionSpec.transToLottieAction(tmpActionSpec.easing)
                            );
                        })
                        globalVar.jsMovin.addMask(maskLayer, globalVar.markLayers.get(markId), tmpActionSpec.maskType);
                    } else {
                        console.error('unkonwn actions target: ', tmpActionSpec.type);
                    }
                }
            }
        })
    }

    static transAlign(alignStr) {
        switch (alignStr) {
            case this.alignTarget.withEle:
                return 'withEle';
            case this.alignTarget.withObj:
                return 'withObj';
        }
    }

    //if the charts changed, then do reset
    static resetAll() {
        this.wholeEndTime = 0;
        this.allMarkAni.clear();
        this.frameTime.clear();
        // this.domMarks.clear();
        this.finalStatus.clear();
        this.animations.clear();
        Animation.aniIdx = 0;
    }

}

Animation.FIRST_ANI_ID = 'ani0';
Animation.aniIdx = 0;
Animation.alignTarget = {
    withEle: 'element',
    withObj: 'object'
}
Animation.alignAttrs = ['target', 'type'];//for error check
Animation.visualAttrs = ['x', 'y', 'cx', 'cy', 'innerRadius', 'outterRadius', 'startAngle', 'endAngle', 'width', 'height', 'opacity', 'fill', 'stroke', 'content', 'stroke-dasharray', 'stroke-dashoffset'];
Animation.domMarks = new Map();
Animation.markClass = new Map();//key: markId, value: class
Animation.allMarks = [];
Animation.attrs = ['id', 'selector', 'grouping', 'effects', 'offset', 'reference', 'align']
Animation.wholeEndTime = 0;
Animation.frameTime = new Map();//key: time, value: whether this time point is a keyframe
Animation.animations = new Map();//record all animations, key:, value: animation obj
Animation.finalStatus = new Map();//record the final visual status of each mark, eg: key:mark1, value: {opacity: 1, height: 226}
Animation.allMarkAni = new Map();
// Animation.easeFuncs = {
//     easeInQuad: (p) => {
//         return p * p;
//     },
//     easeOutQuad: (p) => {
//         return - p * (p - 2);
//     },
//     easeInOutQuad: (p) => {
//         if ((p / 2) < 1) return 1 / 2 * p * p;
//         return - ((--p) * (p - 2) - 1) / 2;
//     },
//     easeInCubic: (p) => {
//         return p * p * p;
//     },
//     easeOutCubic: (p) => {
//         return (p = p - 1) * p * p + 1;
//     },
//     easeInOutCubic: (p) => {
//         if ((p /= 0.5) < 1) return p * p * p / 2;
//         return ((p -= 2) * p * p + 2) / 2;
//     },
//     easeOutBounce: (p) => {
//         let ratio = 0;
//         if (p < (1 / 2.75)) {
//             ratio = 7.5625 * p * p;
//         } else if (p < (2 / 2.75)) {
//             ratio = 7.5625 * (p -= (1.5 / 2.75)) * p + 0.75;
//         } else if (p < (2.5 / 2.75)) {
//             ratio = 7.5625 * (p -= (2.25 / 2.75)) * p + 0.9375;
//         } else {
//             ratio = 7.5625 * (p -= (2.625 / 2.75)) * p + 0.984375;
//         }
//         return ratio;
//     }
// }

export default Animation;