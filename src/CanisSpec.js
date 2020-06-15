import ChartSpec from './ChartSpec.js';
import FacetSpec from './FacetSpec.js';
import TimingSpec from './TimingSpec.js';
import Animation from "./AnimationSpec.js";
import { CanisUtil } from './util/Util.js';
import { globalVar } from './util/GlobalVar.js';
import 'babel-polyfill';
import GroupingSpec from './GroupingSpec.js';
import ActionSpec from './ActionSpec.js';

class CanisSpec {
    constructor() {
        this.currentSpec = {};
        this.canisObj = {};
        this._constants = new Map();
        this.chartSpecs;
        this.facet;
        this._animations;
        this.chartWidth;
        this.chartHeight;
        this.hasError = false;
    }

    set constants(conArr) {
        this._constants.clear();
        conArr.forEach(c => {
            this._constants.set(c.name, c.value);
        })
    }

    get constants() {
        return this._constants;
    }

    set animations(aniJson) {
        console.log('assigning animations: ', this.chartSpecs, aniJson);
        let idxAniJson = aniJson.map(tmpAni => {
            tmpAni.chartIdx = 0
            return tmpAni;
        });
        let chartNum = 0;//number of charts
        if (this.facet) {
            chartNum = this.facet.views[0].frames.length;
        } else {
            chartNum = this.chartSpecs.length;
        }
        if (chartNum > 1) {//more than 1 input chart
            console.log('going to clone animations: ', chartNum, aniJson);
            for (let i = 1; i < chartNum - 1; i++) {
                let tmpAniJson = CanisUtil.deepClone(aniJson);
                tmpAniJson[0].reference = TimingSpec.timingRef.previousEnd;
                //record animation id and replace it in align property
                let tmpAniIdx = 0;
                let idMapping = new Map(); //key: previous animation id, value: new animation id
                let tmpIdxAniJson = tmpAniJson.map(tmpAni => {
                    tmpAni.chartIdx = i;
                    if (typeof tmpAni.id !== 'undefined') {
                        const newId = '_ani_' + i + '_' + tmpAniIdx;
                        idMapping.set(tmpAni.id, newId);
                    }
                    if (typeof tmpAni.align !== 'undefined') {
                        if (typeof idMapping.get(tmpAni.align.target) !== 'undefined') {
                            tmpAni.align.target = idMapping.get(tmpAni.align.target);
                        } else {
                            console.warn('aligning with an id that does not exist!');
                        }
                    }
                    return tmpAni;
                })
                idxAniJson.push(...tmpIdxAniJson);
            }
        }
        this._animations = idxAniJson;
    }

    get animations() {
        return this._animations;
    }

    preprocessCharts(spec, diffChart, status = {}) {
        // console.time('prepeocess charts');
        let canisObj = spec;

        // if (diffChart) {//using different chart, processing charts
            this.chartSpecs = [];
            [canisObj.charts, this.hasError] = ChartSpec.chartPreProcessing(canisObj.charts, status);
            if (this.hasError) return canisObj;
            //deal with input charts
            for (let i = 0; i < canisObj.charts.length; i++) {
                const chartName = typeof canisObj.charts[i].id === 'undefined' ? 'chart' + i : canisObj.charts[i].id;
                const chartType = typeof canisObj.charts[i].type === 'undefined' ? ChartSpec.CHART_URL : canisObj.charts[i].type;
                const tmpChart = new ChartSpec(chartName, chartType, canisObj.charts[i].source);
                this.chartSpecs.push(tmpChart);
            }
            //init facet
            if (canisObj.facet) {
                this.facet = new FacetSpec(canisObj.facet.type, canisObj.facet.views);
            }
            this.hasError = ChartSpec.loadCharts(this.chartSpecs, this.facet, status);
            if (this.hasError) return canisObj;

            //set viewport for jsmovin
            globalVar.jsMovin.setViewport(ChartSpec.viewport.chartWidth, ChartSpec.viewport.chartHeight);

            ChartSpec.removeTransAndMerge();
            document.getElementById('chartContainer').innerHTML = '';
            document.getElementById('chartContainer').appendChild(ChartSpec.svgChart);
        // }
        globalVar.jsMovin.clearLayers();
        ChartSpec.addLottieMarkLayers(ChartSpec.svgChart);

        // console.timeEnd('prepeocess charts');
        return canisObj;
    }

