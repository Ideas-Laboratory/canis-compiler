import { Util, Viewport } from "./util/Util";
import FacetSpec from "./FacetSpec";
import { globalVar } from './util/GlobalVar.js';

class ChartSpec {
    constructor(id, source) {
        this.id = id;
        this.source = source;
    }

    static chartPreProcessing(chartSpecs) {
        let inputSpecs = [];
        for (let i = 0; i < chartSpecs.length; i++) {
            let inputSpec = chartSpecs[i];
            if (typeof inputSpec.start !== 'undefined' && typeof inputSpec.end !== 'undefined') {
                let startIdx = parseInt(inputSpec.start), endIdx = parseInt(inputSpec.end);
                if (endIdx < startIdx) {
                    console.log('wrong start and end file index ');
                    continue;
                } else {
                    let tmpBlocks = inputSpec.source.split('/');
                    let chartName = typeof inputSpec.id === 'undefined' ? tmpBlocks[tmpBlocks.length - 1] : inputSpec.id;
                    for (let j = startIdx; j <= endIdx; j++) {
                        inputSpecs.push({
                            "id": chartName + j,
                            "source": inputSpec.source + j + '.dsvg'
                        })
                    }
                }
            } else {
                inputSpecs.push(inputSpec);
            }
        }
        return inputSpecs;
    }

    static loadCharts(chartSpecs, facet) {
        let nameCharts = new Map();
        ChartSpec.charts = [];
        let nullCharts = [];
        let defaultWidth = 0;
        let defaultHeight = 0;
        for (let i = 0; i < chartSpecs.length; i++) {
            let xhr = new XMLHttpRequest(),
                okStatus = document.location.protocol === "file:" ? 0 : 200,
                svgContent;
            xhr.open('GET', chartSpecs[i].source, false);
            xhr.overrideMimeType("text/html;charset=utf-8");
            xhr.send(null);
            if (xhr.status === okStatus) {
                let tmpDiv = document.createElement('div');
                tmpDiv.innerHTML = xhr.responseText;
                svgContent = tmpDiv.children[0];
                defaultWidth = parseFloat(svgContent.getAttribute('width'));
                defaultHeight = parseFloat(svgContent.getAttribute('height'));
                ChartSpec.charts.push(svgContent);
                nameCharts.set(chartSpecs[i].id, ChartSpec.charts.length - 1);
            } else if (xhr.status === 404) {
                nullCharts.unshift(i);
                console.log('can not find ' + chartSpecs[i].source + ' ! Please check the url.');
            }
        }

        //remove the empty charts 
        for (let i = 0; i < nullCharts.length; i++) {
            chartSpecs.slice(nullCharts[i], 1);
        }

        //generate chart facets
        typeof facet !== 'undefined' ? ChartSpec.facetViews(nameCharts, facet) : this.viewport.setViewport(defaultWidth, defaultHeight);
    }

    static removeTransAndMerge() {
        for (let i = 0; i < ChartSpec.charts.length; i++) {
            ChartSpec.charts[i].setAttribute('trans', '0,0');
            ChartSpec.removeTransitions(ChartSpec.charts[i].children[0]);
        }
        let resultChart = ChartSpec.mergeCharts();

        return resultChart;
    }

    static facetViews(nameCharts, facet) {
        if (facet.views.length > 0) {
            let chartsToCombine = [];
            for (let i = 0; i < facet.views[0].frames.length; i++) {
                let tmpRecorder = [];
                for (let j = 0; j < facet.views.length; j++) {
                    let chartName = facet.views[j].frames[i];
                    if (typeof nameCharts.get(chartName) !== 'undefined') {
                        tmpRecorder.push(ChartSpec.charts[nameCharts.get(chartName)].cloneNode(true));
                    } else {
                        console.log('chart name ' + chartName + ' is undefined !');
                    }
                }
                if (tmpRecorder.length === facet.views.length) {
                    chartsToCombine.push(tmpRecorder);
                }
            }
            ChartSpec.combineCharts(facet.type, facet.views.length, chartsToCombine);
        }
    }

