import ChartSpec from './ChartSpec.js';
import ActionSpec from './ActionSpec.js';
import GroupingSpec from './GroupingSpec.js';
import TimingSpec from './TimingSpec.js';
import { Util } from './util/Util.js';
import { globalVar } from './util/GlobalVar.js';
import { getBoundingBox } from 'jsmovin/bin/helper';
import { LayerFactory } from 'jsmovin';

class Animation extends TimingSpec {
    constructor() {
        super();
        this.chartIdx;
        this.selection;
        this.grouping = new GroupingSpec();
        this.actions = [];

        //save all dom attrs of the marks selected in this animation
        this.domMarks = new Map();//key: markId, value: dom attrs
        this.animationStartTime = 1000000;
        this.animationEndTime = 0;
    }

    /**
     * translate from json object to Animation object
     * @param {JSON obj} animationJson 
     */
    translate(animationJson, usedChangedAttrs) {
        if (this.checkFormat(animationJson)) {
            this.chartIdx = animationJson.chartIdx;
            this.selection = animationJson.selection;//init selection
            this.reference = animationJson.reference;
            this.offset = animationJson.offset;
            if (typeof animationJson.grouping !== 'undefined') {//init grouping
                this.grouping.initGrouping(animationJson.grouping);
            }

            //translate action specs in the animation Json
            if (typeof animationJson.actions !== 'undefined') {//init actions
                for (let i = 0, actionJson; i < animationJson.actions.length | (actionJson = animationJson.actions[i]); i++) {
                    actionJson.chartIdx = animationJson.chartIdx;
                    let visAttrActionJsonArr = ActionSpec.transToVisualAttrAction(actionJson, animationJson.chartIdx, usedChangedAttrs, ChartSpec.dataTrans);//translate templates to no-templates
                    for (let j = 0, visAttrActionJson; j < visAttrActionJsonArr.length | (visAttrActionJson = visAttrActionJsonArr[j]); j++) {
                        let tmpAction = new ActionSpec();
                        tmpAction.initAction(visAttrActionJson);
                        this.actions.push(tmpAction);
                    }
                }
            }
        }
    }

    /**
     * check if the input json format is illegal
     * @param {JSON obj} animationJson 
     */
    checkFormat(animationJson) {
        let keys = Object.keys(animationJson);
        if (keys.includes('selection')) {
            return true;
        }
        alert('illegal format, no \'selection\' is defined ');
        return false;
    }