    compareSpec(spec) {
        let diffChart = false;
        // console.log('comparing: ', this.currentSpec.charts, spec.charst);
        if ((typeof this.currentSpec.constants !== 'undefined' && JSON.stringify(spec.constants) !== JSON.stringify(this.currentSpec.constants)) ||
            (typeof this.currentSpec.charts !== 'undefined' && JSON.stringify(spec.charts) !== JSON.stringify(this.currentSpec.charts)) ||
            typeof this.currentSpec.charts === 'undefined' ||
            (typeof spec.facet !== 'undefined' && typeof this.currentSpec.facet !== 'undefined' && JSON.stringify(spec.facet) !== JSON.stringify(this.currentSpec.facet)) ||
            ((typeof this.currentSpec.facet === 'undefined' || typeof spec.facet === 'undefined') && !(typeof this.currentSpec.facet === 'undefined' && typeof spec.facet === 'undefined'))
        ) {
            diffChart = true;
        }
        if (diffChart) {
            // console.log('charts are different');
            Animation.domMarks.clear();
            Animation.allMarks = [];
            ChartSpec.dataMarkDatum.clear();
            ChartSpec.marksWithSameDatum.clear();
            ChartSpec.nonDataMarkDatum.clear();
            ChartSpec.chartUnderstanding = { mShape: ['shape'] };
            Animation.animations.clear();
            Animation.markClass.clear();
        }
        this.currentSpec = spec;
        return diffChart;
    }

    checkAttrs(legalAttrs, obj, status) {
        const attrs = Object.keys(obj);
        let hasError = false;
        for (let j = 0, len2 = attrs.length; j < len2; j++) {
            if (!legalAttrs.includes(attrs[j])) {
                hasError = true;
                const tmpValue = obj[attrs[j]];
                let errSpecStr = '"' + attrs[j] + '":';
                if (!isNaN(Number(tmpValue))) {//the value is a number
                    errSpecStr += '' + tmpValue;
                } else if (typeof tmpValue === 'object') {//the value is array
                    errSpecStr += JSON.stringify(tmpValue);
                } else {//the value is string
                    errSpecStr += '"' + tmpValue + '"';
                }
                status.info = { type: 'error', msg: 'Illegal attribute name "' + attrs[j] + '".', errSpec: errSpecStr.replace(/\s/g, '') };
                break;
            }
        }
        return hasError;
    }