    static combineCharts(facetType, facetNum, chartsToCombine) {
        let resultCharts = [],
            chartMargin = 20,
            oriWidth = 0, oriHeight = 0;
        for (let i = 0; i < chartsToCombine.length; i++) {
            let tmpCharts = chartsToCombine[i];
            oriWidth = parseFloat(tmpCharts[0].getAttribute('width'));
            oriHeight = parseFloat(tmpCharts[0].getAttribute('height'));
            let viewBoxNums = tmpCharts[0].getAttribute('viewBox').split(' ');
            let viewBoxW = parseFloat(viewBoxNums[2]);
            let viewBoxH = parseFloat(viewBoxNums[3]);

            let chartTransForm = Util.getTransformAttrs(tmpCharts[0].children[0]);
            tmpCharts[0].children[0].setAttribute('transform', 'translate(' + chartTransForm.transNums[0] + ',' + chartTransForm.transNums[1] + ') ' + 'scale(' + chartTransForm.scaleNum / facetNum + ')');
            switch (facetType) {
                case FacetSpec.facetType.row:
                    oriHeight += chartMargin * tmpCharts.length;
                    tmpCharts[0].setAttribute('height', oriHeight);
                    tmpCharts[0].setAttribute('viewBox', '0 0 ' + viewBoxW + ' ' + (viewBoxH + chartMargin * tmpCharts.length));
                    break;
                case FacetSpec.facetType.col:
                    oriWidth += chartMargin * tmpCharts.length;
                    tmpCharts[0].setAttribute('width', oriWidth);
                    tmpCharts[0].setAttribute('viewBox', '0 0 ' + (viewBoxW + chartMargin * tmpCharts.length) + ' ' + viewBoxH);
                    break;
            }

            for (let j = 0; j < tmpCharts.length; j++) {
                let tmpChart = tmpCharts[j];
                let tmpMarks = tmpChart.querySelectorAll('.mark');
                [].forEach.call(tmpMarks, (m) => {
                    let idNum = parseInt(m.getAttribute('id').substring(4));
                    m.setAttribute('id', 'mark' + (idNum + j * 100000));
                    m.classList.add('facet' + j);
                })
                if (j > 0) {//put the marks in the following charts to the 1st chart
                    let chartContentG = tmpChart.children[0];
                    let chartChildren = chartContentG.children;
                    for (let m = 0; m < chartChildren.length; m++) {
                        let tmpDom = chartChildren[m];
                        let transformAttrs = Util.getTransformAttrs(tmpDom);
                        switch (facetType) {
                            case FacetSpec.facetType.row:
                                tmpDom.setAttribute('transform', 'translate(' + transformAttrs.transNums[0] + ',' + (transformAttrs.transNums[1] + (viewBoxH + chartMargin) * j) + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
                                break;
                            case FacetSpec.facetType.col:
                                tmpDom.setAttribute('transform', 'translate(' + (transformAttrs.transNums[0] + (viewBoxW + chartMargin) * j) + ',' + transformAttrs.transNums[1] + ') ' + 'scale(' + transformAttrs.scaleNum + ')');
                                break;
                        }
                        tmpCharts[0].children[0].appendChild(tmpDom);
                    }
                }
            }
            resultCharts.push(tmpCharts[0]);
        }
        ChartSpec.charts = resultCharts;
        this.viewport.setViewport(oriWidth, oriHeight);
    }

    static mergeCharts() {
        let allMarks = new Set();
        let markStatus = new Map();
        let markTempletes = new Map();
        let attrNames = ['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2', 'd', 'r', 'width', 'height', 'textContent', 'fill', 'stroke'];
        let nullStatus = {};
        for (let j = 0; j < attrNames.length; j++) {
            nullStatus[attrNames[j]] = null;
        }
        for (let i = 0; i < ChartSpec.charts.length; i++) {
            let tmpChart = ChartSpec.charts[i];
            let marks = tmpChart.querySelectorAll('.mark');
            if (marks.length > 0) {
                [].forEach.call(marks, (m) => {
                    let markId = m.getAttribute('id');

                    // globalVar.markLayers.set(markId, globalVar.jsMovin.addLayer(m));

                    allMarks.add(markId);
                    let statusObj = {};//status of one mark in chart i
                    for (let j = 0; j < attrNames.length; j++) {
                        if (attrNames[j] === 'textContent') {
                            statusObj[attrNames[j]] = m.innerHTML;
                        } else {
                            statusObj[attrNames[j]] = m.getAttribute(attrNames[j]);
                        }
                    }
                    if (typeof markStatus.get(markId) === 'undefined') {
                        markStatus.set(markId, new Array(ChartSpec.charts.length).fill(nullStatus));
                    }

                    markStatus.get(markId)[i] = statusObj;
                    markTempletes.set(markId, m.outerHTML);
                })
            }
        }

        //find the changed attributes
        ChartSpec.changedAttrs = [];
        let attrNamesCopy = Util.deepClone(attrNames);
        markStatus.forEach(function (statusArr, markId) {
            for (let i = 0; i < attrNamesCopy.length; i++) {
                let flag = true;
                let compareStatus;
                for (let j = 0; j < statusArr.length; j++) {
                    if (typeof statusArr[j] !== 'undefined') {
                        compareStatus = statusArr[j];
                        break;
                    }
                }
                for (let j = 0; j < statusArr.length; j++) {
                    if (typeof statusArr[j] !== 'undefined') {
                        if (statusArr[j][attrNamesCopy[i]] !== compareStatus[attrNamesCopy[i]]) {
                            ChartSpec.changedAttrs.push(attrNamesCopy[i]);
                            flag = false;
                            break;
                        }
                    }
                }
                if (!flag) {
                    attrNamesCopy.splice(i, 1);
                    break;
                }
            }
        })

        //find different cmds if there is d in changedAttrs
        let diffCmds = new Map();//key:cmd name, value: {cmdIdx, diffAttrIdxs}
        if (ChartSpec.changedAttrs.indexOf('d') >= 0) {
            diffCmds = Util.findDiffCmds(markStatus);
        }

        //add missing marks to each chart
        allMarks = Array.from(allMarks);
        ChartSpec.markDoms.clear();
        for (let i = 0; i < ChartSpec.charts.length; i++) {
            for (let j = 0; j < allMarks.length; j++) {
                if (ChartSpec.charts[i].querySelectorAll('#' + allMarks[j]).length === 0) {//chart i does not have mark j
                    let markStr = markTempletes.get(allMarks[j]);
                    let tmpDiv = document.createElement('div');
                    tmpDiv.innerHTML = markStr;
                    let mark = tmpDiv.children[0];
                    let statusObj = {};
                    //set the changed attributes to the init state
                    for (let a = 0; a < ChartSpec.changedAttrs.length; a++) {
                        if (ChartSpec.changedAttrs[a] === 'y' && ChartSpec.changedAttrs.indexOf('height') >= 0) {
                            let markY = !mark.getAttribute('y') ? 0 : parseFloat(mark.getAttribute('y'));
                            let markHeight = !mark.getAttribute('height') ? 0 : parseFloat(mark.getAttribute('height'));
                            let targetValue = markY + markHeight;
                            mark.setAttribute('y', targetValue);
                            statusObj.y = targetValue;
                        } else if (ChartSpec.changedAttrs[a] === 'd') {
                            let resultD;
                            if (mark.getAttribute('d')) {
                                resultD = Util.setPathDValue(mark.getAttribute('d'), true, 0, 0, diffCmds);
                            }
                            mark.setAttribute('d', resultD);
                            statusObj.d = resultD;
                        } else if (ChartSpec.changedAttrs[a] === 'textContent') {
                            mark.innerHTML = '';
                            statusObj.textContent = '';
                        } else if (ChartSpec.changedAttrs[a] === 'fill' || ChartSpec.changedAttrs[a] === 'stroke') {
                            if (typeof mark.getAttribute(ChartSpec.changedAttrs[a]) === 'undefined') {
                                mark.setAttribute(ChartSpec.changedAttrs[a], '#FFFFFF');
                            }
                            statusObj[ChartSpec.changedAttrs[a]] = mark.getAttribute(ChartSpec.changedAttrs[a]);
                        } else {
                            if (['x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2'].includes(ChartSpec.changedAttrs[a])) {
                                if (ChartSpec.changedAttrs[a] === 'x2') {
                                    mark.setAttribute('x2', parseFloat(mark.getAttribute('x1')));
                                    statusObj['x2'] = parseFloat(mark.getAttribute('x1'));
                                } else if (ChartSpec.changedAttrs[a] === 'y2') {
                                    mark.setAttribute('y2', parseFloat(mark.getAttribute('y1')));
                                    statusObj['y2'] = parseFloat(mark.getAttribute('y1'));
                                } else {
                                    statusObj[ChartSpec.changedAttrs[a]] = parseFloat(mark.getAttribute(ChartSpec.changedAttrs[a]));
                                }
                            } else {
                                mark.setAttribute(ChartSpec.changedAttrs[a], 0);
                                statusObj[ChartSpec.changedAttrs[a]] = 0;
                            }

                        }
                    }
                    markStr = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">' + mark.outerHTML + '</svg>';
                    let parser = new DOMParser();
                    let svgMark = parser.parseFromString(markStr, "image/svg+xml").lastChild.children[0];
                    ChartSpec.charts[i].querySelector('#chartContent').appendChild(svgMark);
                    markStatus.get(allMarks[j])[i] = statusObj;
                }

            }
        }

        //set data-trans of chart 0
        ChartSpec.dataTrans = new Map();
        for (let j = 0; j < allMarks.length; j++) {
            let statusArr = markStatus.get(allMarks[j]);
            let dataTransArr = [];

            for (let si = 0; si < statusArr.length; si++) {
                let tmpStatus = {};
                for (let a = 0; a < ChartSpec.changedAttrs.length; a++) {
                    tmpStatus[ChartSpec.changedAttrs[a]] = statusArr[si][ChartSpec.changedAttrs[a]];
                }
                dataTransArr.push(tmpStatus);//mark status in charts
            }
            //copy the status of the 1st chart as the init status
            ChartSpec.dataTrans.set(allMarks[j], dataTransArr);
            let markDom = ChartSpec.charts[0].querySelector('#' + allMarks[j]);
            markDom.setAttribute('data-transition', JSON.stringify({ "dataTrans": dataTransArr }, null, '\t'))
        }

        return ChartSpec.charts[0];
    }

    static getBBoxes() {
        let svg = document.getElementById('chartContainer').children[0];
        let marks = svg.querySelectorAll('[id^="mark"]');
        let bBoxes = new Map();
        if (marks.length > 0) {
            [].forEach.call(marks, (m) => {
                let markId = m.getAttribute('id');

                // globalVar.markLayers.set(markId, globalVar.jsMovin.addLayer(m));

                let bBox;
                if (m.tagName === 'text') {
                    bBox = m.getBBox();
                    bBox.width += 10;
                } else {
                    bBox = m.getBBox();
                }
                bBoxes.set(markId, bBox);
            })
        }
        return bBoxes;
    }

    static removeTransitions(t) {
        let tr = t.getAttribute('transform');
        let parentTrans = t.parentNode.getAttribute('trans').split(',');
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
            let transPosiStr = transStr.replace(/translate\(| |\)/g, '').split(',');
            t.setAttribute('transform', scaleStr);
            if (t.tagName === 'g') {
                t.setAttribute('trans', (parseFloat(transPosiStr[0]) + parseFloat(parentTrans[0])) + ',' + (parseFloat(transPosiStr[1]) + parseFloat(parentTrans[1])));
            } else {
                Util.transShape(t, parseFloat(transPosiStr[0]) + parseFloat(parentTrans[0]), parseFloat(transPosiStr[1]) + parseFloat(parentTrans[1]));
            }
        } else {
            if (t.tagName === 'g') {
                t.setAttribute('trans', parentTrans.join(','));
            } else {
                Util.transShape(t, parseFloat(parentTrans[0]), parseFloat(parentTrans[1]));
            }
        }
        if (t.children.length > 0) {
            for (let i = 0; i < t.children.length; i++) {
                ChartSpec.removeTransitions(t.children[i]);
            }
        }
    }

