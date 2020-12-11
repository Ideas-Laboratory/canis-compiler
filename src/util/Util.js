import { PathMaker } from 'jsmovin';
import { parseSVG } from 'svg-path-parser'
import ActionSpec from '../ActionSpec';
import ChartSpec from '../ChartSpec';

export class CanisUtil {
    constructor() { }

    /**
     * check whether arr2 is contained in arr1
     * @param {*} arr1 
     * @param {*} arr2 
     */
    static arrIsContained(arr1, arr2) {
        if (arr2.length > arr1) {
            return false;
        }
        for (let i = 0, len = arr2.length; i < len; i++) {
            if (!arr1.includes(arr2[i])) {
                return false;
            }
        }

        return true;
    }

    static checkEquation(string, constants) {
        // 剔除空白符
        string = string.replace(/\s/g, '');

        // 错误情况，空字符串
        if ("" === string) {
            // return false;
        }
        if (/^[\x\÷\+\-\*\/]/.test(string)) {
            // console.error(& amp; quot; 运算符开头 & amp; quot;);
            return false;
        }

        //错误情况，运算符结尾
        if (/[\x\÷\+\-\*\/]$/.test(string)) {
            // console.error(& amp; quot; 运算符结尾 & amp; quot;);
            return false;
        }

        // 错误情况，(后面是运算符或者)
        if (/\([\x\÷\+\-\*\/]/.test(string)) {
            // console.error(& amp; quot; (后面是运算符或者) & amp; quot;);
            return false;
        }
        // 错误情况，运算符连续
        if (/[\x\÷\+\-\*\/]{2,}/.test(string)) {
            return false;
        }

        // 空括号
        if (/\(\)/.test(string)) {
            return false;
        }

        // 错误情况，括号不配对
        var stack = [];
        for (var i = 0, item; i < string.length; i++) {
            item = string.charAt(i);
            if ('(' === item) {
                stack.push('(');
            } else if (')' === item) {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        if (0 !== stack.length) {
            return false;
        }

        // 错误情况，(后面是运算符 
        if (/\([\x\÷\+\-\*\/]/.test(string)) {
            return false;
        }

        // 错误情况，)前面是运算符
        if (/[\x\÷\+\-\*\/]\)/.test(string)) {
            return false;
        }

        // 错误情况，(前面不是运算符
        if (/[\x\÷\+\-\*\/]\(/.test(string)) {
            return false;
        }

        // 错误情况，)后面不是运算符
        if (/\)[\x\÷\+\-\*\/]/.test(string)) {
            return false;
        }

        // 错误情况，变量没有来自“待选公式变量”
        var tmpStr = string.replace(/[\(\)\x\÷\+\-\*\/]{1,}/g, '`');
        var array = tmpStr.split(',');
        for (let i = 0, item; i < array.length; i++) {
            item = array[i];
            if (/[A-Z]/i.test(item) && 'undefined' == typeof (constants.get(item))) {
                return false;
            }
        }
        let stringarr = string.split(',');
        // let objarr = Object.keys(obj);
        for (let index = 0; index < stringarr.length; index++) {
            if (typeof constants.get(stringarr[index]) !== 'undefined') {
                if (stringarr[index + 1] == undefined) {
                } else if (stringarr[index + 1] !== '+' && stringarr[index + 1] !== '.' && stringarr[index + 1] !== '-' && stringarr[index + 1] !== 'x' && stringarr[index + 1] !== '÷' && stringarr[index + 1] !== '(' && stringarr[index + 1] !== ')') {
                    return false
                }
            }

        }

        return true;
    }

    static deepClone(obj) {
        if (!obj || true == obj) //this also handles boolean as true and false
            return obj;
        var objType = typeof (obj);
        if ("number" == objType || "string" == objType) // add your immutables here
            return obj;
        var result = Array.isArray(obj) ? [] : {};
        if (obj instanceof Map) {
            result = new Map();
            for (let i = 0; i < obj.keys().length; i++) {
                let key = obj.keys()[i];
                result.set(key, this.deepClone(obj.get(key)));
            }
        }
        for (var key in obj)
            if (obj.hasOwnProperty(key))
                result[key] = this.deepClone(obj[key]);
        return result;
    }

    static arrayIntersact(arr1, arr2) {
        return arr1.filter(v => arr2.includes(v));
    }

    static formatTime(time) {
        let currentTimeS = parseInt(time / 1000);
        let currentTimeMS = parseInt(time % 1000 / 10);
        let currentTimeSStr = currentTimeS < 10 ? '0' + currentTimeS : '' + currentTimeS;
        let currentTimeMSStr = currentTimeMS < 10 ? '0' + currentTimeMS : '' + currentTimeMS;
        return currentTimeSStr + ':' + currentTimeMSStr;
    }

    static color2RGB(color) {
        if (color) {
            color = color.toLowerCase();
            if (Array.from(this.colorNames.keys()).includes(color)) {
                color = this.colorNames.get(color);
            }
            color = color.replace(/\s/g, '');
            if (color.indexOf('rgb') >= 0) {
                let tmpStr = color.substr(color.indexOf('(') + 1);
                tmpStr = tmpStr.substring(0, tmpStr.indexOf(')'));
                let rgb = tmpStr.split(',');
                if (rgb.length === 3) {
                    rgb[3] = 255;
                }
                return [parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3])];
            } else if (color.indexOf('#') >= 0) {
                return this.HEX2RGB(color);
            }
        }

        return "none";
    }

    static HEX2RGB(hex) {
        if (hex.charAt(0) === '#') {
            hex = hex.substr(1);
        }
        if ((hex.length < 2) || (hex.length > 6)) {
            return false;
        }
        let values = hex.split(''),
            r,
            g,
            b,
            a = 255;

        if (hex.length === 2) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = r;
            b = r;
        } else if (hex.length === 3) {
            r = parseInt(values[0].toString() + values[0].toString(), 16);
            g = parseInt(values[1].toString() + values[1].toString(), 16);
            b = parseInt(values[2].toString() + values[2].toString(), 16);
        } else if (hex.length === 6) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = parseInt(values[2].toString() + values[3].toString(), 16);
            b = parseInt(values[4].toString() + values[5].toString(), 16);
        } else {
            return false;
        }
        return [r, g, b, a];
    }

    static toLottieRGBA(color) {
        return this.color2RGB(color).map((c) => c / 255);
    }

    static toJSON(node) {
        node = node || this;
        let obj = {
            nodeType: node.nodeType
        };
        if (node.tagName) {
            obj.tagName = node.tagName.toLowerCase();
        } else
            if (node.nodeName) {
                obj.nodeName = node.nodeName;
            }
        if (node.nodeValue) {
            obj.nodeValue = node.nodeValue;
        }
        let attrs = node.attributes;
        if (attrs) {
            obj.attr = {};
            for (let i = 0, attr; i < attrs.length | (attr = attrs[i]); i++) {
                obj.attr[attr.nodeName] = attr.nodeValue;
            }
        }

        return obj;
    }

    /**
     * @param d: d in path
     * @param stepNum: number of steps (points)
     * @result: points on path (can do morphin)
     */
    static discretizePathToPnts(d, stepNum) {
        let tmpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        tmpPath.setAttributeNS(null, 'd', d);
        let tmpPathLen = tmpPath.getTotalLength();
        let pathStepLen = tmpPathLen / stepNum;
        let discritPath = [];
        for (let i = 0; i < stepNum; i++) {
            let tmpPnt = tmpPath.getPointAtLength(pathStepLen * i);
            discritPath.push([tmpPnt.x, tmpPnt.y]);
        }
        return discritPath;
    }

    static checkDSameShape(d1, d2) {
        let sameShape = false;
        if (typeof d1 !== 'undefined' && typeof d2 !== 'undefined') {
            let d1Cmds = [], d2Cmds = [];
            let cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
            if (typeof d1 === 'string') {
                d1 = d1.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
                d1Cmds = d1.match(cmdRegExp);
            } else if (d1 instanceof Array) {
                d1Cmds = d1;
            }

            if (typeof d2 === 'string') {
                d2 = d2.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
                d2Cmds = d2.match(cmdRegExp);
            } else if (d2 instanceof Array) {
                d2Cmds = d2;
            }

            //check if they are of same shape
            sameShape = d1Cmds.length === d2Cmds.length;
            if (sameShape) {
                for (let i = 0; i < d1Cmds.length; i++) {
                    let d1CmdName = d1Cmds[i].substring(0, 1);
                    let d2CmdName = d2Cmds[i].substring(0, 1);
                    if (d1CmdName !== d2CmdName) {
                        sameShape = false;
                        break;
                    }
                }
            }
        } else {
            console.error('undefined d in checkDSameShape!');
        }
        return sameShape
    }

    static findDStartEnd(cmds) {
        let startX = 0, startY = 0, relativeEndX = 0, relativeEndY = 0, endX = 0, endY = 0;//endX = startX + relativeEndX
        if (cmds) {
            for (let i = 0; i < cmds.length; i++) {
                let cmdName = cmds[i].substring(0, 1);
                const cmdValues = cmds[i].substring(1).split(',');
                switch (cmdName) {
                    case 'M':
                    case 'm':
                        startX = parseFloat(cmdValues[0]);
                        startY = parseFloat(cmdValues[1]);
                        break;
                    case 'L':
                    case 'T':
                        endX = parseFloat(cmdValues[0]);
                        endY = parseFloat(cmdValues[1]);
                        break;
                    case 'l':
                    case 't':
                        relativeEndX = parseFloat(cmdValues[0]);
                        relativeEndY = parseFloat(cmdValues[1]);
                        break;
                    case 'H':
                        endX = parseFloat(cmdValues[0]);
                        break;
                    case 'h':
                        relativeEndX = parseFloat(cmdValues[0]);
                        break;
                    case 'V':
                        endY = parseFloat(cmdValues[0]);
                        break;
                    case 'v':
                        relativeEndY = parseFloat(cmdValues[0]);
                        break;
                    case 'C':
                        endX = parseFloat(cmdValues[4]);
                        endY = parseFloat(cmdValues[5]);
                        break;
                    case 'c':
                        relativeEndX = parseFloat(cmdValues[4]);
                        relativeEndY = parseFloat(cmdValues[5]);
                        break;
                    case 'S':
                    case 'Q':
                        endX = parseFloat(cmdValues[2]);
                        endY = parseFloat(cmdValues[3]);
                        break;
                    case 's':
                    case 'q':
                        relativeEndX = parseFloat(cmdValues[2]);
                        relativeEndY = parseFloat(cmdValues[3]);
                        break;
                    case 'A':
                    case 'a':
                        relativeEndX = parseFloat(cmdValues[0]) * 2;
                        relativeEndY = parseFloat(cmdValues[1]) * 2;
                        break;
                    default:
                        break;
                }
            }
        } else {
            console.error('wrong d in findDStartEnd!');
        }
        return {
            startX: startX,
            startY: startY,
            endX: endX,
            endY: endY,
            relativeEndX: relativeEndX,
            relativeEndY: relativeEndY
        }
    }

    static checkValidOffsetDCmd(offsetVal, scaleVal, oriVal, targetVal) {
        const thr = 1;
        return (Math.abs(targetVal - offsetVal) < thr || Math.abs(oriVal - offsetVal) < thr || Math.abs(targetVal - scaleVal - offsetVal) < thr);
    }

    static scale(val, scale) {
        return scale.range[0] + (scale.range[1] - scale.range[0]) * (val - scale.domain[0]) / (scale.domain[1] - scale.domain[0]);
    }

    static toApproxNum(num) {
        return parseFloat(parseFloat(num).toFixed(1));
    }

    static orderDCmdsCoords(dCmds) {
        const yCoords = [], xCoords = [];
        for (let i = 0; i < dCmds.length; i++) {
            const cmdName = dCmds[i].substring(0, 1);
            const cmdValue = dCmds[i].substring(1);
            let nums = cmdValue.split(',');
            switch (cmdName) {
                case 'M':
                case 'm':
                case 'L':
                case 'l':
                case 'T':
                case 't':
                    xCoords.push(this.toApproxNum(nums[0]));
                    yCoords.push(this.toApproxNum(nums[1]));
                    break;
                case 'S':
                case 'Q':
                case 'C':
                case 's':
                case 'q':
                case 'c':
                    nums.forEach((num, idx) => {
                        if (idx % 2 === 0) {//x
                            xCoords.push(this.toApproxNum(num));
                        } else {
                            yCoords.push(this.toApproxNum(num));
                        }
                    })
                    break;
                case 'H':
                case 'h':
                    xCoords.push(this.toApproxNum(cmdValue));
                    break;
                case 'V':
                case 'v':
                    yCoords.push(this.toApproxNum(cmdValue));
                    break;
                case 'A':
                case 'a':
                    nums.forEach((num, idx) => {
                        if (idx === 5) {
                            xCoords.push(this.toApproxNum(num));
                        } else if (idx === 6) {
                            yCoords.push(this.toApproxNum(num));
                        }
                    })
                    break;
            }
        }
        console.log('result coords: ', xCoords, yCoords, [...new Set(yCoords)], [...new Set(yCoords)].sort(), [...new Set(yCoords)].sort().reverse());
        return {
            xCoords: [...new Set(xCoords)].sort((a, b) => {
                return a - b;
            }),
            yCoords: [...new Set(yCoords)].sort((a, b) => {
                return b - a;
            })
        };
    }

    /**
     * rescale size on one direction
     */
    static rescaleSizeOneDirect(dCmds, direct, sortedValsThisDirect, diff) {
        const resultCmds = [];
        console.log('************** rescaling size!!!!!!');
        for (let i = 0; i < dCmds.length; i++) {
            const cmdName = dCmds[i].substring(0, 1);
            const cmdValue = dCmds[i].substring(1);
            let nums = cmdValue.split(',');
            switch (cmdName) {
                case 'M':
                case 'm':
                case 'L':
                case 'l':
                case 'T':
                case 't':
                    let xVal = parseFloat(nums[0]);
                    let yVal = parseFloat(nums[1]);
                    console.log('rescale ', cmdName, yVal, diff);
                    let xRatio = sortedValsThisDirect.indexOf(this.toApproxNum(xVal));
                    let yRatio = sortedValsThisDirect.indexOf(this.toApproxNum(yVal));
                    if (cmdName === 'm' || cmdName === 'l' || cmdName === 't') {
                        xRatio = sortedValsThisDirect.indexOf(this.toApproxNum(xVal)) === 0 ? 0 : 1;
                        yRatio = sortedValsThisDirect.indexOf(this.toApproxNum(yVal)) === 0 ? 0 : 1;
                    }
                    console.log('y ratio is: ', yRatio);
                    if (direct === 'x') {
                        xVal += (diff * (xRatio / (sortedValsThisDirect.length - 1)));
                    } else if (direct === 'y') {
                        yVal -= (diff * (yRatio / (sortedValsThisDirect.length - 1)));
                    }
                    console.log('rescaled value: ', yVal);
                    resultCmds.push(cmdName + xVal + ',' + yVal);
                    break;
                case 'S':
                case 'Q':
                case 'C':
                case 's':
                case 'q':
                case 'c':
                    let tmpCmd = cmdName;
                    nums.forEach((num, idx) => {
                        let numVal = parseFloat(num);
                        let numRatio = sortedValsThisDirect.indexOf(this.toApproxNum(numVal));
                        if (cmdName === 's' || cmdName === 'q' || cmdName === 'c') {
                            numRatio = sortedValsThisDirect.indexOf(this.toApproxNum(numVal)) === 0 ? 0 : 1;
                        }
                        if (idx % 2 === 0 && direct === 'x') {//x
                            numVal += (diff * (numRatio / (sortedValsThisDirect.length - 1)));
                        } else if (idx % 2 === 1 && direct === 'y') {
                            numVal -= (diff * (numRatio / (sortedValsThisDirect.length - 1)));
                        }
                        tmpCmd += numVal + (idx === nums.length - 1 ? '' : ',');
                    })
                    resultCmds.push(tmpCmd);
                    break;
                case 'H':
                case 'h':
                    if (direct === 'x') {
                        let xVal = parseFloat(cmdValue);
                        let xRatio = sortedValsThisDirect.indexOf(this.toApproxNum(xVal));
                        if (cmdName === 'h') {
                            xRatio = sortedValsThisDirect.indexOf(this.toApproxNum(xVal)) === 0 ? 0 : 1;
                        }
                        xVal += (diff * (xRatio / (sortedValsThisDirect.length - 1)));
                        resultCmds.push(cmdName + xVal);
                    }
                    break;
                case 'V':
                case 'v':
                    if (direct === 'y') {
                        let yVal = parseFloat(cmdValue);
                        let yRatio = sortedValsThisDirect.indexOf(this.toApproxNum(yVal));
                        if (cmdName === 'v') {
                            yRatio = sortedValsThisDirect.indexOf(this.toApproxNum(yVal)) === 0 ? 0 : 1;
                        }
                        yVal -= (diff * (yRatio / (sortedValsThisDirect.length - 1)));
                        resultCmds.push(cmdName + yVal);
                    }
                    break;
                case 'A':
                case 'a':
                    let tmpACmd = cmdName;
                    nums.forEach((num, idx) => {
                        if (idx === 5 && direct === 'x') {//endX
                            let xVal = parseFloat(num);
                            let xRatio = sortedValsThisDirect.indexOf(this.toApproxNum(xVal));
                            if (cmdName === 'a') {
                                xRatio = sortedValsThisDirect.indexOf(this.toApproxNum(xVal)) === 0 ? 0 : 1;
                            }
                            xVal += (diff * (xRatio / (sortedValsThisDirect.length - 1)));
                            tmpACmd += xVal + ',';
                        } else if (idx === 6) {//endY
                            let yVal = parseFloat(num);
                            let yRatio = sortedValsThisDirect.indexOf(this.toApproxNum(yVal));
                            if (cmdName === 'a') {
                                yRatio = sortedValsThisDirect.indexOf(this.toApproxNum(yVal)) === 0 ? 0 : 1;
                            }
                            yVal -= (diff * (yRatio / (sortedValsThisDirect.length - 1)));
                            tmpACmd += yVal;
                        } else if (idx === 0 && direct === 'x') {//rx
                            let endXVal = parseFloat(nums[5]);
                            let rxVal = parseFloat(num);
                            let endXRatio = sortedValsThisDirect.indexOf(this.toApproxNum(endXVal));
                            if (cmdName === 'a') {
                                endXRatio = sortedValsThisDirect.indexOf(this.toApproxNum(endXVal)) === 0 ? 0 : 1;
                            }
                            rxVal += Math.abs(diff * (endXRatio / (sortedValsThisDirect.length - 1))) / 2;
                            tmpACmd += rxVal + ',';
                        } else if (idx === 1 && direct === 'y') {//ry
                            let endYVal = parseFloat(nums[6]);
                            let ryVal = parseFloat(num);
                            let endYRatio = sortedValsThisDirect.indexOf(this.toApproxNum(endYVal));
                            if (cmdName === 'a') {
                                endYRatio = sortedValsThisDirect.indexOf(this.toApproxNum(endYVal)) === 0 ? 0 : 1;
                            }
                            ryVal += Math.abs(diff * (endYRatio / (sortedValsThisDirect.length - 1))) / 2;
                            tmpACmd += ryVal + ',';
                        } else {
                            tmpACmd += num + (idx === nums.length - 1 ? '' : ',');
                        }
                    })
                    resultCmds.push(tmpACmd);
                    break;
                case 'Z':
                case 'z':
                    resultCmds.push(cmdName);
            }
        }
        return resultCmds;
    }

    static rescalePathSize(dCmds, direct, visualChannel, dataset, visualScale, viusalMapping) {
        const dataAttr = viusalMapping.get(visualChannel);
        const dataVal = dataset[dataAttr];
        const targetVal = this.scale(dataVal, visualScale);
        let resultCmds = [];

        //find ori size
        const oriCoords = this.orderDCmdsCoords(dCmds);
        console.log('ori coords: ', oriCoords);
        switch (direct) {
            case 'x':
                const oriW = Math.abs(oriCoords.xCoords[oriCoords.xCoords.length - 1] - oriCoords.xCoords[0]);

                break;
            case 'y':
                const oriH = Math.abs(oriCoords.yCoords[oriCoords.yCoords.length - 1] - oriCoords.yCoords[0]);
                const diff = targetVal - oriH;
                resultCmds = this.rescaleSizeOneDirect(dCmds, 'y', oriCoords.yCoords, diff);
                break;
        }
        return resultCmds;
    }

    /**
     * check whether 2 d are the same shape
     * if same shape:
     *  - calculate diffX and diffY using the first M command
     *  - calculate scaleX and scaleY using the diff of the end point of the corresonding command
     * if different shapes:
     *  - just calculate diffX and diffY using the first M command
     *  - morphin
     * @param {*} oriD 
     * @param {*} targetD 
     * @param {*} transType: 
     * @result: translate x coord of M
     */
    static dTrans(chartIdx, markId, oriD, targetD, previousTrans, actionJson) {
        const transType = actionJson.type;
        let mergeType = [false, false, false, false, false];
        if (typeof actionJson.mergeType !== 'undefined') {
            mergeType = actionJson.mergeType;
        }
        mergeType[0] = (transType === ActionSpec.actionTypes.translateX || transType === ActionSpec.actionTypes.translateXY || mergeType[0]);//translate X
        mergeType[1] = (transType === ActionSpec.actionTypes.translateY || transType === ActionSpec.actionTypes.translateXY || mergeType[1]);//translate Y
        mergeType[2] = (transType === ActionSpec.actionTypes.scaleX || transType === ActionSpec.actionTypes.scaleXY || mergeType[2]);//scale X
        mergeType[3] = (transType === ActionSpec.actionTypes.scaleY || transType === ActionSpec.actionTypes.scaleXY || mergeType[3]);//scale Y
        mergeType[4] = (transType === ActionSpec.actionTypes.dataChange || mergeType[4]);//data change
        console.log('current mark status: ', ...mergeType, ChartSpec.charts[chartIdx].markDatum.get(markId), ChartSpec.charts[chartIdx].scales, ChartSpec.charts[chartIdx].visualMappings);

        const scaleLastChart = ChartSpec.charts[chartIdx - 1].scales;
        const scaleCurrentChart = ChartSpec.charts[chartIdx].scales;
        const dataLastChart = ChartSpec.charts[chartIdx - 1].markDatum.get(markId);
        const dataCurrentChart = ChartSpec.charts[chartIdx].markDatum.get(markId);
        const vm = ChartSpec.charts[chartIdx].visualMappings;//TODO: check whether need to support visual mapping change
        const xVisualChannel = [(typeof vm.get('x') !== 'undefined'), (typeof vm.get('width') !== 'undefined')];//[x, width]
        const yVisualChannel = [(typeof vm.get('y') !== 'undefined'), (typeof vm.get('height') !== 'undefined')];//[y, height]

        let resultCmd = '';
        if (typeof oriD !== 'undefined' && typeof targetD !== 'undefined') {
            oriD = oriD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
            targetD = targetD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
            let cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
            let oriCmds = oriD.match(cmdRegExp);
            let targetCmds = targetD.match(cmdRegExp);

            //check if they are of same shape
            let sameShape = this.checkDSameShape(oriCmds, targetCmds);
            console.log('same shape: ', sameShape, oriCmds, targetCmds);
            if (sameShape) {//translate according to translate, scale, or morphin as specified 
                //calculate diff for both translate and scale
                // let diffX = 0, diffY = 0, diffScaleX = 0, diffScaleY = 0;

                // diffX = targetStartEnd.startX - oriStartEnd.startX;
                // diffY = targetStartEnd.startY - oriStartEnd.startY;

                // if (typeof oriStartEnd.relativeEndX !== 'undefined' && typeof targetStartEnd.relativeEndX !== 'undefined') {
                //     diffScaleX = targetStartEnd.relativeEndX - oriStartEnd.relativeEndX;
                //     diffScaleY = targetStartEnd.relativeEndY - oriStartEnd.relativeEndY;
                // } else {
                //     diffScaleX = targetStartEnd.endX - oriStartEnd.endX - diffX;
                //     diffScaleY = targetStartEnd.endY - oriStartEnd.endY - diffY;
                // }

                //calculate offset X and Y for the end point in each command in d 
                let rescaledCmds = oriCmds;
                if (mergeType[3]) {//scale y
                    if (previousTrans[2]) {//data has changed
                        //use data this chart and scale this chart
                        const yScale = scaleCurrentChart.filter(s => s.name === 'y-scale')[0];//TODO: consider multiple y-scales
                        if (yVisualChannel[0]) {//to rescale y position 

                        }
                        if (yVisualChannel[1]) {//to rescale height
                            //rescale height of the oriCmds
                            rescaledCmds = this.rescalePathSize(rescaledCmds, 'y', 'height', dataCurrentChart, yScale, vm);
                        }
                    } else {//data is not changed nor changing
                        //use data last chart and scale this chart
                        const yScale = scaleCurrentChart.filter(s => s.name === 'y-scale')[0];//TODO: consider multiple y-scales
                        if (yVisualChannel[0]) {//to rescale y position 

                        }
                        if (yVisualChannel[1]) {//to rescale height
                            //rescale height of the oriCmds
                            rescaledCmds = this.rescalePathSize(rescaledCmds, 'y', 'height', dataLastChart, yScale, vm);
                        }
                    }
                }
                previousTrans[1] = previousTrans[1] || mergeType[3];
                if (mergeType[4]) {//change data
                    if (previousTrans[0]) {//x scaled

                    } else {//x not scaled

                    }
                    if (previousTrans[1]) {//y scaled
                        //use data this chart and scale this chart
                        const yScale = scaleCurrentChart.filter(s => s.name === 'y-scale')[0];//TODO: consider multiple y-scales
                        if (yVisualChannel[0]) {//to rescale y position 

                        }
                        if (yVisualChannel[1]) {//to rescale height
                            //rescale height of the oriCmds
                            console.log('cmds to rescle', rescaledCmds);
                            rescaledCmds = this.rescalePathSize(rescaledCmds, 'y', 'height', dataCurrentChart, yScale, vm);
                        }
                    } else {//y not scaled yet
                        //use data this chart and scale last chart
                        const yScale = scaleLastChart.filter(s => s.name === 'y-scale')[0];//TODO: consider multiple y-scales
                        if (yVisualChannel[0]) {//to rescale y position 

                        }
                        if (yVisualChannel[1]) {//to rescale height
                            //rescale height of the oriCmds
                            rescaledCmds = this.rescalePathSize(rescaledCmds, 'y', 'height', dataCurrentChart, yScale, vm);
                        }
                    }
                }
                oriCmds = rescaledCmds;
                const oriStartEnd = this.findDStartEnd(oriCmds);
                const targetStartEnd = this.findDStartEnd(targetCmds);

                const absXOffset = mergeType[0] ? (targetStartEnd.startX - oriStartEnd.startX) : 0,
                    absYOffset = mergeType[1] ? (targetStartEnd.startY - oriStartEnd.startY) : 0,
                    relativeXOffset = mergeType[0] ? (targetStartEnd.relativeEndX - oriStartEnd.relativeEndX) : 0,
                    relativeYOffset = mergeType[1] ? (targetStartEnd.relativeEndY - oriStartEnd.relativeEndY) : 0;
                // if (mergeType[2]) {
                //     absXOffset += diffScaleX;
                // }
                // if (mergeType[3]) {
                //     absYOffset += diffScaleY;
                // }

                console.log('diff XY: ', absXOffset, absYOffset, 'diff relative XY: ', relativeXOffset, relativeYOffset);
                console.log('merge type: ', actionJson.mergeType, mergeType);

                //add the offset to the commands
                if (oriCmds) {
                    const cmdNameRecord = [], cmdValRecord = [];
                    for (let i = 0; i < oriCmds.length; i++) {
                        const cmdName = oriCmds[i].substring(0, 1);
                        const cmdValue = oriCmds[i].substring(1);
                        const targetCmdValue = targetCmds[i].substring(1);
                        resultCmd += cmdName;

                        let nums = cmdValue.split(',');
                        let targetNums = targetCmdValue.split(',');
                        // cmdNameRecord.push(cmdName);
                        let tmpValRecord = [];
                        switch (cmdName) {
                            case 'M':
                            case 'm':
                            case 'L':
                            case 'T':
                                const mOffsetXVal = parseFloat(nums[0]) + absXOffset;
                                const mOffsetYVal = parseFloat(nums[1]) + absYOffset;
                                const mValidX = this.checkValidOffsetDCmd(mOffsetXVal, 0, parseFloat(nums[0]), parseFloat(targetNums[0]));
                                const mValidY = this.checkValidOffsetDCmd(mOffsetYVal, 0, parseFloat(nums[1]), parseFloat(targetNums[1]));
                                resultCmd += (mValidX ? mOffsetXVal : targetNums[0]) + ',' + (mValidY ? mOffsetYVal : targetNums[1]);
                                // tmpValRecord.push(mValidX ? mOffsetXVal : targetNums[0]);
                                // tmpValRecord.push(mValidY ? mOffsetYVal : targetNums[1]);
                                break;
                            // const lOffsetXVal = parseFloat(nums[0]) + absXOffset;
                            // const lOffsetYVal = parseFloat(nums[1]) + absYOffset;
                            // const lValidX = this.checkValidOffsetDCmd(lOffsetXVal, 0, parseFloat(nums[0]), parseFloat(targetNums[0]));
                            // const lValidY = this.checkValidOffsetDCmd(lOffsetYVal, 0, parseFloat(nums[1]), parseFloat(targetNums[1]));
                            // resultCmd += (lValidX ? lOffsetXVal : targetNums[0]) + ',' + (lValidY ? lOffsetYVal : targetNums[1]);
                            // tmpValRecord.push(mValidX ? mOffsetXVal : targetNums[0]);
                            // tmpValRecord.push(mValidY ? mOffsetYVal : targetNums[1]);
                            // break;
                            case 'l':
                            case 't':
                                const lrOffsetXVal = parseFloat(nums[0]) + relativeXOffset;
                                const lrOffsetYVal = parseFloat(nums[1]) + relativeYOffset;
                                const lrValidX = this.checkValidOffsetDCmd(lrOffsetXVal, diffScaleX, parseFloat(nums[0]), parseFloat(targetNums[0]));
                                const lrValidY = this.checkValidOffsetDCmd(lrOffsetYVal, diffScaleY, parseFloat(nums[1]), parseFloat(targetNums[1]));
                                resultCmd += (lrValidX ? lrOffsetXVal : targetNums[0]) + ',' + (lrValidY ? lrOffsetYVal : targetNums[1]);
                                // tmpValRecord.push(lrValidX ? lrOffsetXVal : targetNums[0]);
                                // tmpValRecord.push(lrValidY ? lrOffsetYVal : targetNums[1]);
                                break;
                            case 'S':
                            case 'Q':
                            case 'C':
                                const step = cmdName === 'C' ? 3 : 2;
                                nums.forEach((num, idx) => {
                                    let sOffsetVal = 0, sScaleVal = 0;
                                    if (idx % 2 === 0) {//x
                                        // sScaleVal = diffScaleX;
                                        // if (!mergeType[2]) {//not scaling X
                                        sOffsetVal = parseFloat(num) + absXOffset;
                                        // } else {
                                        //     sOffsetVal = parseFloat(num) + (1 + idx / 2) * absXOffset / step;
                                        //     sScaleVal = (1 + idx / 2) * diffScaleX / step;
                                        // }
                                    } else {
                                        // sScaleVal = diffScaleY;
                                        // if (!mergeType[3]) {//not scaling Y
                                        sOffsetVal = parseFloat(num) + absYOffset;
                                        // } else {
                                        //     sOffsetVal = parseFloat(num) + (1 + Math.floor(idx / 2)) * absYOffset / step;
                                        //     sScaleVal = (1 + Math.floor(idx / 2)) * absYOffset / step;
                                        // }
                                    }
                                    const sValidX = this.checkValidOffsetDCmd(sOffsetVal, 0, parseFloat(num), parseFloat(targetNums[idx]));
                                    resultCmd += (sValidX ? sOffsetVal : targetNums[idx]) + (idx === nums.length - 1 ? '' : ',');
                                    // tmpValRecord.push(sValidX ? sOffsetVal : targetNums[idx]);
                                })
                                break;
                            case 's':
                            case 'q':
                            case 'c':
                                const step2 = cmdName === 'c' ? 3 : 2;
                                nums.forEach((num, idx) => {
                                    let srOffsetVal = 0, srScaleVal = 0;
                                    if (idx % 2 === 0) {
                                        srOffsetVal = parseFloat(num) + (1 + idx / 2) * relativeXOffset / step2;
                                        // srScaleVal = (1 + idx / 2) * relativeXOffset / step2;
                                    } else {
                                        srOffsetVal = parseFloat(num) + (1 + Math.floor(idx / 2)) * relativeYOffset / step2;
                                        // srScaleVal = (1 + Math.floor(idx / 2)) * relativeYOffset / step2;
                                    }
                                    const srValidX = this.checkValidOffsetDCmd(srOffsetVal, 0, parseFloat(num), parseFloat(targetNums[idx]));
                                    resultCmd += (srValidX ? srOffsetVal : targetNums[idx]) + (idx === nums.length - 1 ? '' : ',');
                                    // tmpValRecord.push(srValidX ? srOffsetVal : targetNums[idx]);
                                })
                                break;
                            case 'H':
                                const hOffsetXVal = parseFloat(cmdValue) + absXOffset;
                                const hValidX = this.checkValidOffsetDCmd(hOffsetXVal, 0, parseFloat(cmdValue), parseFloat(targetCmdValue));
                                resultCmd += (hValidX ? hOffsetXVal : targetCmdValue);
                                // tmpValRecord.push(hValidX ? hOffsetXVal : targetCmdValue);
                                break;
                            case 'h':
                                const hrOffsetXVal = parseFloat(cmdValue) + relativeXOffset;
                                const hrValidX = this.checkValidOffsetDCmd(hrOffsetXVal, 0, parseFloat(cmdValue), parseFloat(targetCmdValue));
                                resultCmd += (hrValidX ? hrOffsetXVal : targetCmdValue);
                                // tmpValRecord.push(hrValidX ? hrOffsetXVal : targetCmdValue);
                                break;
                            case 'V':
                                const vOffsetXVal = parseFloat(cmdValue) + absYOffset;
                                const vValidX = this.checkValidOffsetDCmd(vOffsetXVal, 0, parseFloat(cmdValue), parseFloat(targetCmdValue));
                                resultCmd += (vValidX ? vOffsetXVal : targetCmdValue);
                                // tmpValRecord.push(vValidX ? vOffsetXVal : targetCmdValue);
                                break;
                            case 'v':
                                const vrOffsetXVal = parseFloat(cmdValue) + relativeYOffset;
                                const vrValidX = this.checkValidOffsetDCmd(vrOffsetXVal, 0, parseFloat(cmdValue), parseFloat(targetCmdValue));
                                resultCmd += (vrValidX ? vrOffsetXVal : targetCmdValue);
                                // tmpValRecord.push(vrValidX ? vrOffsetXVal : targetCmdValue);
                                break;
                            case 'A':
                                nums.forEach((num, idx) => {
                                    let aOffsetVal = 0;//, aScaleVal = 0;
                                    if (idx === 5) {
                                        // aScaleVal = diffScaleX;
                                        aOffsetVal = parseFloat(num) + absXOffset;
                                    } else if (idx === 6) {
                                        // aScaleVal = diffScaleY;
                                        aOffsetVal = parseFloat(num) + absYOffset;
                                    }
                                    // else if (idx === 0 && mergeType[2]) {
                                    //     aOffsetVal = parseFloat(num) + (diffScaleX / 2);
                                    // } else if (idx === 1 && mergeType[3]) {
                                    //     aOffsetVal = parseFloat(num) + (diffScaleY / 2);
                                    // } 
                                    else {
                                        aOffsetVal = parseFloat(num);
                                    }
                                    const aValidX = this.checkValidOffsetDCmd(aOffsetVal, 0, parseFloat(num), parseFloat(targetNums[idx]));
                                    resultCmd += (aValidX ? aOffsetVal : targetNums[idx]) + (idx === nums.length - 1 ? '' : ',');
                                    // tmpValRecord.push(aValidX ? aOffsetVal : targetNums[idx]);
                                })
                                break;
                            case 'a':
                                nums.forEach((num, idx) => {
                                    let arOffsetVal = 0;//, arScaleVal = 0;
                                    if (idx === 5) {
                                        // arScaleVal = diffScaleX;
                                        arOffsetVal = parseFloat(num) + relativeXOffset;
                                    } else if (idx === 6) {
                                        // arScaleVal = diffScaleY;
                                        arOffsetVal = parseFloat(num) + relativeYOffset;
                                    }
                                    // else if (idx === 0 && mergeType[2]) {
                                    //     arOffsetVal = parseFloat(num) + (diffScaleX / 2);
                                    // } else if (idx === 1 && mergeType[3]) {
                                    //     arOffsetVal = parseFloat(num) + (diffScaleY / 2);
                                    // }
                                    else {
                                        arOffsetVal = parseFloat(num);
                                    }
                                    const arValidX = this.checkValidOffsetDCmd(arOffsetVal, 0, parseFloat(num), parseFloat(targetNums[idx]));
                                    resultCmd += (arValidX ? arOffsetVal : targetNums[idx]) + (idx === nums.length - 1 ? '' : ',');
                                    // tmpValRecord.push(arValidX ? arOffsetVal : targetNums[idx]);
                                })
                                break;
                            default:
                                resultCmd += cmdValue;
                            // tmpValRecord.push(cmdValue);
                        }
                        if (cmdName.toLowerCase() === 'z') {
                            break;//remove redundent 'Z'
                        } else {
                            cmdNameRecord.push(cmdName);
                            cmdValRecord.push(tmpValRecord);
                        }
                    }
                }
            } else {//translate according to translate, morphin as specified
                //TODO: mark type change transition staging 
            }
        } else {
            console.error('undefined d in dTrans!');
        }
        return resultCmd;
    }

    static toDOM(obj) {
        if (typeof obj == 'string') {
            obj = JSON.parse(obj);
        }
        let node, nodeType = obj.nodeType;
        switch (nodeType) {
            case 1: //ELEMENT_NODE
                node = document.createElementNS('http://www.w3.org/2000/svg', obj.tagName);
                let attributes = obj.attr || {};
                for (let i = 0, attr; i < Object.keys(attributes).length | (attr = Object.keys(attributes)[i]); i++) {
                    let attrValue = typeof attributes[attr] === 'object' ? JSON.stringify(attributes[attr], null, 0) : attributes[attr];
                    node.setAttributeNS(null, attr, attrValue);
                }
                break;
            case 3: //TEXT_NODE
                node = document.createTextNode(obj.nodeValue);
                break;
            case 8: //COMMENT_NODE
                node = document.createComment(obj.nodeValue);
                break;
            case 9: //DOCUMENT_NODE
                node = document.implementation.createDocument();
                break;
            case 10: //DOCUMENT_TYPE_NODE
                node = document.implementation.createDocumentType(obj.nodeName);
                break;
            case 11: //DOCUMENT_FRAGMENT_NODE
                node = document.createDocumentFragment();
                break;
            default:
                return node;
        }

        return node;
    }

    /**
     * @param {*} obj A parsed svg json object.
     */
    static discretizePath(obj) {
        // normalize attributes
        if (obj.tagName !== 'path') return null
        let attr = obj.attr || {}
        if (!attr.d) return null
        return this.discretizeD(attr.d, attr.fill);
    }

    static discretizeD(d, fillColor) {
        let resultGroup = [],
            reg = /[MmLlHhVvZzCcSsQqTtAa][^MmLlHhVvZzCcSsQqTtAa]*/gi,
            group = undefined;
        while ((group = reg.exec(d))) {
            let offset = resultGroup.reduce((p, c) => p + c.length, 0);
            resultGroup.push(d.slice(offset, group.index));
            resultGroup.push(group[0]);
        }
        let result = resultGroup
            .map(x => {
                let command = x.slice(0, 1);
                let parameters = x
                    .slice(1)
                    .split(/[ ,]/)
                    .filter(n => n.trim())
                    .map(n => parseFloat(n));
                return command ? {
                    command,
                    parameters
                } : null;
            }).filter(x => x)
        // polyline style path
        if (result.every(x => 'MmLlHhVv'.includes(x.command)) && !CanisUtil.convertColor(fillColor)) {
            let lines = []
            let prev = null
            let valid = true
            result.forEach(x => {
                if (!valid) return
                if (x.command === 'M') {
                    prev = x.parameters.slice(-2)
                    return
                }
                if (!prev) return valid = false
                if (x.command === 'm') {
                    prev = prev.map((v, i) => v + x.parameters[i])
                    return
                }
                let firstPoint = prev,
                    secondPoint = x.command === x.command.toLowerCase() ? prev.slice() : [0, 0]
                switch (x.command.toLowerCase()) {
                    case 'l':
                        secondPoint = secondPoint.map((v, i) => v + x.parameters[i])
                        break
                    case 'h':
                        secondPoint[0] += x.parameters[0]
                        secondPoint[1] = firstPoint[1]
                        break
                    case 'v':
                        secondPoint[1] += x.parameters[0]
                        secondPoint[0] = firstPoint[0]
                        break
                }
                if (secondPoint) {
                    lines.push([firstPoint, secondPoint])
                    prev = secondPoint
                } else {
                    valid = false
                }
            })
            if (valid) return {
                type: 'lines',
                data: lines
            }
        }
        // pie style path
        if (result.every(x => 'MmLlAaZz'.includes(x.command)) && result.filter(x => x.command.toLowerCase() === 'a').length) {
            let circles = []
            let prev = null
            let valid = true
            result.forEach(x => {
                if (!valid) return
                if (x.command.toLowerCase() === 'm') {
                    prev = x.parameters.slice(-2)
                    return
                }
                if (!prev) return valid = false
                if (x.command.toLowerCase() === 'z') return
                let firstPoint = prev,
                    secondPoint = x.command.toLowerCase() === x.command ? prev.slice() : [0, 0]
                if (x.command.toLowerCase() !== 'a') {
                    return prev = secondPoint.map((v, i) => v + x.parameters[i])
                }
                secondPoint = secondPoint.map((v, i) => v + x.parameters[i + 5])
                let tmp = CanisUtil.svgArcToCenterParam.apply(null, firstPoint.concat(x.parameters.slice(0, 5)).concat(secondPoint));
                if (!isNaN(tmp.cx) && !isNaN(tmp.cy)) {
                    circles.push({
                        ...tmp,
                        rx: x.parameters[0],
                        ry: x.parameters[1],
                        rotate: x.parameters[2]
                    })
                }
                prev = secondPoint
            })
            if (circles.length <= 0 || !circles.every(x => ['cx', 'cy'].reduce((p, c) => p + Math.abs(x[c] - circles[0][c]), 0) < 1e-1)) valid = false
            if (valid) {
                let c = circles.reduce((p, c) => {
                    if (!p) return c
                    if (c.rx + c.ry > p.rx + p.ry) return c
                    return p
                }, null)
                let attrResult = {
                    type: 'pies',
                    data: {
                        cx: c.cx,
                        cy: c.cy,
                        startAngle: c.startAngle,
                        endAngle: c.endAngle,
                        clockwise: c.clockwise,
                        radius: circles.map(x => {
                            return {
                                rx: x.rx,
                                ry: x.ry,
                                rotate: x.rotate
                            }
                        })
                    }
                }
                return attrResult;
            }
        }
        // other unhandled style path
        return null
    }

    static radian(ux, uy, vx, vy) {
        var dot = ux * vx + uy * vy;
        var mod = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
        var rad = Math.acos(dot / mod);
        if (ux * vy - uy * vx < 0.0) {
            rad = -rad;
        }
        return rad;
    }

    static svgArcToCenterParam(x1, y1, rx, ry, phi, fA, fS, x2, y2) {
        var cx, cy, startAngle, deltaAngle, endAngle;
        var PIx2 = Math.PI * 2.0;

        if (rx < 0) {
            rx = -rx;
        }
        if (ry < 0) {
            ry = -ry;
        }
        // if (rx == 0.0 || ry == 0.0) { // invalid arguments
        //     throw Error('rx and ry can not be 0');
        // }

        var s_phi = Math.sin(phi);
        var c_phi = Math.cos(phi);
        var hd_x = (x1 - x2) / 2.0; // half diff of x
        var hd_y = (y1 - y2) / 2.0; // half diff of y
        var hs_x = (x1 + x2) / 2.0; // half sum of x
        var hs_y = (y1 + y2) / 2.0; // half sum of y

        // F6.5.1
        var x1_ = c_phi * hd_x + s_phi * hd_y;
        var y1_ = c_phi * hd_y - s_phi * hd_x;

        // F.6.6 Correction of out-of-range radii
        //   Step 3: Ensure radii are large enough
        var lambda = (x1_ * x1_) / (rx * rx) + (y1_ * y1_) / (ry * ry);
        if (lambda > 1) {
            rx = rx * Math.sqrt(lambda);
            ry = ry * Math.sqrt(lambda);
        }

        var rxry = rx * ry;
        var rxy1_ = rx * y1_;
        var ryx1_ = ry * x1_;
        var sum_of_sq = rxy1_ * rxy1_ + ryx1_ * ryx1_; // sum of square
        // if (!sum_of_sq) {
        //     throw Error('start point can not be same as end point');
        // }
        var coe = Math.sqrt(Math.abs((rxry * rxry - sum_of_sq) / sum_of_sq));
        if (fA == fS) {
            coe = -coe;
        }

        // F6.5.2
        var cx_ = coe * rxy1_ / ry;
        var cy_ = -coe * ryx1_ / rx;

        // F6.5.3
        cx = c_phi * cx_ - s_phi * cy_ + hs_x;
        cy = s_phi * cx_ + c_phi * cy_ + hs_y;

        var xcr1 = (x1_ - cx_) / rx;
        var xcr2 = (x1_ + cx_) / rx;
        var ycr1 = (y1_ - cy_) / ry;
        var ycr2 = (y1_ + cy_) / ry;

        // F6.5.5
        startAngle = CanisUtil.radian(1.0, 0.0, xcr1, ycr1);

        // F6.5.6
        deltaAngle = CanisUtil.radian(xcr1, ycr1, -xcr2, -ycr2);
        while (deltaAngle > PIx2) {
            deltaAngle -= PIx2;
        }
        while (deltaAngle < 0.0) {
            deltaAngle += PIx2;
        }
        if (fS == false || fS == 0) {
            deltaAngle -= PIx2;
        }
        endAngle = startAngle + deltaAngle;
        while (endAngle > PIx2) {
            endAngle -= PIx2;
        }
        while (endAngle < 0.0) {
            endAngle += PIx2;
        }

        var outputObj = {
            /* cx, cy, startAngle, deltaAngle */
            cx,
            cy,
            startAngle,
            deltaAngle,
            endAngle,
            clockwise: (fS == true || fS == 1)
        }

        return outputObj;
    }

    static convertColor(str, fMode, tMode) {
        if (typeof str !== 'string') return str
        if (str === 'none') return null
        str = str.trim()
        let mr = null
        if (tMode === undefined) {
            tMode = fMode
            if (str.startsWith('#')) {
                fMode = 'hex'
            } else if (str.startsWith('rgb')) {
                fMode = 'rgb'
            }
        }
        // assume user input is valid
        switch (fMode) {
            case 'rgb':
                mr = str.split('(')[1].split(',').map(x => parseFloat(x))
                break
            case 'hex':
                mr = str.slice(1).match(/.{1,2}/g).map(x => parseInt(x, 16))
            default:
                return str
        }
        mr = mr.slice(0, 3)
        switch (tMode) {
            case 'hex':
                return '#' + mr.map(x => x.toString(16).padStart(2, '0')).join('')
            case 'rgb':
                return `rgb(${mr.join(',')})`
            default:
                return str
        }
    }

    static polarToCartesian(centerX, centerY, radius, angleInRadians) {
        return {
            x: Math.round((centerX + (radius * Math.cos(angleInRadians))) * 100) / 100,
            y: Math.round((centerY + (radius * Math.sin(angleInRadians))) * 100) / 100
        };
    };

    static arc(x, y, innerRadius, outterRadius, startAngle, endAngle) {
        startAngle = startAngle < 0 ? startAngle + 2 * Math.PI : startAngle;
        endAngle = endAngle < 0 || startAngle > endAngle ? endAngle + 2 * Math.PI : endAngle;

        //to generate cover, make the cover a little bigger
        innerRadius = innerRadius === 0 ? 0 : innerRadius - 1;
        outterRadius += 1;

        let largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

        let start1 = CanisUtil.polarToCartesian(x, y, outterRadius, endAngle);
        let end1 = CanisUtil.polarToCartesian(x, y, outterRadius, startAngle);
        let start2 = CanisUtil.polarToCartesian(x, y, innerRadius, endAngle);
        let end2 = CanisUtil.polarToCartesian(x, y, innerRadius, startAngle);

        let isRing = false;
        if (start1.x === end1.x && start1.y === end1.y) {//this is a ring
            end1.y -= 1;
            end2.y -= 1;
            isRing = true;
        }

        let d;
        if (!isRing) {
            d = [
                "M" + start1.x, start1.y,
                "A" + outterRadius, outterRadius, 0, largeArcFlag, 0, end1.x, end1.y,
                "L" + end2.x, end2.y,
                "A" + innerRadius, innerRadius, 0, largeArcFlag, 1, start2.x, start2.y,
                "L" + start1.x, start1.y + "Z"
            ].join(",");
        } else {
            d = [
                "M" + start1.x, start1.y,
                "A" + outterRadius, outterRadius, 0, largeArcFlag, 1, end1.x, end1.y,
                "M" + end2.x, end2.y,
                "A" + innerRadius, innerRadius, 0, largeArcFlag, 0, start2.x, start2.y + "Z"
            ].join(",");
        }

        return d;
    };

    /**
     * turn a dom node to string
     * @param {DOM} domNode 
     */
    static domNodeToString(domNode) {
        var element = document.createElement("div");
        element.appendChild(domNode);
        return element.innerHTML;
    }

    /**
     * turn a string to dom node
     * @param {string} str 
     */
    static strToDomNode(str) {
        let tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = str.trim();
        let dom = tmpDiv.firstChild;
        return dom;
    }

    static transShape(t, tx, ty) {
        if (t.tagName !== 'path') {
            let hasPosi = false;
            if (t.getAttribute('x') || t.getAttribute('y')) {
                hasPosi = true;
                t.setAttribute('x', t.getAttribute('x') ? parseFloat(t.getAttribute('x')) + tx : tx);
                t.setAttribute('y', t.getAttribute('y') ? parseFloat(t.getAttribute('y')) + ty : ty);
            }
            if (t.getAttribute('x1') || t.getAttribute('y1') || t.getAttribute('x2') || t.getAttribute('y2')) {
                hasPosi = true;
                t.setAttribute('x1', t.getAttribute('x1') ? parseFloat(t.getAttribute('x1')) + tx : tx);
                t.setAttribute('x2', t.getAttribute('x2') ? parseFloat(t.getAttribute('x2')) + tx : tx);
                t.setAttribute('y1', t.getAttribute('y1') ? parseFloat(t.getAttribute('y1')) + ty : ty);
                t.setAttribute('y2', t.getAttribute('y2') ? parseFloat(t.getAttribute('y2')) + ty : ty);
            }
            if (t.getAttribute('cx') || t.getAttribute('cy')) {
                hasPosi = true;
                t.setAttribute('cx', t.getAttribute('cx') ? parseFloat(t.getAttribute('cx')) + tx : tx);
                t.setAttribute('cy', t.getAttribute('cy') ? parseFloat(t.getAttribute('cy')) + ty : ty);
            }
            if (!hasPosi) {
                if (t.tagName === 'circle') {
                    t.setAttribute('cx', tx);
                    t.setAttribute('cy', ty);
                } else {
                    t.setAttribute('x', tx);
                    t.setAttribute('y', ty);
                }
            }
        } else {
            if (t.getAttribute('d')) {
                let resultCmd = CanisUtil.setPathDValue(t.getAttribute('d'), false, tx, ty);
                t.setAttribute('d', resultCmd);
            }
        }
        t.setAttribute('transX', tx);
        t.setAttribute('transY', ty);
    }

    static splitPath(d) {
        let tmpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        tmpPath.setAttributeNS(null, 'd', d);
        let tmpPathLen = tmpPath.getTotalLength();
        let stepNum = 300, pathStepLen = tmpPathLen / stepNum;
        let discritPath = '';
        for (let i = 0; i < stepNum; i++) {
            let tmpPnt = tmpPath.getPointAtLength(pathStepLen * i);
            i === 0 ? discritPath += 'M' + tmpPnt.x + ',' + tmpPnt.y : discritPath += 'L' + tmpPnt.x + ',' + tmpPnt.y
        }
        discritPath += 'Z';
        return discritPath;
    }

    static getPathOffset(d) {
        const pathData = d
        const pathDataSeries = parseSVG(pathData)
        const pathMaker = new PathMaker()
        let pathDataWithType;
        pathDataSeries.forEach(pathDataItem => {
            switch (pathDataItem.code) {
                case 'M':
                    pathDataWithType = pathDataItem
                    pathMaker.moveTo(pathDataWithType.x, pathDataWithType.y)
                    break
                case 'L':
                    pathDataWithType = pathDataItem
                    pathMaker.lineTo(pathDataWithType.x, pathDataWithType.y)
                    break
                case 'l':
                    pathDataWithType = pathDataItem
                    pathMaker.lineToRelative(pathDataWithType.x, pathDataWithType.y)
                    break
                case 'H':
                    pathDataWithType = pathDataItem
                    pathMaker.horizontalTo(pathDataWithType.x)
                    break
                case 'h':
                    pathDataWithType = pathDataItem
                    pathMaker.horizontalToRelative(pathDataWithType.x)
                    break
                case 'V':
                    pathDataWithType = pathDataItem
                    pathMaker.verticalTo(pathDataWithType.y)
                    break
                case 'v':
                    pathDataWithType = pathDataItem
                    pathMaker.verticalToRelative(pathDataWithType.y)
                    break
                case 'C':
                    pathDataWithType = pathDataItem
                    pathMaker.cubicBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y)
                    break
                case 'c':
                    pathDataWithType = pathDataItem
                    pathMaker.cubicBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x2, pathDataWithType.y2, pathDataWithType.x, pathDataWithType.y)
                    break
                case 'Q':
                    pathDataWithType = pathDataItem
                    pathMaker.quadraticBezierCurveTo(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y)
                    break
                case 'q':
                    pathDataWithType = pathDataItem
                    pathMaker.quadraticBezierCurveToRelative(pathDataWithType.x1, pathDataWithType.y1, pathDataWithType.x, pathDataWithType.y)
                    break
                case 'A':
                    pathDataWithType = pathDataItem
                    pathMaker.arcTo(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y)
                    break
                case 'a':
                    pathDataWithType = pathDataItem
                    pathMaker.arcToRelative(pathDataWithType.rx, pathDataWithType.ry, pathDataWithType.xAxisRotation, ~~pathDataWithType.largeArc, ~~pathDataWithType.sweep, pathDataWithType.x, pathDataWithType.y)
                    break
                case 'Z':
                case 'z':
                    pathMaker.closePath()
                    break
                default:
                    console.error(pathDataItem)
                    throw new Error('No implementation found for this path command.')
            }
        })
        return [pathMaker.offsetX, pathMaker.offsetY];
    }

    static transDToLottieSpec(d) {
        let posiOffset = this.getPathOffset(d);
        let pm = new PathMaker(d);
        pm.uniform();
        return [posiOffset, pm];
    }

    static pathToShape(d) {
        d = d.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        let cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
        let cmds = d.match(cmdRegExp);
        if (cmds) {
            const isRect = this.pathIsRect(cmds);
            console.log('path is rect: ', isRect);
        }
    }

    static pathIsRect(cmds) {
        let w = 0, h = 0;

        //remove the last z command
        if (cmds[cmds.length - 1].toLowerCase() === 'z') {
            cmds.splice(cmds.length - 1, 1);
        }

        if (cmds.length !== 4) {
            return [false, w, h];
        } else {
            const mvValues = cmds[0].substring(1).split(',');
            let lastCmdDirect = '', transCoords = { x: 0, y: 0 };
            for (let i = 1; i < cmds.length; i++) {
                const cmdName = cmds[i].substring(0, 1);
                const cmdValue = cmds[i].substring(1);
                if (cmdName.toLowerCase() === 'v' && (lastCmdDirect === 'h' || lastCmdDirect === '')) {
                    lastCmdDirect = 'v';
                    transCoords.y = cmdName === 'V' ? parseFloat(cmdValue) : parseFloat(cmdValue) + transCoords.y;
                    h = cmdName === 'V' ? (parseFloat(cmdValue) - parseFloat(mvValues[1])) : parseFloat(cmdValue);
                } else if (cmdName.toLowerCase() === 'h' && (lastCmdDirect === 'v' || lastCmdDirect === '')) {
                    lastCmdDirect = 'h';
                    transCoords.x = cmdName === 'H' ? parseFloat(cmdValue) : parseFloat(cmdValue) + transCoords.x;
                    w = cmdName === 'H' ? (parseFloat(cmdValue) - parseFloat(mvValues[1])) : parseFloat(cmdValue);
                } else if (cmdName.toLowerCase() === 'l') {
                    let diffX = 0, diffY = 0;
                    if (cmdName === 'L') {
                        const cmdValues = cmdValue.split(',');
                        diffX = parseFloat(cmdValues[0]) - parseFloat(mvValues[0]) - transCoords.x;
                        diffY = parseFloat(cmdValues[1]) - parseFloat(mvValues[1]) - transCoords.y;
                    } else {
                        const cmdValues = cmdValue.split(',');
                        diffX = parseFloat(cmdValues[0]);
                        diffY = parseFloat(cmdValues[1]);
                    }

                    if (diffX !== 0 && diffY !== 0) {//not vertical or horizontal
                        return [false, w, h];
                    } else if (diffX === 0) {
                        if (lastCmdDirect === 'h' || lastCmdDirect === '') {
                            lastCmdDirect = 'v';
                            transCoords.y += diffY + transCoords.y;
                        } else {
                            return [false, w, h];
                        }
                    } else {
                        if (lastCmdDirect === 'v' || lastCmdDirect === '') {
                            lastCmdDirect = 'h';
                            transCoords.x += diffX + transCoords.x;
                        } else {
                            return [false, w, h];
                        }
                    }
                    w = diffX;
                    h = diffY;
                }
            }
            if (transCoords.x !== 0 || transCoords.y !== 0) {
                return [false, w, h];
            }
        }
        return [true, Math.abs(w), Math.abs(h)];
    }

    static setPathDValue(d, reset, tx = 0, ty = 0, diffCmds = new Map()) {
        d = d.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        let cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
        let resultCmd = '';
        let cmds = d.match(cmdRegExp);
        if (cmds) {
            //get the position of the first move cmd if there is one
            let firstCmdName = cmds[0].substring(0, 1);
            let resetX = '0', resetY = '0';
            if (firstCmdName === 'm' || firstCmdName === 'M') {
                let firstCmdValues = cmds[0].substring(1).split(',');
                resetX = firstCmdValues[0];
                resetY = firstCmdValues[1];
            }

            for (let i = 0; i < cmds.length; i++) {
                let cmdName = cmds[i].substring(0, 1);
                let cmdValue = cmds[i].substring(1);
                resultCmd += cmdName;
                switch (cmdName) {
                    case 'H':
                        resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, resetX, tx);
                        break;
                    case 'h':
                        resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, '0', 0);
                        break;
                    case 'V':
                        resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, resetY, ty);
                        break;
                    case 'v':
                        resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, cmdValue, reset, '0', 0);
                        break;
                    case 'M':
                    case 'L':
                    case 'T':
                    case 'C':
                    case 'S':
                    case 'Q':
                        let nums = cmdValue.split(',');
                        for (let ni = 0; ni < nums.length; ni++) {
                            if (ni % 2 === 0) {//x
                                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums[ni], reset, resetX, tx);
                            } else {//y
                                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums[ni], reset, resetY, ty);
                            }
                            if (ni !== nums.length - 1) {
                                resultCmd += ' ';
                            }
                        }
                        break;
                    case 'm':
                    case 'l':
                    case 't':
                    case 'c':
                    case 's':
                    case 'q':
                        let nums2 = cmdValue.split(',');
                        for (let ni = 0; ni < nums2.length; ni++) {
                            resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, nums2[ni], reset, '0', 0);
                            if (ni !== nums2.length - 1 && nums2[ni] !== '') {
                                resultCmd += ' ';
                            }
                        }
                        break;
                    case 'A':
                        let anums = cmdValue.split(',');
                        for (let ni = 0; ni < anums.length; ni++) {
                            if (ni === anums.length - 2) {//x
                                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[ni], reset, parseFloat(resetX) + 1, tx);
                                resultCmd += ' ';
                            } else if (ni === anums.length - 1) {//y
                                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums[ni], reset, parseFloat(resetY) + 1, ty);
                            } else {
                                resultCmd += anums[ni] + ' ';
                            }
                        }
                        break;
                    case 'a':
                        let anums2 = cmdValue.split(',');
                        for (let ni = 0; ni < anums2.length; ni++) {
                            if (ni === anums2.length - 2) {//x
                                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[ni], reset, '1', 0);
                                resultCmd += ' ';
                            } else if (ni === anums2.length - 1) {//y
                                resultCmd = this.calNumTrans(resultCmd, diffCmds, i, cmdName, anums2[ni], reset, '1', 0);
                            } else {
                                resultCmd += anums2[ni] + ' ';
                            }
                        }
                        break;
                    case 'z':
                    case 'Z':
                        break;
                }
            }
            // if (d.charAt(d.length - 1) === 'z' || d.charAt(d.length - 1) === 'Z') {
            //     resultCmd += 'Z';
            // }
        }
        return resultCmd;
    }

    static calNumTrans(resultCmd, diffCmds, currentCmdIdx, cmdName, cmdValue, reset, resetVal, tVal) {
        cmdName = cmdName.toLowerCase();
        if (reset) {
            if (typeof diffCmds.get(cmdName) !== 'undefined') {
                let diffCmdIdxs = diffCmds.get(cmdName);
                let flag = false;
                for (let j = 0; j < diffCmdIdxs.length; j++) {
                    if (diffCmdIdxs[j].cmdIdx === currentCmdIdx) {
                        resultCmd += resetVal;
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    resultCmd += cmdValue;
                }
            } else {
                resultCmd += cmdValue;
            }
        } else {
            if (cmdValue.length > 0) {
                resultCmd += (parseFloat(cmdValue) + tVal);
            }
        }
        return resultCmd;
    }

    /**
     * doing transition with path
     * @param {*} startD 
     * @param {*} endD 
     * @param {*} ratio 
     */
    static calTransD(startD, endD, ratio, startDisD, endDisD) {
        startD = startD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        endD = endD.replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '').replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        let resultCmd = '';
        if (ratio === 0) {
            resultCmd = startD;
        } else if (ratio === 1) {
            resultCmd = endD;
        } else {
            for (let i = 0, len = startDisD.length; i < len; i++) {
                resultCmd += (i === 0 ? 'M' : 'L') + ((endDisD[i][0] - startDisD[i][0]) * ratio + startDisD[i][0]) + ',' + ((endDisD[i][1] - startDisD[i][1]) * ratio + startDisD[i][1]);
            }
        }

        if (startD.charAt(startD.length - 1) === 'z' || startD.charAt(startD.length - 1) === 'Z') {
            resultCmd += 'Z';
        }
        return resultCmd;
    }

    /** startAngle should smaller than endAngle
     * @param {number} fromStartAngle start state of start angle
     * @param {number} fromEndAngle start state of end angle
     * @param {number} toStartAngle end state of start angle
     * @param {number} toEndAngle end state of end angle
     * @param {number} ratio 0-1 float number
     * @param {Function<number,number,number>} interpolateFn customize interpolate function, input is (start, end, ratio), default is linear
     * @returns {Array<number>} [startAngle, endAngle] of given ratio
     */
    static arcTransition(fromStartAngle, fromEndAngle, toStartAngle, toEndAngle, ratio, interpolateFn) {
        let validAngle = (s, e) => e < s ? (() => { throw 'startAngle should smaller than endAngle' })() : null
        validAngle(fromStartAngle, fromEndAngle)
        validAngle(toStartAngle, toEndAngle)
        let minimalAngle = (s, e) => e - Math.PI * 2 * Math.floor((e - s) / Math.PI / 2)
        // uniform angle domain within 2*PI
        fromEndAngle = minimalAngle(fromStartAngle, fromEndAngle)
        toStartAngle = minimalAngle(fromStartAngle, toStartAngle)
        toEndAngle = minimalAngle(toStartAngle, toEndAngle)
        // find the cloest domain
        toStartAngle -= Math.abs(toStartAngle - fromStartAngle) + Math.abs(toEndAngle - fromEndAngle) < 2 * Math.PI ? 0 : Math.PI * 2
        toEndAngle = minimalAngle(toStartAngle, toEndAngle)
        let interpolate = interpolateFn || ((s, e, r) => r * (e - s) + s)
        return [interpolate(fromStartAngle, toStartAngle, ratio), interpolate(fromEndAngle, toEndAngle, ratio)]
    }

    static findDiffCmds(markStatus) {
        let result = new Map();
        markStatus.forEach((statusArr, markId) => {
            let tmpDRecorder = [];
            for (let i = 0; i < statusArr.length; i++) {
                if (typeof statusArr[i] !== 'undefined') {
                    tmpDRecorder.push(!statusArr[i].d ? 'm0,0' : statusArr[i].d);
                }
            }
            if (tmpDRecorder.length > 0) {
                CanisUtil.compareD(tmpDRecorder, result);
            }
        })
        return result;
    }

    static compareD(dArr, result) {
        let cmdRegExp = new RegExp(/[mlhvcsqta][^mlhvcsqtaz]*/g);
        let firstD = dArr[0];
        firstD = firstD.toLowerCase();
        firstD = firstD.replace(/(?<=\d)\s(?=[mlhvcsqtaz])/g, '').replace(/(?<=[mlhvcsqta])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
        let firstDCmds = firstD.match(cmdRegExp);
        for (let i = 1; i < dArr.length; i++) {
            let tmpD = dArr[i];
            tmpD = tmpD.toLowerCase();
            tmpD = tmpD.replace(/(?<=\d)\s(?=[mlhvcsqtaz])/g, '').replace(/(?<=[mlhvcsqta])\s(?=(\d|[-+]))/g, '').replace(/\s/g, ',');
            let tmpDCmds = tmpD.match(cmdRegExp);
            for (let j = 0; j < firstDCmds.length; j++) {
                if (typeof tmpDCmds[j] === 'undefined') {
                    let cmdName = firstDCmds[j].substring(0, 1);
                    if (typeof result.get(cmdName) === 'undefined') {
                        result.set(cmdName, []);
                    }
                    let obj = {};
                    obj.cmdIdx = j;
                    obj.diffAttrIdxs = [];
                    let firstDCmdValue = firstDCmds[j].substring(1);
                    let firstDCmdValues = firstDCmdValue.split(',');
                    for (let m = 0; m < firstDCmdValues.length; m++) {
                        obj.diffAttrIdxs.push(m);
                    }
                    result.get(cmdName).push(obj);
                } else {
                    let cmdName = tmpDCmds[j].substring(0, 1);
                    let tmpDCmdValue = tmpDCmds[j].substring(1);
                    let firstDCmdValue = firstDCmds[j].substring(1);
                    if (tmpDCmdValue !== firstDCmdValue) {
                        if (typeof result.get(cmdName) === 'undefined') {
                            result.set(cmdName, []);
                        }
                        let obj = {};
                        obj.cmdIdx = j;
                        obj.diffAttrIdxs = [];
                        let tmpDCmdValues = tmpDCmdValue.split(',');
                        let firstDCmdValues = firstDCmdValue.split(',');
                        for (let m = 0; m < tmpDCmdValues.length; m++) {
                            if (Math.floor(parseFloat(tmpDCmdValues[m]) * 1000) !== Math.floor(parseFloat(firstDCmdValues[m]) * 1000)) {
                                obj.diffAttrIdxs.push(m);
                            }
                        }
                        //check whether have already added this cmd
                        let hasFlag = false;
                        for (let m = 0; m < result.get(cmdName).length; m++) {
                            if (result.get(cmdName)[m].cmdIdx === obj.cmdIdx) {
                                hasFlag = true;
                                result.get(cmdName)[m].diffAttrIdxs = [...new Set([...result.get(cmdName)[m].diffAttrIdxs, ...obj.diffAttrIdxs])];
                                break;
                            }
                        }
                        if (!hasFlag) {
                            result.get(cmdName).push(obj);
                        }
                    }
                }

            }
        }
    }

    static getTransformAttrs(dom) {
        let tr = dom.getAttribute('transform');
        if (tr) {
            tr = tr.replace(/translate|scale|rotate|\s/g, (m) => {
                return m === ' ' ? '' : '@' + m;
            });
            tr = tr.replace(/(^@*)|(@*$)/g, '').split('@');
            let scaleStr = '', transStr = '';
            for (let i = 0; i < tr.length; i++) {
                if (tr[i].indexOf('translate') >= 0) {
                    transStr = tr[i];
                } else if (tr[i].indexOf('scale') >= 0) {
                    scaleStr = tr[i];
                }
            }
            let transPosiStr = ['0', '0'], scaleNumStr = '1';
            if (transStr !== '') {
                transPosiStr = transStr.replace(/translate\(| |\)/g, '').split(',');
            }
            if (scaleStr !== '') {
                scaleNumStr = scaleStr.replace(/scale\(| |\)/g, '');
            }
            return { transNums: [parseFloat(transPosiStr[0]), parseFloat(transPosiStr[1])], scaleNum: parseFloat(scaleNumStr) };
        }
        return { transNums: [0.0, 0.0], scaleNum: 1.0 };
    }

    /**
     * check if the input prop is a valid property of the input tag
     * @param {*} tagName 
     * @param {*} propName 
     */
    static checkValidProp(tagName, propName) {
        switch (tagName) {
            case 'circle':
                return ['opacity', 'cx', 'cy', 'r', 'stroke', 'stroke-width', 'fill'].includes(propName);
            case 'ellipse':
                return ['opacity', 'cx', 'cy', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);
            case 'image':
                return ['x', 'y', 'width', 'height', 'href', 'xlink:href', 'preserveAspectRatio'].includes(propName);
            case 'line':
                return ['opacity', 'x1', 'x2', 'y1', 'y2', 'stroke', 'stroke-width', 'fill'].includes(propName);
            case 'path':
                return ['opacity', 'd', 'stroke', 'stroke-width', 'fill'].includes(propName);
            case 'polygon':
            case 'polyline':
                return ['opacity', 'points', 'stroke', 'stroke-width', 'fill'].includes(propName);
            case 'rect':
                return ['opacity', 'x', 'y', 'width', 'height', 'rx', 'ry', 'stroke', 'stroke-width', 'fill'].includes(propName);
            case 'text':
                return ['opacity', 'x', 'y', 'dx', 'dy', 'textContent'].includes(propName);
            default:
                return false;
        }
    }

    /**
     * check if a string contains html tag
     */
    static checkHTML(str) {
        var reg = /<[^>]+>/g;
        return reg.test(str);
    }
}