    /**
     * check the validaty of the spec
     * @param {*} spec 
     */
    checkSpec(spec, status) {
        let hasError = false;
        //check charts
        if (spec.charts.length === 0) {
            hasError = true;
            status.info = { type: 'error', msg: 'There are no input charts.', errSpec: '"charts":[]' };
        }
        //check chart source
        for (let i = 0, len = spec.charts.length; i < len; i++) {
            //check for wrong attributes
            hasError = this.checkAttrs(ChartSpec.attrs, spec.charts[i], status);
            if (hasError) {
                break;
            }

            if (!spec.charts[i].source) {
                hasError = true;
                status.info = { type: 'error', msg: 'No chart source found in chart item.', errSpec: JSON.stringify(spec.charts[i]).replace(/\s/g, '') };
                break;
            } else {
                const sourceStr = spec.charts[i].source;
                if (sourceStr.indexOf('.dsvg') < 0 && !(spec.charts[i].start && spec.charts[i].end)) {
                    hasError = true;
                    status.info = { type: 'error', msg: 'No range specification found for input chart index .', errSpec: JSON.stringify(spec.charts[i]).replace(/\s/g, '') };
                    break;
                }
            }
        }
        //check animation
        for (let i = 0, len = spec.animations.length; i < len; i++) {
            //check for wrong attributes
            hasError = this.checkAttrs(Animation.attrs, spec.animations[i], status);
            if (hasError) {
                break;
            }

            if (!spec.animations[i].selector) {
                hasError = true;
                status.info = { type: 'error', msg: 'No selector found in animation unit.', errSpec: JSON.stringify(spec.animations[i]).replace(/\s/g, '') };
                break;
            } else if (!spec.animations[i].effects) {
                hasError = true;
                status.info = { type: 'error', msg: 'No effects found in animation unit.', errSpec: JSON.stringify(spec.animations[i]).replace(/\s/g, '') };
                break;
            } else {
                //check reference
                if (spec.animations[i].reference) {
                    if (!Object.keys(TimingSpec.timingRef).includes(TimingSpec.transRef(spec.animations[i].reference))) {
                        hasError = true;
                        status.info = { type: 'error', msg: 'The value of the reference has to be one of: start with previous or start after previous.', errSpec: '"reference":"' + spec.animations[i].reference.replace(/\s/g, '') + '"' };
                        break;
                    }
                }
                // //check align
                // if (spec.animations[i].align) {
                //     if (!Object.keys(Animation.alignTarget).includes(Animation.transAlign(spec.animations[i].align))) {
                //         hasError = true;
                //         status.info = { type: 'error', msg: 'The value of align has to be one of: element or object.', errSpec: '"align":"' + spec.animations[i].align.replace(/\s/g, '') + '"' };
                //         break;
                //     }
                // }
                //check align
                if (spec.animations[i].align && typeof spec.animations[i].align === 'object') {
                    hasError = this.checkAttrs(Animation.alignAttrs, spec.animations[i].align, status);
                    if (hasError) {
                        break;
                    }
                    //check align type
                    if (typeof spec.animations[i].align.type !== 'undefined') {
                        if (!Object.keys(Animation.alignTarget).includes(Animation.transAlign(spec.animations[i].align.type))) {
                            hasError = true;
                            status.info = { type: 'error', msg: 'The value of align has to be one of: element or object.', errSpec: '"type":"' + spec.animations[i].align.type.replace(/\s/g, '') + '"' };
                            break;
                        }
                    }
                }
                //check offset object
                if (spec.animations[i].offset && typeof spec.animations[i].offset === 'object') {
                    hasError = this.checkAttrs(TimingSpec.dataBindAttrs, spec.animations[i].offset, status);
                    if (hasError) {
                        break;
                    }
                }
                //check grouping
                if (spec.animations[i].grouping) {
                    hasError = this.checkGroupingSpec(spec.animations[i].grouping, status);
                    if (hasError) {
                        break;
                    }
                }
                //check effects
                for (let j = 0, len2 = spec.animations[i].effects.length; j < len2; j++) {
                    //check for wrong attributes
                    hasError = this.checkAttrs(ActionSpec.attrs, spec.animations[i].effects[j], status);
                    if (hasError) {
                        break;
                    }

                    if (!spec.animations[i].effects[j].type) {
                        hasError = true;
                        status.info = { type: 'error', msg: 'No effect type found in effect item.', errSpec: JSON.stringify(spec.animations[i].effects[j]).replace(/\s/g, '') };
                        break;
                    } else if (!Object.values(ActionSpec.actionTypes).includes(spec.animations[i].effects[j].type)) {
                        hasError = true;
                        status.info = { type: 'error', msg: 'Invalid effect type "' + spec.animations[i].effects[j].type + '".', errSpec: '"type":"' + spec.animations[i].effects[j].type.replace(/\s/g, '') + '"' };
                        break;
                    }
                    if (spec.animations[i].effects[j].offset && typeof spec.animations[i].effects[j].offset === 'object') {
                        hasError = this.checkAttrs(TimingSpec.dataBindAttrs, spec.animations[i].effects[j].offset, status);
                        if (hasError) {
                            break;
                        }
                    }
                    if (spec.animations[i].effects[j].duration && typeof spec.animations[i].effects[j].duration === 'object') {
                        hasError = this.checkAttrs(TimingSpec.dataBindAttrs, spec.animations[i].effects[j].duration, status);
                        if (hasError) {
                            break;
                        }
                    }
                    if (spec.animations[i].effects[j].easing && !Object.values(ActionSpec.easingType).includes(spec.animations[i].effects[j].easing)) {
                        hasError = true;
                        status.info = { type: 'error', msg: 'Invalid easing type "' + spec.animations[i].effects[j].easing + '".', errSpec: '"easing":"' + spec.animations[i].effects[j].easing.replace(/\s/g, '') + '"' };
                        break;
                    }
                }
            }
        }
        return hasError;
    }