    /**
     * calculate timing for each mark;
     * @param {Array} markIds : array of mark ids
     * @param {Animation} lastAnimation : last animation in order to calculate time
     */
    calAniTime(markIds, lastAnimation) {
        let that = this;

        //check whether the durations of the actions are set with the data variables
        let durationAttrValues = new Map();
        for (let i = 0, markId; i < markIds.length | (markId = markIds[i]); i++) {
            let tmpAttrValues = new Map();
            for (let j = 0, action; j < this.actions.length | (action = this.actions[j]); j++) {
                if (typeof action.duration === 'object') {
                    let datum = this.domMarks.get(markId)['data-datum'];
                    let value = parseFloat(datum[action.duration.field]);
                    let minDuration = typeof action.duration.minDuration == 'undefined' ? 300 : action.duration.minDuration;
                    tmpAttrValues.set(action.duration.field, [value, minDuration]);
                }
            }
            durationAttrValues.set(markId, tmpAttrValues);
        }

        //calculate the duration of all actions
        let [actionsDurations, minValueEachAttr, processedActions] = ActionSpec.calActionDuration(this.actions, durationAttrValues, this.domMarks);

        //order the marks according to "sort"
        let marksInOrder = this.grouping.arrangeOrder(markIds, this.domMarks);

        let markAni = new Map();//the time specs and action specs of each mark, for now using Map, check later to see whether it is worthy to change to Array
        let groupByMap = new Map();//record the result of groupBy. key:markId, value:group reference

        for (let i = 0, markId; i < marksInOrder.length | (markId = marksInOrder[i]); i++) {
            //record visual status of all marks
            let tmpObj = {};
            for (let j = 0, vAttr; j < Animation.visualAttrs.length | (vAttr = Animation.visualAttrs[j]); j++) {
                if (typeof this.domMarks.get(markId)[vAttr] === 'undefined') {
                    switch (vAttr) {
                        case 'opacity'://give default opacity 1
                            tmpObj[vAttr] = 1;
                            break;
                        case 'width'://use the width of the bounding box 
                            tmpObj[vAttr] = this.domMarks.get(markId)['bbWidth'];
                            break;
                        case 'height'://use the height of the bounding box 
                            tmpObj[vAttr] = this.domMarks.get(markId)['bbHeight'];
                            break;
                        case 'x'://use the position x of the bounding box 
                            tmpObj[vAttr] = this.domMarks.get(markId)['bbX'];
                            break;
                        case 'y'://use the position y of the bounding box 
                            tmpObj[vAttr] = this.domMarks.get(markId)['bbY'];
                            break;
                        case 'cx'://use the center of the bounding box 
                            tmpObj[vAttr] = this.domMarks.get(markId)['bbX'] + this.domMarks.get(markId)['bbWidth'] / 2;
                            break;
                        case 'cy'://use the center of the bounding box 
                            tmpObj[vAttr] = this.domMarks.get(markId)['bbY'] + this.domMarks.get(markId)['bbHeight'] / 2;
                            break;
                        case 'innerRadius'://give default inner radius 0
                            tmpObj[vAttr] = 0
                            break;
                        case 'outterRadius'://use half of the diagonal line of the bounding box
                            tmpObj[vAttr] = Math.sqrt(Math.pow(this.domMarks.get(markId)['bbWidth'] / 2, 2) + Math.pow(this.domMarks.get(markId)['bbHeight'] / 2, 2));
                            break;
                        case 'startAngle':
                            tmpObj[vAttr] = 0;
                            break;
                        case 'endAngle':
                            tmpObj[vAttr] = Math.PI * 2;
                            break;
                    }
                } else {
                    tmpObj[vAttr] = this.domMarks.get(markId)[vAttr];
                }

                if (tmpObj[vAttr] !== '') {
                    if (typeof Animation.minStatus.get(vAttr) === 'undefined') {
                        Animation.minStatus.set(vAttr, tmpObj[vAttr]);
                    } else {
                        if (parseFloat(Animation.minStatus.get(vAttr)) > parseFloat(tmpObj[vAttr])) {
                            Animation.minStatus.set(vAttr, tmpObj[vAttr]);
                        }
                    }
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

            groupByMap.set(markId, 'allMarks');
        }

        this.grouping.calTimeInGrouping(markAni, this.domMarks);

        //update time according to the time spec of animation
        let tmpAllStart = 10000;
        markAni.forEach(function (value, markId) {
            if (value.startTime < tmpAllStart) {
                tmpAllStart = value.startTime;
            }
        })

        let timeDiff = typeof lastAnimation === 'undefined' ? this.calOffsetTime(0, 0, tmpAllStart, this.domMarks) : this.calOffsetTime(lastAnimation.animationStartTime, lastAnimation.animationEndTime, tmpAllStart, this.domMarks);

        markAni.forEach(function (value, markId) {
            let tmpObj = { 'startTime': value.startTime + timeDiff.get(markId), 'totalDuration': value.totalDuration, 'actionAttrs': [] };
            if (tmpObj.startTime < that.animationStartTime) {
                that.animationStartTime = tmpObj.startTime;
            }
            if (tmpObj.startTime + tmpObj.totalDuration > that.animationEndTime) {
                that.animationEndTime = tmpObj.startTime + tmpObj.totalDuration;
            }
            for (let i = 0, a; i < processedActions.length | (a = processedActions[i]); i++) {
                let tmpActionSpec = new ActionSpec();
                let keys = Object.keys(a);
                for (let j = 0, attr; j < keys.length | (attr = keys[j]); j++) {
                    tmpActionSpec[attr] = a[attr];
                    if (attr === '_duration' && typeof a[attr] === 'object') {
                        let datum = that.domMarks.get(markId)['data-datum'];
                        let minAttrValue = minValueEachAttr.get(a[attr].field);
                        tmpActionSpec[attr] = a[attr].minDuration * parseFloat(datum[a[attr].field]) / minAttrValue;
                    } else if (attr === 'offsetStart') {
                        tmpActionSpec[attr] = a[attr].get(markId);
                    }
                }
                tmpObj.actionAttrs.push(tmpActionSpec);
            }

            markAni.set(markId, tmpObj);
        })

        markAni.forEach(function (value, markId) {
            //update the start time of actions 
            for (let i = 0; i < value.actionAttrs.length; i++) {
                value.actionAttrs[i].startTime = value.startTime + value.actionAttrs[i].offsetStart;//absolute start time
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

    /**
     * calculate timing for each action then render animation by slicing the action specs into frames
     */
    static renderAnimation() {
        let that = this;
        this.allMarkAni.forEach(function (value, markId) {
            //record the end time of the entire animation, and record the init status of each mark
            if (that.wholeEndTime < value.startTime + value.totalDuration) {
                that.wholeEndTime = value.startTime + value.totalDuration;
            }

            // //categorize the actions according to the attribute name in order to insert place holder actions
            // let maskActionByAttr = new Map(), markActionByAttr = new Map();
            // for (let i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
            //     if (item.type === ActionSpec.actionTargets.mark) {
            //         if (typeof markActionByAttr.get(item.attribute.attrName) === 'undefined') {
            //             markActionByAttr.set(item.attribute.attrName, [item]);
            //         } else {
            //             markActionByAttr.get(item.attribute.attrName).push(item);
            //         }
            //     } else if (item.type === ActionSpec.actionTargets.mask) {
            //         if (typeof maskActionByAttr.get(item.attribute.attrName) === 'undefined') {
            //             maskActionByAttr.set(item.attribute.attrName, [item]);
            //         } else {
            //             maskActionByAttr.get(item.attribute.attrName).push(item);
            //         }
            //     } else {
            //         console.log('we have some action with no type !!!!!');
            //     }
            // }

            // //add extra action to fill the timeline for both mark and mask
            // maskActionByAttr.forEach(function (actionList, attrName) {
            //     //put an start action
            //     let tmpAction0 = new ActionSpec();
            //     tmpAction0.type = ActionSpec.actionTargets.mask;
            //     tmpAction0.chartIdx = actionList[0].chartIdx;
            //     tmpAction0.animationType = actionList[0].animationType;
            //     tmpAction0.startTime = 0;
            //     tmpAction0.duration = actionList[0].startTime;
            //     tmpAction0.attribute = [{
            //         'attrName': actionList[0].attribute.attrName,
            //         'from': actionList[0].attribute.from,
            //         'to': actionList[0].attribute.from
            //     }]
            //     value.actionAttrs.push(tmpAction0);
            //     for (let i = 0; i < actionList.length; i++) {
            //         let tmpAction = new ActionSpec();
            //         tmpAction.type = ActionSpec.actionTargets.mask;
            //         tmpAction.chartIdx = actionList[i].chartIdx;
            //         tmpAction.animationType = actionList[i].animationType;
            //         tmpAction.startTime = actionList[i].startTime + actionList[i].duration;
            //         if (i === actionList.length - 1) {
            //             tmpAction.duration = 'wholeEnd';
            //         } else {
            //             tmpAction.duration = actionList[i + 1].startTime - actionList[i].startTime - actionList[i].duration;
            //         }

            //         tmpAction.attribute = [{
            //             'attrName': actionList[i].attribute.attrName,
            //             'from': actionList[i].attribute.to,
            //             'to': actionList[i].attribute.to
            //         }]
            //         value.actionAttrs.push(tmpAction);
            //     }
            // })
            // markActionByAttr.forEach(function (actionList, attrName) {
            //     //put an start action
            //     let tmpAction0 = new ActionSpec();
            //     tmpAction0.type = ActionSpec.actionTargets.mark;
            //     tmpAction0.animationType = actionList[0].animationType;
            //     tmpAction0.startTime = 0;
            //     tmpAction0.duration = actionList[0].startTime;
            //     tmpAction0.attribute = [{
            //         'attrName': actionList[0].attribute.attrName,
            //         'from': actionList[0].attribute.from,
            //         'to': actionList[0].attribute.from
            //     }]
            //     value.actionAttrs.push(tmpAction0);
            //     for (let i = 0; i < actionList.length; i++) {
            //         let tmpAction = new ActionSpec();
            //         tmpAction.type = ActionSpec.actionTargets.mark;
            //         tmpAction.animationType = actionList[i].animationType;
            //         tmpAction.startTime = actionList[i].startTime + actionList[i].duration;
            //         if (i === actionList.length - 1) {
            //             tmpAction.duration = 'wholeEnd';
            //         } else {
            //             tmpAction.duration = actionList[i + 1].startTime - actionList[i].startTime - actionList[i].duration;
            //         }

            //         tmpAction.attribute = [{
            //             'attrName': actionList[i].attribute.attrName,
            //             'from': actionList[i].attribute.to,
            //             'to': actionList[i].attribute.to
            //         }]
            //         value.actionAttrs.push(tmpAction);
            //     }
            // })
        })
        console.log('The duration of the generated animation is: ' + this.wholeEndTime + 'ms');

        //replace the 'wholeEnd' place holder in duration
        this.allMarkAni.forEach(function (value, a) {
            for (let i = 0, item; i < value.actionAttrs.length | (item = value.actionAttrs[i]); i++) {
                if (item.duration === 'wholeEnd') {
                    item.duration = that.wholeEndTime - item.startTime;
                }
            }
        })
        console.log('all mark ani: ', this.allMarkAni);
    }

    static translateToLottieChannel(attrName) {
        switch (attrName) {
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
            case 'textContent':
            case 'fill':
            case 'stroke':
                break;
        }
    }

    static mapToLottieSpec() {
        this.allMarkAni.forEach(function (value, markId) {
            for (let i = 0; i < value.actionAttrs.length; i++) {
                let tmpActionSpec = value.actionAttrs[i];
                if (tmpActionSpec.duration > 0) {
                    console.log('type: ', tmpActionSpec.type);
                    if (tmpActionSpec.type === ActionSpec.actionTargets.mark) {
                        //TODO: consider 'custom'
                        let startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / TimingSpec.FRAME_RATE));
                        let endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / TimingSpec.FRAME_RATE));
                        tmpActionSpec.attribute.forEach((attr) => {
                            if (tmpActionSpec.animationType === ActionSpec.targetAnimationType.custom) {
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
                        let targetMark = document.getElementById(markId);//TODO: pass dom here
                        let maskLayer;
                        const tmpBbox = getBoundingBox(targetMark);
                        let r = Math.sqrt(Math.pow(tmpBbox[2] / 2, 2) + Math.pow(tmpBbox[3] / 2, 2));
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
                                r /= 2;
                                maskLayer = LayerFactory.ellipse(tmpBbox[0] + tmpBbox[2], tmpBbox[1] + tmpBbox[3], r, r);
                                maskLayer.setStaticProperty('anchorX', tmpBbox[2] / 2);
                                maskLayer.setStaticProperty('anchorY', tmpBbox[3] / 2);
                                maskLayer.setStaticProperty('strokeWidth', 2 * r);
                                maskLayer.setStaticProperty('trimStart', 0);
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
                        console.log('adding mask: ', tmpActionSpec.maskType);
                        globalVar.jsMovin.addMask(maskLayer, globalVar.markLayers.get(markId), tmpActionSpec.maskType);






                        // console.log('in mask: ', tmpActionSpec.attribute);
                        // let tmpBbox = getBoundingBox(document.getElementById(markId));
                        // let markStr = `<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000">
                        //     <rect x="${tmpBbox[0]}" y="${tmpBbox[1]}" width="${tmpBbox[2]}" height="${tmpBbox[3]}"></rect>
                        // </svg>`;
                        // let parser = new DOMParser();
                        // let svgMask = parser.parseFromString(markStr, "image/svg+xml").lastChild.children[0];
                        // const maskLayer = LayerFactory.hierarchy(svgMask);
                        // let startFrame = Math.ceil(tmpActionSpec.startTime / (1000 / TimingSpec.FRAME_RATE));
                        // let endFrame = Math.ceil((tmpActionSpec.startTime + tmpActionSpec.duration) / (1000 / TimingSpec.FRAME_RATE));
                        // maskLayer.setAnimatableProperty(
                        //     tmpActionSpec.attribute.attrName,
                        //     startFrame,
                        //     endFrame,
                        //     tmpActionSpec.attribute.from * 100,
                        //     tmpActionSpec.attribute.to * 100,
                        //     tmpActionSpec.easing
                        // );
                        // globalVar.jsMovin.addMask(maskLayer, globalVar.markLayers.get(markId));
                    } else {
                        console.error('unkonwn actions target: ', tmpActionSpec.type);
                    }
                }
            }
        })
    }

    static renderFrame(timePoint) {
        let frame = [];//store the visual status of each mark at this time
        this.allMarkAni.forEach(function (value, markId) {
            let currentStatus = new Map();
            for (let i = 0, a; i < value.actionAttrs.length | (a = value.actionAttrs[i]); i++) {
                if (a.attribute.from === a.attribute.to && a.duration === 0) {//nothing happends in this actionspec, skip it
                    continue;
                }
                let resultValue = Animation.calAttrValue(a, markId, timePoint), lastValue = timePoint >= 0 ? Animation.calAttrValue(a, markId, timePoint - 1) : '';
                if (resultValue !== lastValue) {
                    if (a.startTime <= timePoint && a.startTime + a.duration >= timePoint) {//during this action
                        currentStatus.set(a.attribute.attrName, { 'type': a.type, 'animationType': a.animationType, 'endTime': a.startTime + a.duration, 'attrName': a.attribute.attrName, 'value': resultValue });
                    } else if (a.startTime + a.duration < timePoint) {
                        if (typeof currentStatus.get(a.attribute.attrName) !== 'undefined') {
                            if (currentStatus.get(a.attribute.attrName).endTime < a.startTime + a.duration) {
                                currentStatus.set(a.attribute.attrName, { 'type': a.type, 'animationType': a.animationType, 'endTime': a.startTime + a.duration, 'attrName': a.attribute.attrName, 'value': resultValue });
                            }
                        }
                    }
                }
            }

            if (currentStatus.size > 0) {
                frame.push([markId, currentStatus]);
            }
        })
        return frame;
    }

    static calAttrValue(a, markId, timePoint) {
        let resultValue, chartIdx = a.chartIdx;

        if (a.startTime <= timePoint && a.startTime + a.duration >= timePoint) {//during this action
            let percentage = parseFloat(timePoint - a.startTime) / parseFloat(a.duration);
            let ratio = this.calRatio(percentage, a.easing);
            switch (a.attribute.attrName) {
                case 'fill':
                case 'stroke':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {
                            let fromColor;
                            let toColor;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && typeof a.attribute.to[j][1] === 'string') {
                                    fromColor = a.attribute.from[j][1];
                                    toColor = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            let fromRGB = Util.color2RGB(fromColor), toRGB = Util.color2RGB(toColor);
                            let valueR = parseInt((toRGB[0] - fromRGB[0]) * ratio) + fromRGB[0];
                            let valueG = parseInt((toRGB[1] - fromRGB[1]) * ratio) + fromRGB[1];
                            let valueB = parseInt((toRGB[2] - fromRGB[2]) * ratio) + fromRGB[2];
                            resultValue = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
                        }
                    }
                    break;
                case 'textContent':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {
                            let startValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && (!isNaN(a.attribute.to[j][1]) || typeof a.attribute.to[j][1] === 'string')) {
                                    startValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = startValue;
                        }
                    }
                    break;
                case 'width':
                case 'height':
                case 'r':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {
                            let startValue = 0;
                            let finalValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && !isNaN(a.attribute.from[j][1]) && !isNaN(a.attribute.to[j][1])) {
                                    startValue = a.attribute.from[j][1];
                                    finalValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = startValue + (finalValue - startValue) * ratio;
                        } else {
                            let startValue = 0;
                            let finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                            resultValue = startValue - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (startValue - finalValue);
                        }
                    } else {
                        let startValue = parseFloat(this.minStatus.get(a.attribute.attrName));
                        let finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                        if (startValue < 0) {
                            resultValue = startValue + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (finalValue - startValue);
                        } else {
                            resultValue = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * finalValue;
                        }
                    }
                    break;
                case 'y':
                case 'y1':
                case 'y2':
                case 'cy':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {
                            let startValue = 0;
                            let finalValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && !isNaN(a.attribute.from[j][1]) && !isNaN(a.attribute.to[j][1])) {
                                    startValue = a.attribute.from[j][1];
                                    finalValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = startValue + (finalValue - startValue) * ratio;
                        } else {
                            let startValue = this.startY;
                            let finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                            resultValue = startValue - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (startValue - finalValue);
                        }
                    } else if (a.type === ActionSpec.actionTargets.mask) {
                        resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) - 1 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (parseFloat(this.finalStatus.get(markId)[chartIdx]['height']) + 2);
                    }
                    break;
                case 'x':
                case 'x1':
                case 'x2':
                case 'cx':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {//changing from one status to the other
                            let startValue = 0;
                            let finalValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && !isNaN(a.attribute.from[j][1]) && !isNaN(a.attribute.to[j][1])) {
                                    startValue = a.attribute.from[j][1];
                                    finalValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = startValue + (finalValue - startValue) * ratio;
                        } else {//marks entering charts
                            let startValue = this.startX;
                            let finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                            resultValue = startValue + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (finalValue - startValue);
                        }
                    } else if (a.type === ActionSpec.actionTargets.mask) {
                        resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) - 1 + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (parseFloat(this.finalStatus.get(markId)[chartIdx]['width']) + 2);
                    }
                    break;
                case 'startAngle':
                    let startAngle = parseFloat(this.finalStatus.get(markId)[chartIdx].startAngle);
                    let endAngle = parseFloat(this.finalStatus.get(markId)[chartIdx].endAngle);

                    let _startAngle = startAngle < 0 ? startAngle + 2 * Math.PI : startAngle;
                    let _endAngle = endAngle < 0 || _startAngle > endAngle ? endAngle + 2 * Math.PI : endAngle;

                    let tmpAngle;
                    if (_endAngle > _startAngle) {
                        tmpAngle = _startAngle + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (_endAngle - _startAngle);
                    } else {
                        tmpAngle = _startAngle + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (Math.PI * 2 - _startAngle + _endAngle);
                    }

                    resultValue = {
                        'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                        'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                        'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']),
                        'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) + 2,
                        'startAngle': tmpAngle,
                        'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
                    }
                    break;
                case 'innerRadius':
                    let startRadius = parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']);
                    let endRadius = parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']);
                    let tmpRadius = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (endRadius - startRadius);
                    if (tmpRadius < 0) {
                        resultValue = {
                            'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                            'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                            'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']) + 2,
                            'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) - tmpRadius + 2,
                            'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                            'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
                        }
                    } else {
                        resultValue = {
                            'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                            'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                            'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']) + tmpRadius + 2,
                            'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']) + 2,
                            'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                            'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
                        }
                    }
                    break;
                case 'stroke-dashoffset':
                    let startDashOffset = 0;
                    let finalDashOffset = parseFloat(this.finalStatus.get(markId)[chartIdx]['stroke-dasharray']);
                    resultValue = startDashOffset - (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (startDashOffset - finalDashOffset);
                    break;
                case 'd':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {//changing from one status to the other
                            let startValue = '', finalValue = '', startDiscretVal = '', finalDiscretVal = '';
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && a.attribute.from[j][1] && a.attribute.to[j][1]) {
                                    startValue = a.attribute.from[j][1];
                                    finalValue = a.attribute.to[j][1];
                                    startDiscretVal = a.attribute.from[j][2];
                                    finalDiscretVal = a.attribute.to[j][2];
                                    break;
                                }
                            }
                            resultValue = Util.calTransD(startValue, finalValue, ratio, startDiscretVal, finalDiscretVal);
                        }
                    }
                    break;
                default://numeric attribute values
                    let startValue = parseFloat(this.minStatus.get(a.attribute.attrName));
                    let finalValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                    if (startValue < 0) {
                        resultValue = startValue + (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * (finalValue - startValue);
                    } else {
                        resultValue = (parseFloat(a.attribute.to - a.attribute.from) * ratio + a.attribute.from) * finalValue;
                    }
            }
        } else if (a.startTime + a.duration < timePoint) {//past actions
            switch (a.attribute.attrName) {
                case 'fill':
                case 'stroke':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && typeof a.attribute.to[j][1] === 'string') {
                                    resultValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                        } else {
                            resultValue = this.finalStatus.get(markId)[chartIdx][a.attribute.attrName];
                        }
                    }
                    break;
                case 'textContent':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {
                            let startValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId && (!isNaN(a.attribute.to[j][1]) || typeof a.attribute.to[j][1] === 'string')) {
                                    startValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = startValue;
                        }
                    }
                    break;
                case 'width':
                case 'height':
                case 'r':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {//changing from one status to the other
                            let finalValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId) {
                                    finalValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = finalValue;
                        } else {
                            resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                        }
                    } else {
                        resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                    }
                    break;
                case 'y':
                case 'y1':
                case 'y2':
                case 'cy':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {//changing from one status to the other
                            let finalValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId) {
                                    finalValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = finalValue;
                        } else {
                            resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                        }
                    } else if (a.type === ActionSpec.actionTargets.mask) {
                        resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) + parseFloat(this.finalStatus.get(markId)[chartIdx]['height']);
                    }
                    break;
                case 'x':
                case 'x1':
                case 'x2':
                case 'cx':
                    if (a.type === ActionSpec.actionTargets.mark) {
                        if (Array.isArray(a.attribute.to)) {//changing from one status to the other
                            let finalValue = 0;
                            for (let j = 0; j < a.attribute.to.length; j++) {
                                if (a.attribute.to[j][0] === markId) {
                                    finalValue = a.attribute.to[j][1];
                                    break;
                                }
                            }
                            resultValue = finalValue;
                        } else {
                            resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                        }
                    } else if (a.type === ActionSpec.actionTargets.mask) {
                        resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]) + parseFloat(this.finalStatus.get(markId)[chartIdx]['height']);
                    }
                    break;
                case 'startAngle':
                case 'innerRadius':
                    resultValue = {
                        'cx': parseFloat(this.finalStatus.get(markId)[chartIdx]['cx']),
                        'cy': parseFloat(this.finalStatus.get(markId)[chartIdx]['cy']),
                        'innerRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['innerRadius']),
                        'outterRadius': parseFloat(this.finalStatus.get(markId)[chartIdx]['outterRadius']),
                        'startAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['startAngle']),
                        'endAngle': parseFloat(this.finalStatus.get(markId)[chartIdx]['endAngle'])
                    }
                    break;
                default://numeric attribute values
                    if (typeof this.finalStatus.get(markId)[chartIdx] !== 'undefined') {
                        resultValue = parseFloat(this.finalStatus.get(markId)[chartIdx][a.attribute.attrName]);
                    }
            }
        }
        return resultValue;
    }

    // static calRatio(percentage, easingType) {
    //     let ratio = 0;
    //     switch (easingType) {
    //         case ActionSpec.easingType.easeLinear:
    //             ratio = percentage;
    //             break;
    //         case ActionSpec.easingType.easeInQuad:
    //             ratio = this.easeFuncs.easeInQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutQuad:
    //             ratio = this.easeFuncs.easeOutQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInOutQuad:
    //             ratio = this.easeFuncs.easeInOutQuad(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInCubic:
    //             ratio = this.easeFuncs.easeInCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutCubic:
    //             ratio = this.easeFuncs.easeOutCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeInOutCubic:
    //             ratio = this.easeFuncs.easeInOutCubic(percentage);
    //             break;
    //         case ActionSpec.easingType.easeOutBounce:
    //             ratio = this.easeFuncs.easeOutBounce(percentage);
    //             break;

    //     }
    //     return ratio;
    // }

    static resetAll() {
        this.wholeEndTime = 0;
        this.allMarkAni.clear();
        this.minStatus.clear();
        this.finalStatus.clear();
        this.frames.clear();
    }

}