    static addLottieMarkLayers(t) {
        if (t.tagName !== 'g' && t.tagName !== 'svg') {
            console.log(t.tagName);
            if (t.classList.contains('mark')) {
                globalVar.markLayers.set(t.getAttribute('id'), globalVar.jsMovin.addLayer(t));
            } else {
                // if(t.tagName === 'line')
                globalVar.jsMovin.addLayer(t)
            }
            // t.classList.contains('mark') ? globalVar.markLayers.set(t.getAttribute('id'), globalVar.jsMovin.addLayer(t)) : globalVar.jsMovin.addLayer(t);
            // globalVar.markLayers.set(t.getAttribute('id'), globalVar.jsMovin.addLayer(t));
        }
        if (t.children.length > 0) {
            for (let i = 0; i < t.children.length; i++) {
                ChartSpec.addLottieMarkLayers(t.children[i]);
            }
        }

    }

    // static getMarkBBox(svg) {
    //     let markBoundingRects = new Map();
    //     let marks = svg.querySelectorAll('[id^="mark"]');
    //     if (marks.length > 0) {
    //         [].forEach.call(marks, function (m) {
    //             if (m.tagName !== 'text') {
    //                 markBoundingRects.set(m.getAttribute('id'), m.getBBox());
    //             } else {//text tag, the bounding box coords is the bottom left corner
    //                 let bBox = m.getBBox();
    //                 bBox.y -= bBox.height;
    //                 bBox.width += 10;
    //                 markBoundingRects.set(m.getAttribute('id'), bBox);
    //             }
    //         });
    //     }
    //     return markBoundingRects;
    // }