CanisUtil.basicShapes = new Map([
    ['rect', ['x', 'y', 'width', 'height', 'rx', 'ry']],
    ['circle', ['cx', 'cy', 'r']]
])
CanisUtil.colorNames = new Map([['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aqua', '#00ffff'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['black', '#000000'], ['blanchedalmond', '#ffebcd'], ['blue', '#0000ff'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgrey', '#a9a9a9'], ['darkgreen', '#006400'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['fuchsia', '#ff00ff'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['gray', '#808080'], ['grey', '#808080'], ['green', '#008000'], ['greenyellow', '#adff2f'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred ', '#cd5c5c'], ['indigo  ', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgrey', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['lime', '#00ff00'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['maroon', '#800000'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['navy', '#000080'], ['oldlace', '#fdf5e6'], ['olive', '#808000'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['purple', '#800080'], ['rebeccapurple', '#663399'], ['red', '#ff0000'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['silver', '#c0c0c0'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['teal', '#008080'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['white', '#ffffff'], ['whitesmoke', '#f5f5f5'], ['yellow', '#ffff00'], ['yellowgreen', '#9acd32']])

export class Viewport {
    constructor() {
        this.chartWidth = 0;
        this.chartHeight = 0;
    }
    setViewport(w, h) {
        this.chartWidth = w;
        this.chartHeight = h;
    }
}

export class AssetTemplate {
    construcor(tagName, visualProps, animateProps, boundingBox, jsMovinLayerIdx) {
        //use to compare
        this.tagName = tagName;
        this.visualProps = visualProps;
        this.animateProps = animateProps;
        //use to calculate offsets and reference
        this.boundingBox = boundingBox;
        this.jsMovinLayerIdx = jsMovinLayerIdx;
    }

    /**
     * compare the new asset template with the existing tempalte 
     * @param {*} candidateAt : candidate asset template
     * @param {*} at : asset template
     */
    static compareTemplate(candidateAt, at) {
        if (candidateAt.tagName !== at.tagName) {
            return false;
        }
        if (!this.compareVisualProps(candidateAt.visualProps, at.visualProps)) {
            return false;
        }
    }

    static compareVisualProps(p1, p2) {
        const safeProps = ['x', 'y', 'width', 'height', 'r', 'opacity', 'd']
        const allKeys = [...Object.keys(p1), ...Object.keys(p2)];
        const differentKeys = allKeys.filter((k) => {
            typeof p1[k] === 'undefined' || typeof p2[k] === 'undefined' || p1[k] !== p2[k];
        })

        if (differentKeys.includes('d')) {
            const removeNumRegExp = new RegExp(/[0-9\.,\s]/g);
            return p1['d'].replace(removeNumRegExp, '') === p2['d'].replace(removeNumRegExp, '');
        }

        return differentKeys.every((k) => safeProps.indexOf(k) >= 0);
    }
}