    checkGroupingSpec(groupingSpec, status) {
        if (typeof groupingSpec === 'number' || typeof groupingSpec === 'string') {
            const errStr = typeof groupingSpec === 'number' ? '"grouping":' + groupingSpec : '"grouping":"' + groupingSpec.replace(/\s/g, '') + '"';
            status.info = { type: 'error', msg: 'Invalid grouping value.', errSpec: errStr };
            return true;
        }

        //check for wrong attributes
        let hasError = this.checkAttrs(GroupingSpec.attrs, groupingSpec, status);
        if (hasError) {
            return true;
        }

        if (groupingSpec.reference) {
            if (!Object.keys(TimingSpec.timingRef).includes(TimingSpec.transRef(groupingSpec.reference))) {
                status.info = { type: 'error', msg: 'The value of the reference has to be one of: start with previous or start after previous.', errSpec: '"reference":"' + groupingSpec.reference.replace(/\s/g, '') + '"' };
                return true;
            }
        }
        if (groupingSpec.sort && typeof groupingSpec.sort === 'object') {
            let sortHasError = this.checkAttrs(GroupingSpec.sortAttrs, groupingSpec.sort, status);
            if (sortHasError) {
                return true;
            }
        } else if (typeof groupingSpec.sort === 'number') {
            status.info = { type: 'error', msg: 'Invalid sort value.', errSpec: '"sort":' + groupingSpec.sort };
            return true;
        }
        if (groupingSpec.grouping) {
            return this.checkGroupingSpec(groupingSpec.grouping, status);
        }
        return false;
    }