    // static processAnimateChart(chartStr, bBoxes) {
    //     let tmpDiv = document.createElement('div');
    //     tmpDiv.innerHTML = chartStr;
    //     let aniSvg = tmpDiv.children[0];

    //     aniSvg.setAttribute('id', 'visAnimation');
    //     aniSvg.querySelector('#chartContent').setAttribute('id', 'aniChartContent');
    //     let aniMarks = aniSvg.querySelectorAll('[id^="mark"]');
    //     if (aniMarks.length > 0) {
    //         [].forEach.call(aniMarks, function (am) {
    //             let markId = am.getAttribute('id');
    //             let idIndex = markId.substring(4);
    //             am.setAttribute('id', 'ani' + markId);

    //             //create corresponding mask
    //             let mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    //             mask.setAttributeNS(null, 'id', 'animaskmark' + idIndex);
    //             let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //             rect.setAttributeNS(null, 'id', 'animaskBgmark' + idIndex);
    //             rect.setAttributeNS(null, 'x', bBoxes.get(markId).x - 1);
    //             rect.setAttributeNS(null, 'y', bBoxes.get(markId).y - 1);
    //             rect.setAttributeNS(null, 'width', bBoxes.get(markId).width + 2);
    //             rect.setAttributeNS(null, 'height', bBoxes.get(markId).height + 2);
    //             rect.setAttributeNS(null, 'fill', '#fff');
    //             mask.appendChild(rect);

    //             let rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    //             rect2.setAttributeNS(null, 'x', -10000);
    //             rect2.setAttributeNS(null, 'y', -10000);
    //             rect2.setAttributeNS(null, 'width', 20000);
    //             rect2.setAttributeNS(null, 'height', 20000);
    //             rect2.setAttributeNS(null, 'fill', '#fff');
    //             mask.appendChild(rect2);

    //             aniSvg.appendChild(mask);
    //             am.setAttribute('mask', 'url(#animaskmark' + idIndex + ')');
    //         });
    //     }
    //     return aniSvg;
    // }
}

ChartSpec.charts = [];
ChartSpec.changedAttrs = [];
ChartSpec.viewport = new Viewport();
ChartSpec.dataTrans = new Map();
ChartSpec.markDoms = new Map();

export default ChartSpec;