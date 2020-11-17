import TimingSpec from './TimingSpec.js';
import ChartSpec from './ChartSpec.js';
import { globalVar } from './util/GlobalVar.js';
import { EasingFactory, MaskType } from 'jsmovin';
import { CanisUtil } from './util/Util.js';

class ActionSpec extends TimingSpec {
    constructor() {
        super();
        this.chartIdx = 0;
        this._extend = '';
        this._type = ActionSpec.actionTypes.appear;
        this.animationType = '';//not set by the user
        this._easing = ActionSpec.easingType.easeLinear;
        this._duration = 0;
        this.startTime;//not set by the user
        this.attribute = [];
        this.oriActionType;
    }

    /***** getters and setters *****/
    // set 
    set type(tp) {
        if (typeof tp !== 'undefined') {
            if (Object.keys(ActionSpec.actionTypes).includes(tp)) {
                this._type = tp;
            } else {
                alert('the \'type\' of action is not defined. ')
            }
        }
    }

    get type() {
        return this._type;
    }

    set easing(es) {
        if (typeof es !== 'undefined') {
            if (Object.keys(ActionSpec.easingType).includes(es)) {
                this._easing = es;
            } else {
                alert('the \'easing\' of action is not defined. ')
            }
        }
    }

    get easing() {
        return this._easing;
    }

    set duration(drtn) {
        if (typeof drtn === 'number') {
            this._duration = Math.floor(drtn / (1000 / TimingSpec.FRAME_RATE)) * (1000 / TimingSpec.FRAME_RATE);
        } else if (typeof drtn === 'string' || typeof drtn === 'object') {
            this._duration = drtn;
        }
    }

    get duration() {
        return this._duration;
    }
    /***** end getters and setters *****/

    /**
     * init action using json obj
     * @param {JSON obj} actionJson
     */
    initAction(actionJson) {
        this.chartIdx = actionJson.chartIdx;
        this.type = actionJson.type;//action type
        this.animationType = actionJson.animationType;//animation type
        this.maskType = typeof actionJson.maskType === 'undefined' ? MaskType.Alpha : actionJson.maskType;
        this.reference = actionJson.reference;//timingSpec reference
        this.offset = actionJson.delay;//timingSpec delay
        this.duration = actionJson.duration;//action duration
        this.easing = actionJson.easing;
        this.oriActionType = actionJson.oriActionType;

        //attributes only take effect when type is custom
        if (typeof actionJson.attribute !== 'undefined') {
            actionJson.attribute.forEach((attr) => {
                let tmpAttr = {
                    attrName: attr.attrName,
                    from: attr.from,
                    to: attr.to
                };
                this.attribute.push(tmpAttr);
            })
        }
    }