Animation.visualAttrs = ['x', 'y', 'cx', 'cy', 'innerRadius', 'outterRadius', 'startAngle', 'endAngle', 'width', 'height', 'opacity', 'fill', 'stroke', 'content', 'stroke-dasharray', 'stroke-dashoffset'];
Animation.startY = 0;//start coord of Y
Animation.startX = 0;//start coord of X
Animation.endX = 0;//end coord of X
Animation.wholeEndTime = 0;
Animation.minStatus = new Map();//record the min value of each attribute.
Animation.finalStatus = new Map();//record the final visual status of each mark, eg: key:mark1, value: {opacity: 1, height: 226}
Animation.allMarkAni = new Map();
Animation.frames = new Map();//output frames
Animation.easeFuncs = {
    easeInQuad: (p) => {
        return p * p;
    },
    easeOutQuad: (p) => {
        return - p * (p - 2);
    },
    easeInOutQuad: (p) => {
        if ((p / 2) < 1) return 1 / 2 * p * p;
        return - ((--p) * (p - 2) - 1) / 2;
    },
    easeInCubic: (p) => {
        return p * p * p;
    },
    easeOutCubic: (p) => {
        return (p = p - 1) * p * p + 1;
    },
    easeInOutCubic: (p) => {
        if ((p /= 0.5) < 1) return p * p * p / 2;
        return ((p -= 2) * p * p + 2) / 2;
    },
    easeOutBounce: (p) => {
        let ratio = 0;
        if (p < (1 / 2.75)) {
            ratio = 7.5625 * p * p;
        } else if (p < (2 / 2.75)) {
            ratio = 7.5625 * (p -= (1.5 / 2.75)) * p + 0.75;
        } else if (p < (2.5 / 2.75)) {
            ratio = 7.5625 * (p -= (2.25 / 2.75)) * p + 0.9375;
        } else {
            ratio = 7.5625 * (p -= (2.625 / 2.75)) * p + 0.984375;
        }
        return ratio;
    }
}

export default Animation;