    async init(spec, status = {}) {
        if (JSON.stringify(status) !== '{}') {
            this.hasError = this.checkSpec(spec, status);
        } else {
            this.hasError = false;
        }

        if (!this.hasError) {
            Animation.resetAll();
            GroupingSpec.frames.clear();//clear keyframe record;
            GroupingSpec.framesMark.clear();//clear keyframe record;
            if (spec.charts.length === 0) {//no charts specified
                Animation.domMarks.clear();
                Animation.allMarks = [];
                ChartSpec.dataMarkDatum.clear();
                ChartSpec.nonDataMarkDatum.clear();
                ChartSpec.chartUnderstanding = { mShape: ['shape'] };
                Animation.animations.clear();
                Animation.markClass.clear();
                if (document.getElementById('chartContainer')) {
                    document.getElementById('chartContainer').innerHTML = '';
                }
            } else {
                //set framerate for jsmovin
                globalVar.jsMovin.setFrameRate(TimingSpec.FRAME_RATE);

                const diffChart = this.compareSpec(spec);
                let canisObj = await this.preprocessCharts(spec, diffChart, status);

                //init user defined variables
                if (canisObj.constants && typeof canisObj.constants !== 'undefined') {
                    this.constants = canisObj.constants;
                }

                //deal with animations
                this.animations = canisObj.animations;
                console.log('all animations: ', this.animations);
                if (Array.isArray(this.animations)) {
                    let lastAnimation;
                    for (let aniIdx = 0; aniIdx < this.animations.length; aniIdx++) {
                        let animationJson = this.animations[aniIdx];

                        // console.time('using dom');
                        //use the selector in animation to select marks and record dom attrs
                        // console.time('query dom');
                        let tmpContainer = document.createElement('div');
                        document.body.appendChild(tmpContainer);
                        tmpContainer.innerHTML = ChartSpec.charts[animationJson.chartIdx].outerHTML;
                        let marks = tmpContainer.querySelectorAll(animationJson.selector);
                        let tmpAllMarks = [];
                        [].forEach.call(tmpContainer.querySelectorAll('.mark'), function (tm) {
                            tmpAllMarks.push(tm.getAttribute('id'));
                            let mClass = tm.getAttribute('class').split(' ');
                            let markType = '';
                            for (let i = 0, len = mClass.length; i < len; i++) {
                                if (mClass[i] === 'mark') {
                                    markType = mClass[i + 1];
                                }
                            }
                            Animation.markClass.set(tm.getAttribute('id'), markType);
                        })
                        Animation.allMarks = [...new Set([...Animation.allMarks, ...tmpAllMarks])];
                        if (marks.length === 0) {
                            if (typeof animationJson.selector === 'number') {
                                status.info = { type: 'error', msg: 'The selector need to be a CSS selector', errSpec: '"selector":' + animationJson.selector };
                            } else {
                                status.info = { type: 'error', msg: 'The selector ' + animationJson.selector + ' selects no marks', errSpec: '"selector":"' + animationJson.selector.replace(/\s/g, '') + '"' };
                            }
                            return;
                        }
                        // console.timeEnd('query dom');
                        animationJson.selector = this.sortSelector(animationJson.selector);

                        let usedChangedAttrs = [];
                        for (let i = 0; i < ChartSpec.changedAttrs.length; i++) {
                            usedChangedAttrs.push(ChartSpec.changedAttrs[i]);
                        }

                        //check whether the animation is existed
                        //TODO: remove non existed animations in the current spec
                        let animation;
                        let markIds = [];
                        if (marks.length > 0) {
                            [].forEach.call(marks, function (mark) {
                                markIds.push(mark.getAttribute('id'));
                            })
                        }
                        // let aniKey = animationJson.chartIdx + '_#' + markIds.join(', #');//updated for aniId
                        // animationJson.id = aniKey;
                        // console.log('selector is: ', animationJson.selector);
                        let aniKey = animationJson.chartIdx + '_' + animationJson.selector;
                        if (aniKey === '0_.mark') {
                            aniKey = `0_#${Animation.allMarks.join(', #')}`;
                        }
                        if (typeof Animation.animations.get(aniKey) !== 'undefined') {//already have this animation
                            animation = Animation.animations.get(aniKey);
                            animation.translate(animationJson, usedChangedAttrs, true);
                        } else {
                            animation = new Animation();
                            animation.translate(animationJson, usedChangedAttrs);//translate from json obj to Animation obj
                            Animation.animations.set(aniKey, animation);
                        }
                        //auto fill align property for animations except the first one
                        if (typeof animation.align === 'undefined' && typeof lastAnimation !== 'undefined') {
                            animation.align = {
                                target: lastAnimation.id,
                                type: Animation.alignTarget.withObj
                            }
                        }
                        //replace contant variables
                        if (this.constants.size > 0) {
                            animation.replaceConstants(this.constants, status);
                        }

                        // console.timeEnd('using dom');
                        // let markIds = [];//record all ids of selected marks
                        if (marks.length > 0) {
                            const idxForEachCls = new Map();
                            [].forEach.call(marks, function (mark) {
                                if (mark.classList.contains('mark')) {
                                    let markId = mark.getAttribute('id');
                                    let markCls = mark.getAttribute('class');
                                    if (typeof idxForEachCls.get(markCls) === 'undefined') {
                                        idxForEachCls.set(markCls, 0);
                                    } else {
                                        idxForEachCls.set(markCls, idxForEachCls.get(markCls) + 1);
                                    }
                                    // markIds.push(markId);
                                    if (typeof Animation.domMarks.get(markId) === 'undefined') {
                                        //process path
                                        if (mark.tagName === 'path') {//consider the linkage shape later
                                            let markJSON = CanisUtil.toJSON(mark);
                                            let transformedAttrs = CanisUtil.discretizePath(markJSON);

                                            if (transformedAttrs) {
                                                if (transformedAttrs.type === 'lines') {
                                                    for (let i = 0; i < transformedAttrs.data.length; i++) {
                                                        markJSON.attr['x' + (1 + 2 * i)] = transformedAttrs.data[i][0][0];
                                                        markJSON.attr['y' + (1 + 2 * i)] = transformedAttrs.data[i][0][1];
                                                        markJSON.attr['x' + (2 + 2 * i)] = transformedAttrs.data[i][1][0];
                                                        markJSON.attr['y' + (2 + 2 * i)] = transformedAttrs.data[i][1][1];
                                                    }
                                                } else {
                                                    let tfAttrsDataKeys = Object.keys(transformedAttrs.data);

                                                    for (let i = 0; i < tfAttrsDataKeys.length; i++) {
                                                        let tAttr = tfAttrsDataKeys[i];
                                                        if (tAttr === 'radius') {
                                                            if (transformedAttrs.data[tAttr].length > 1) {
                                                                markJSON.attr.innerRadius = transformedAttrs.data[tAttr][0].rx + 1;
                                                                markJSON.attr.outterRadius = transformedAttrs.data[tAttr][1].rx - 1;
                                                            } else {
                                                                markJSON.attr.innerRadius = 0;
                                                                markJSON.attr.outterRadius = transformedAttrs.data[tAttr][0].rx - 1;
                                                            }
                                                        } else {
                                                            markJSON.attr[tAttr] = transformedAttrs.data[tAttr];
                                                        }
                                                    }
                                                }
                                                mark = CanisUtil.toDOM(markJSON);
                                            }
                                        }

                                        let tmpDomAttrObj = {};
                                        let attrArr = [...mark.attributes];
                                        for (let i = 0; i < attrArr.length; i++) {
                                            let attrName = attrArr[i];
                                            tmpDomAttrObj[attrName.name] = mark.getAttribute(attrName.name);
                                        }
                                        let markDom = document.getElementById(markId);
                                        tmpDomAttrObj['bbWidth'] = markDom.getBBox().width;
                                        tmpDomAttrObj['bbHeight'] = markDom.getBBox().height;
                                        tmpDomAttrObj['bbX'] = markDom.getBBox().x;
                                        tmpDomAttrObj['bbY'] = markDom.getBBox().y;
                                        tmpDomAttrObj['content'] = mark.textContent;
                                        tmpDomAttrObj['id'] = markId;
                                        let dataDatumAttrValue = JSON.parse(mark.getAttribute('data-datum'));
                                        if (Array.isArray(dataDatumAttrValue)) {
                                            dataDatumAttrValue = dataDatumAttrValue[0];
                                        }
                                        dataDatumAttrValue.clsIdx = `a${idxForEachCls.get(markCls)}`;
                                        if (typeof ChartSpec.nonDataMarkDatum.get(markId) !== 'undefined') {
                                            ChartSpec.nonDataMarkDatum.get(markId).clsIdx = `a${idxForEachCls.get(markCls)}`;
                                        }
                                        tmpDomAttrObj['data-datum'] = dataDatumAttrValue;
                                        // CanisSpec.markData.set(markId, dataDatumAttrValue);
                                        tmpDomAttrObj['tagName'] = mark.tagName;
                                        if (mark.tagName === 'path' || mark.tagName === 'line') {
                                            tmpDomAttrObj['stroke-dasharray'] = document.getElementById(markId).getTotalLength();
                                            tmpDomAttrObj['stroke-dashoffset'] = document.getElementById(markId).getTotalLength();
                                            if (mark.tagName === 'path') {
                                                let discD = CanisUtil.discretizeD(mark.getAttribute('d'), '#000');
                                                if (typeof discD !== 'undefined' && discD) {
                                                    if (discD.type === 'pies') {
                                                        tmpDomAttrObj['cx'] = discD.data.cx;
                                                        tmpDomAttrObj['cy'] = discD.data.cy;
                                                        tmpDomAttrObj['startAngle'] = (discD.data.clockwise ? discD.data.startAngle : discD.data.endAngle) - 1 / (Math.PI * 2);
                                                        tmpDomAttrObj['endAngle'] = (!discD.data.clockwise ? discD.data.startAngle : discD.data.endAngle) + Math.PI * 4 + 1 / (Math.PI * 2);
                                                        if (discD.data.radius.length > 1) {
                                                            tmpDomAttrObj['innerRadius'] = discD.data.radius[0].rx > discD.data.radius[1].rx ? discD.data.radius[1].rx : discD.data.radius[0].rx;
                                                            tmpDomAttrObj['outterRadius'] = discD.data.radius[0].rx > discD.data.radius[1].rx ? discD.data.radius[0].rx : discD.data.radius[1].rx;
                                                            tmpDomAttrObj['outterRadius']++;
                                                        } else {
                                                            tmpDomAttrObj['innerRadius'] = 0;
                                                            tmpDomAttrObj['outterRadius'] = discD.data.radius[0].rx + 1;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        Animation.domMarks.set(markId, tmpDomAttrObj);
                                    }

                                }
                            })
                            // console.log('after', Animation.domMarks);
                        }
                        // animation.calAniTime(markIds, lastAnimation);
                        animation.calAniTime(markIds);
                        Animation.animations.get(aniKey).alignOnData = animation.alignOnData;
                        lastAnimation = animation;
                        document.body.removeChild(tmpContainer);
                        // console.log('test marks in order in the end: ', animation.marksInOrder);
                    }
                }
            }
        }

    }

    sortSelector(selector) {
        const selectorBlocks = selector.split(', ');//should be in the form #mark1 #mark2 ...
        if (selectorBlocks.length > 0) {
            // console.log('before sort selector: ', selectorBlocks);
            selectorBlocks.sort((a, b) => {
                const numA = parseInt(a.substring(5));
                const numB = parseInt(b.substring(5));
                return numA - numB;
            })
            // console.log('after sort seelctor', selectorBlocks);
            return selectorBlocks.join(', ');
        }
        return selector;
    }

    render(callback, status = {}) {
        // console.time('rendering');
        Animation.renderAnimation(status);
        // Animation.findKeyframes();
        //map animation keyframes to lottie spec
        Animation.mapToLottieSpec();

        //export lottie JSON
        let lottieJSON = globalVar.jsMovin.toJSON();
        CanisSpec.lottieJSON = lottieJSON;
        // console.timeEnd('rendering');
        if (status) {
            status.info = 'Done rendering.';
        }
        callback();
        return JSON.parse(lottieJSON);
    }
}

CanisSpec.lottieJSON = '';

export default CanisSpec;