    replaceDurationConst(constants, status = {}) {
        if (typeof this.duration === 'string') {
            if (typeof constants.get(this.duration) === 'undefined') {//check error in animation timing
                //check if it is an equation
                if (this.duration.indexOf("calc") === 0) {
                    this.duration = this.duration.substring(0, this.duration.length - 1).substring(5);
                    constants.forEach((value, key, map) => {
                        if (this.duration.includes(key)) {
                            if (typeof value === 'number') {
                                this.duration = this.duration.replace(new RegExp(key, 'gm'), '' + value);
                            } else {
                                status.info = { type: 'error', msg: 'Duration must be a number or a numeric type constant.', errSpec: '"duration":"' + this.duration.replace(/\s/g, '') + '"' };
                            }
                        }
                    })
                    if (CanisUtil.checkEquation(this.duration, constants)) {
                        this.duration = eval(this.duration);
                    } else {
                        status.info = { type: 'error', msg: 'Wrong equation.', errSpec: '"duration":"' + this.duration.replace(/\s/g, '') + '"' };
                    }
                } else {
                    status.info = { type: 'error', msg: 'Wrong reference of the constant variables.', errSpec: '"duration":"' + this.duration.replace(/\s/g, '') + '"' };
                }
            } else {//replace
                if (typeof constants.get(this.duration) === 'number') {
                    this.duration = constants.get(this.duration);
                } else {
                    status.info = { type: 'error', msg: 'Duration must be a number or a numeric type constant.', errSpec: '"duration":"' + this.duration.replace(/\s/g, '') + '"' };
                }
            }
        } else if (this.duration && typeof this.duration === 'object') {
            if (typeof this.duration.minDuration === 'string') {
                if (typeof constants.get(this.duration.minDuration) === 'undefined') {//check error in animation timing
                    //check if it is an equation
                    if (this.duration.minDuration.indexOf("calc") === 0) {
                        this.duration.minDuration = this.duration.minDuration.substring(0, this.duration.minDuration.length - 1).substring(5);
                        constants.forEach((value, key, map) => {
                            if (this.duration.minDuration.includes(key)) {
                                if (typeof value === 'number') {
                                    this.duration.minDuration = this.duration.minDuration.replace(new RegExp(key, 'gm'), '' + value);
                                } else {
                                    status.info = { type: 'error', msg: 'Duration must be a number or a numeric type constant.', errSpec: '"minDuration":"' + this.duration.minDuration.replace(/\s/g, '') + '"' };
                                }
                            }
                        })
                        if (CanisUtil.checkEquation(this.duration.minDuration, constants)) {
                            this.duration.minDuration = eval(this.duration.minDuration);
                        } else {
                            status.info = { type: 'error', msg: 'Wrong equation.', errSpec: '"minDuration":"' + this.duration.minDuration.replace(/\s/g, '') + '"' };
                        }
                    } else {
                        status.info = { type: 'error', msg: 'Wrong reference of the constant variables.', errSpec: '"minDuration":"' + this.duration.minDuration.replace(/\s/g, '') + '"' };
                    }
                } else {//replace
                    if (typeof constants.get(this.duration.minDuration) === 'number') {
                        this.duration.minDuration = constants.get(this.duration.minDuration);
                    } else {
                        status.info = { type: 'error', msg: 'MinDuration must be a number or a numeric type constant.', errSpec: '"minDuration":"' + this.duration.minDuration.replace(/\s/g, '') + '"' };
                    }
                }
            }
        }
    }

    static assignActionTmpls(actionTmplJson, status = {}) {
        //assign Animation action templates
        this.actionTmpls.clear();
        actionTmplJson.forEach(a => {
            if (!a.name || typeof a.name === 'undefined') {
                a.name = '';
            }
            this.actionTmpls.set(a.name, a);
        })
        //replace the templates reference inside the templates
        this.actionTmpls.forEach((currentTmpl, currentName) => {
            const extendName = currentTmpl.extend;
            if (extendName && typeof extendName !== 'undefined') {
                const extendTmpl = this.actionTmpls.get(extendName);
                if (typeof extendTmpl !== 'undefined') {
                    Object.keys(extendTmpl).forEach(k => {
                        if (k !== 'name' && typeof currentTmpl[k] === 'undefined') {
                            currentTmpl[k] = extendTmpl[k];
                        }
                    })
                    delete currentTmpl.extend;
                    this.actionTmpls.set(currentName, currentTmpl);
                } else {
                    status.info = { type: 'error', msg: 'cannot find the inherited template.', errSpec: '"extend":"' + extendName + '"' };
                }
            }
        })
    }

    static replaceActionTmpls(actionJson, status = {}) {
        if (actionJson.extend && typeof actionJson.extend !== 'undefined') {
            const extendTmpl = this.actionTmpls.get(actionJson.extend);
            if (typeof extendTmpl !== 'undefined') {
                Object.keys(extendTmpl).forEach(k => {
                    if (k !== 'name' && typeof actionJson[k] === 'undefined') {
                        actionJson[k] = extendTmpl[k];
                    }
                })
                delete actionJson.extend;
                return actionJson;
            } else {
                status.info = { type: 'error', msg: 'cannot find the inherited template.', errSpec: '"extend":"' + actionJson.extend + '"' };
                return actionJson;
            }
        }
        return actionJson;
    }

