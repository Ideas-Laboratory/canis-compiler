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
        this.chartIdx;
        this.selection;
        this.grouping = new GroupingSpec();
        this.actions = [];

        //save all dom attrs of the marks selected in this animation
        // Animation.domMarks = new Map();//key: markId, value: dom attrs
        this.animationStartTime = 1000000;
        this.animationEndTime = 0;
    }

    /**
     * translate from json object to Animation object
     * @param {JSON obj} animationJson 
     */
    translate(animationJson, usedChangedAttrs, updating = false) {
        if (this.checkFormat(animationJson)) {
            this.chartIdx = animationJson.chartIdx;
            if (!updating) {
                this.selection = animationJson.selection;//init selection
            }
            this.reference = animationJson.reference;
            this.offset = animationJson.offset;
            if (typeof animationJson.grouping !== 'undefined') {//init grouping
                this.grouping.initGrouping(animationJson.grouping);
            }

            //translate action specs in the animation Json
            if (typeof animationJson.actions !== 'undefined') {//init actions
                if(updating){
                    this.actions = [];
                }
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
        } else {
            console.error('animation spec not correct!');
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
        console.time('cal ani time');
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
        let marksInOrder = this.grouping.arrangeOrder(markIds, Animation.domMarks);

        let markAni = new Map();//the time specs and action specs of each mark, for now using Map, check later to see whether it is worthy to change to Array

        for (let i = 0, markId; i < marksInOrder.length | (markId = marksInOrder[i]); i++) {
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
        this.grouping.calTimeWithTree(this.grouping.root, -1, -1, markAni);
        console.log('generated tree: ', this.grouping.root);
        // console.log('wrong mark: ', markAni.get('mark106'));

        //update time according to the time spec of animation
        let tmpAllStart = 10000;
        markAni.forEach(function (value, markId) {
            if (value.startTime < tmpAllStart) {
                tmpAllStart = value.startTime;
            }
        })

        let timeDiff = typeof lastAnimation === 'undefined' ? this.calOffsetTime(0, 0, tmpAllStart, Animation.domMarks) : this.calOffsetTime(lastAnimation.animationStartTime, lastAnimation.animationEndTime, tmpAllStart, Animation.domMarks);

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
        console.timeEnd('cal ani time');
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
        // console.log('all mark ani: ', this.allMarkAni);
        console.log('wrong mark: ', this.allMarkAni.get('mark106'));
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
                        // let r = Math.sqrt(Math.pow(tmpBbox[2] / 2, 2) + Math.pow(tmpBbox[3] / 2, 2));
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

    //if the charts changed, then do reset
    static resetAll() {
        this.wholeEndTime = 0;
        this.allMarkAni.clear();
        // this.domMarks.clear();
        this.finalStatus.clear();
        // this.animations.clear();
    }

}

Animation.visualAttrs = ['x', 'y', 'cx', 'cy', 'innerRadius', 'outterRadius', 'startAngle', 'endAngle', 'width', 'height', 'opacity', 'fill', 'stroke', 'content', 'stroke-dasharray', 'stroke-dashoffset'];
Animation.domMarks = new Map();
Animation.wholeEndTime = 0;
Animation.animations = new Map();//record all animations, key:, value: animation obj
Animation.finalStatus = new Map();//record the final visual status of each mark, eg: key:mark1, value: {opacity: 1, height: 226}
Animation.allMarkAni = new Map();
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