    /**
     * translate template animations to 'custom' type with the transition on some visual attributes
     */
    static transToVisualAttrAction(actionJson, chartIdx, changedAttrs, markIds, status = {}) {
        //repalce action templates if there is any
        actionJson = this.replaceActionTmpls(actionJson);

        //trans to visual attrs
        let actionJsonArr = [];

        //generate pre-render actions
        // for (let i = 0; i < changedAttrs.length; i++) {
        //     let changedAttr = changedAttrs[i];
        //     let fromArr = [], toArr = [];
        //     dataTrans.forEach(function (transArr, markId) {
        //         if (chartIdx + 1 < transArr.length) {
        //             if (changedAttr === 'd' || changedAttr === 'textContent' || changedAttr === 'fill' || changedAttr === 'stroke') {
        //                 let tmpFromItem = [markId, !transArr[chartIdx][changedAttr] ? (changedAttr === 'd' ? 'm0,0' : transArr[chartIdx][changedAttr]) : transArr[chartIdx][changedAttr]],
        //                     tmpToItem = [markId, !transArr[chartIdx + 1][changedAttr] ? (changedAttr === 'd' ? 'm0,0' : transArr[chartIdx + 1][changedAttr]) : transArr[chartIdx + 1][changedAttr]];
        //                 if (changedAttr === 'd') {
        //                     let tmpFromPath = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
        //                         tmpToPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //                     tmpFromPath.setAttributeNS(null, 'd', !transArr[chartIdx][changedAttr] ? 'm0,0' : transArr[chartIdx][changedAttr]);
        //                     tmpToPath.setAttributeNS(null, 'd', !transArr[chartIdx + 1][changedAttr] ? 'm0,0' : transArr[chartIdx + 1][changedAttr]);
        //                     let tmpFromPathLen = tmpFromPath.getTotalLength(),
        //                         tmpToPathLen = tmpToPath.getTotalLength();
        //                     let stepNum = 300, fromPathStepLen = tmpFromPathLen / stepNum, toPathStepLen = tmpToPathLen / stepNum;
        //                     let fromDiscritPath = [], toDiscritPath = [];
        //                     for (let i = 0; i < stepNum; i++) {
        //                         let tmpFromPnt = tmpFromPath.getPointAtLength(fromPathStepLen * i),
        //                             tmpToPnt = tmpToPath.getPointAtLength(toPathStepLen * i);
        //                         fromDiscritPath.push([tmpFromPnt.x, tmpFromPnt.y]);
        //                         toDiscritPath.push([tmpToPnt.x, tmpToPnt.y]);
        //                     }
        //                     tmpFromItem.push(fromDiscritPath);
        //                     tmpToItem.push(toDiscritPath);
        //                 }
        //                 fromArr.push(tmpFromItem);
        //                 toArr.push(tmpToItem);
        //             } else {
        //                 fromArr.push([markId, parseFloat(transArr[chartIdx][changedAttr])]);
        //                 toArr.push([markId, parseFloat(transArr[chartIdx + 1][changedAttr])]);
        //             }
        //         }
        //     })
        //     let preObj = {
        //         chartIdx: actionJson.chartIdx,
        //         reference: TimingSpec.timingRef.previousStart,
        //         offset: 0,
        //         duration: actionJson.type === ActionSpec.actionTypes.transition ? actionJson.duration : 0,
        //         type: ActionSpec.actionTargets.mark,
        //         oriActionType: ActionSpec.actionTypes.custom,
        //         animationType: ActionSpec.targetAnimationType.custom,
        //         attribute: [{
        //             attrName: changedAttr,
        //             from: fromArr,
        //             to: toArr
        //         }]
        //     }

        //     actionJsonArr.push(preObj);
        // }

        if (actionJson.type !== ActionSpec.actionTypes.transition) {
            let tmpObj = {
                chartIdx: actionJson.chartIdx,
                reference: actionJson.reference,//timingSpec offset reference
                offset: actionJson.offset,
                easing: actionJson.easing,
                duration: typeof actionJson.duration === 'undefined' ? TimingSpec.FRAME_RATE : actionJson.duration,
                type: ActionSpec.actionTargets.mask,
                oriActionType: actionJson.type
            };
            // let tmpObj2;

            switch (actionJson.type) {
                case ActionSpec.actionTypes.appear:
                    tmpObj.duration = 1000 / TimingSpec.FRAME_RATE;
                    tmpObj.animationType = ActionSpec.targetAnimationType.fade;
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    tmpObj.attribute = [
                        {
                            attrName: 'opacity',
                            from: 0,
                            to: 1
                        }
                    ];
                    break;
                case ActionSpec.actionTypes.disappear:
                    tmpObj.duration = 1000 / TimingSpec.FRAME_RATE;
                    tmpObj.animationType = ActionSpec.targetAnimationType.fade;
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    tmpObj.attribute = [
                        {
                            attrName: 'opacity',
                            from: 1,
                            to: 0
                        }
                    ];
                    break;
                case ActionSpec.actionTypes.fade:
                    tmpObj.animationType = ActionSpec.targetAnimationType.fade;
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    tmpObj.attribute = [{
                        attrName: 'opacity',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.fadeOut:
                    tmpObj.animationType = ActionSpec.targetAnimationType.fade;
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    tmpObj.attribute = [{
                        attrName: 'opacity',
                        from: 1,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.grow:
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    tmpObj.animationType = ActionSpec.targetAnimationType.grow;
                    tmpObj.attribute = [{
                        attrName: 'trimEnd',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.degrow:
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    tmpObj.animationType = ActionSpec.targetAnimationType.grow;
                    tmpObj.attribute = [{
                        attrName: 'trimEnd',
                        from: 1,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.wipeBottom:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.InvertAlpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleY',
                        from: 0.5,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.wipeOutFromTop:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.InvertAlpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleY',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.wipeTop:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.Alpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleY',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.wipeOutFromBottom:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.Alpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleY',
                        from: 1,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.wipeLeft:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.Alpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleX',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.wipeOutFromRight:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.Alpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleX',
                        from: 1,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.wipeRight:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.InvertAlpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleX',
                        from: 1,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.wipeOutFromLeft:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wipe;
                    tmpObj.maskType = MaskType.InvertAlpha;
                    tmpObj.attribute = [{
                        attrName: 'scaleX',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.circle:
                    tmpObj.animationType = ActionSpec.targetAnimationType.circle;
                    tmpObj.maskType = MaskType.Alpha;
                    tmpObj.attribute = [
                        {
                            attrName: 'scaleX',
                            from: 0,
                            to: 1
                        },
                        {
                            attrName: 'scaleY',
                            from: 0,
                            to: 1
                        }
                    ];
                    break;
                case ActionSpec.actionTypes.circleOut:
                    tmpObj.animationType = ActionSpec.targetAnimationType.circle;
                    tmpObj.maskType = MaskType.Alpha;
                    tmpObj.attribute = [
                        {
                            attrName: 'scaleX',
                            from: 1,
                            to: 0
                        },
                        {
                            attrName: 'scaleY',
                            from: 1,
                            to: 0
                        }
                    ];
                    break;
                case ActionSpec.actionTypes.wheel:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
                    tmpObj.maskType = MaskType.InvertAlpha;
                    tmpObj.attribute = [{
                        attrName: 'trimEnd',
                        from: 1,
                        to: 0
                    }];
                    break;
                case ActionSpec.actionTypes.wheelOut:
                    tmpObj.animationType = ActionSpec.targetAnimationType.wheel;
                    tmpObj.maskType = MaskType.InvertAlpha;
                    tmpObj.attribute = [{
                        attrName: 'trimEnd',
                        from: 0,
                        to: 1
                    }];
                    break;
                case ActionSpec.actionTypes.translateX:
                case ActionSpec.actionTypes.translateY:
                case ActionSpec.actionTypes.translateXY:
                case ActionSpec.actionTypes.scaleX:
                case ActionSpec.actionTypes.scaleY:
                case ActionSpec.actionTypes.scaleXY:
                case ActionSpec.actionTypes.mergedTransition:
                    console.log('test transition: ', ChartSpec.dataTrans, chartIdx);
                    tmpObj.animationType = ActionSpec.targetAnimationType.custom;
                    tmpObj.type = ActionSpec.actionTargets.mark;
                    //generate from and to array
                    let fromArr = [], toArr = [];
                    ChartSpec.dataTrans.forEach(function (transArr, markId) {
                        if (chartIdx < transArr.length && markIds.includes(markId)) {//mark is selected in this animation
                            const transFromD = transArr[chartIdx - 1]['d'];
                            const transToD = transArr[chartIdx]['d'];
                            console.log('calculating dtrans: ', markId);
                            const translatedD = CanisUtil.dTrans(transFromD, transToD, actionJson);
                            if (markId === 'mark109') {
                                console.log('trans from', transFromD);
                                console.log('trans to', transToD);
                                console.log('transed', translatedD);
                            }
                            fromArr.push([markId, transFromD]);
                            toArr.push([markId, translatedD]);
                            transArr[chartIdx - 1]['d'] = translatedD;
                            ChartSpec.dataTrans.set(markId, transArr);
                        }
                    })
                    console.log('translated ', ChartSpec.dataTrans);
                    tmpObj.attribute = [{
                        attrName: 'd',
                        from: fromArr,
                        to: toArr
                    }];
                    break;

                // case ActionSpec.actionTypes.custom:
                //     tmpObj.type = ActionSpec.actionTargets.mark;
                //     tmpObj.animationType = ActionSpec.targetAnimationType.custom;
                //     tmpObj.attribute = {};
                //     if (typeof actionJson.attribute !== 'undefined') {
                //         tmpObj.attribute = [{
                //             attrName: actionJson.attribute.attrName,
                //             from: actionJson.attribute.from,
                //             to: actionJson.attribute.to
                //         }]
                //     }
                //     break;
            }
            actionJsonArr.push(tmpObj);
        }

        console.log('action json in attributes: ', actionJsonArr);

        return actionJsonArr;
    }


    /**
     * calculate the total duration of all the actions
     * @param {Array<ActionSpec>} actionArr 
     * @param {Map} durationAttrValues: key: data attr name, value Map{key: markId, value: attr value}
     */
    static calActionDuration(actionArr, durationAttrValues, domMarks) {
        let wholeStart = 0, wholeEnd = -100000;//start time of the earliest action and end time of the lastst action
        let lastStart = 0, lastEnd = 0;
        let durationWithAttr = false;

        for (let i = 0; i < actionArr.length; i++) {
            let tmpStartMap, tmpEndMap = new Map();
            tmpStartMap = actionArr[i].calOffsetTime(lastStart, lastEnd, 0, domMarks);//change to retunr value of Map

            //ignore the influence of the animation for the boundary of the mask
            if (i > 0) {
                if (actionArr[i - 1].animationType === ActionSpec.targetAnimationType.mistake) {
                    tmpStartMap.forEach(function (tmpStart, markId) {
                        tmpStartMap.set(markId, tmpStart - actionArr[i - 1].offset);
                    })
                }
            }

            let minTmpStart = 1000000, maxTmpEnd = -100000;
            actionArr[i].offsetStart = new Map();
            tmpStartMap.forEach(function (tmpStart, markId) {
                let tmpEnd = 0;
                if (typeof actionArr[i].duration === 'object') {
                    durationWithAttr = true;
                    tmpEnd = tmpStart;
                } else if (typeof actionArr[i].duration === 'number') {
                    tmpEnd = tmpStart + actionArr[i].duration;
                }
                tmpEndMap.set(markId, tmpEnd);
                actionArr[i].offsetStart.set(markId, tmpStart);

                if (tmpStart < minTmpStart) {
                    minTmpStart = tmpStart;
                }
                if (tmpEnd > maxTmpEnd) {
                    maxTmpEnd = tmpEnd;
                }
                if (tmpStart < wholeStart) {
                    wholeStart = tmpStart;
                }
                if (tmpEnd > wholeEnd) {
                    wholeEnd = tmpEnd;
                }
            })

            lastStart = minTmpStart;
            lastEnd = maxTmpEnd;
        }

        let tmpResultDuration = wholeEnd - wholeStart;
        let resultDurations = new Map();//key: markId, value: duraiton of this mark
        let minValueEachAttr = new Map();
        if (durationWithAttr) {//add duration with the attribute values
            //find the min value for each attr
            durationAttrValues.forEach(function (attrs, markId) {
                attrs.forEach(function (attrValue, attrName) {
                    if (typeof minValueEachAttr.get(attrName) === 'undefined' || attrValue[0] < minValueEachAttr.get(attrName)) {
                        minValueEachAttr.set(attrName, attrValue[0]);
                    }
                })
            })
            durationAttrValues.forEach(function (attrs, markId) {
                let tmpExtraDuration = 0;
                attrs.forEach(function (attrValue, attrName) {
                    let minAttrValue = minValueEachAttr.get(attrName);

                    tmpExtraDuration += attrValue[1] * attrValue[0] / minAttrValue;
                })
                resultDurations.set(markId, tmpResultDuration + tmpExtraDuration);
            })
        } else {//directly set the duration of each mark with tmpResultDuration
            durationAttrValues.forEach(function (value, markId) {
                resultDurations.set(markId, tmpResultDuration);
            })
        }
        return [resultDurations, minValueEachAttr, actionArr];
    }

    static transToLottieAction(easingName) {
        switch (easingName) {
            case ActionSpec.easingType.easeLinear:
                return EasingFactory.linear();
            case ActionSpec.easingType.easeInQuad:
                return EasingFactory.easeInQuad();
            case ActionSpec.easingType.easeOutQuad:
                return EasingFactory.easeOutQuad();
            case ActionSpec.easingType.easeInOutQuad:
                return EasingFactory.easeInOutQuad();
            case ActionSpec.easingType.easeInCubic:
                return EasingFactory.easeInCubic();
            case ActionSpec.easingType.easeOutCubic:
                return EasingFactory.easeOutCubic();
            case ActionSpec.easingType.easeInOutCubic:
                return EasingFactory.easeInOutCubic();
        }
    }
}

ActionSpec.actionTmpls = new Map();//record all action templates, key: tmplate name, value: action obj
ActionSpec.attrs = ['extend', 'type', 'offset', 'reference', 'easing', 'duration'];

ActionSpec.actionTypes = {
    fade: 'fade',
    wipeBottom: 'wipe bottom',
    wipeTop: 'wipe top',
    wipeLeft: 'wipe left',
    wipeRight: 'wipe right',
    wheel: 'wheel',
    appear: 'appear',
    test: 'test',
    disappear: 'disappear',
    circle: 'circle',
    grow: 'grow',
    custom: 'custom',
    translateX: 'translate X',
    translateY: 'translate Y',
    translateXY: 'translate XY',
    scaleX: 'scale X',
    scaleY: 'scale Y',
    scaleXY: 'scale XY',
    mergedTransition: 'merge transition',
    fadeOut: 'fade out',
    wipeOutFromLeft: 'wipe out from left',
    wipeOutFromTop: 'wipe out from top',
    wipeOutFromRight: 'wipe out from right',
    wipeOutFromBottom: 'wipe out from bottom',
    wheelOut: 'wheel out',
    circleOut: 'circle out',
    degrow: 'degrow',
    transition: 'magic move',
    zoom: 'zoom',
    mark: 'mask',
    mask: 'mark'
}

ActionSpec.actionTargets = {
    mark: 'mark',
    mask: 'mask'
}

ActionSpec.targetAnimationType = {
    fade: 'fade',
    wipe: 'wipe',
    move: 'move',
    wheel: 'wheel',
    circle: 'circle',
    appear: 'appear',
    test: 'test',
    grow: 'grow',
    custom: 'custom',
    mistake: 'mistake'
}

ActionSpec.easingType = {
    easeLinear: 'easeLinear',
    easeInQuad: 'easeInQuad',
    easeOutQuad: 'easeOutQuad',
    easeInOutQuad: 'easeInOutQuad',
    easeInCubic: 'easeInCubic',
    easeOutCubic: 'easeOutCubic',
    easeInOutCubic: 'easeInOutCubic',
    easeOutBounce: 'easeOutBounce'
}

export default ActionSpec;