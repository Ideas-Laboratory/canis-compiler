import TimingSpec from './TimingSpec.js';
import Animation from './AnimationSpec.js';
import { Util } from './util/Util.js';

class Renderer {
    constructor() { }

    /**
     * get the corresponding frame of current time from Animation.frames
     * and update the dom attrs according to the recorded attrs status in that frame
     * @param {number} : time in ms
     */
    static renderFrame(ctime) {
        let frame = Animation.renderFrame(ctime);
        if (typeof frame === 'undefined') {
            return false;
        }
        for (let i = 0, markStatus; i < frame.length | (markStatus = frame[i]); i++) {
            markStatus[1].forEach(function (singleStatus, attrName) {
                let aniId = '';
                if (singleStatus.type === 'mark') {
                    aniId = 'ani' + markStatus[0];
                    switch (singleStatus.attrName) {
                        case 'textContent':
                            if (Util.checkHTML(singleStatus.value)) {
                                let tmpDom = Util.strToDomNode(singleStatus.value);
                                document.getElementById(aniId).appendChild(tmpDom);
                            } else {
                                document.getElementById(aniId).innerHTML = singleStatus.value;
                                document.getElementById(aniId).textContent = singleStatus.value;
                            }
                            break;
                        case 'stroke-dashoffset':
                            document.getElementById(aniId).setAttributeNS(null, 'stroke-dasharray', document.getElementById(aniId).getTotalLength());
                            document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                            break;
                        case 'x':
                        case 'y':
                            document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                            if (document.getElementById('animaskCover' + markStatus[0])) {
                                if (singleStatus.attrName === 'y' && document.getElementById(markStatus[0]).tagName === 'text') {
                                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value - parseFloat(document.getElementById('animaskBg' + markStatus[0]).getAttributeNS(null, 'height')));
                                } else {
                                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                                }
                            }
                            document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                            break;
                        default:
                            document.getElementById(aniId).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                    }
                    //change animaskBgmark with the mark
                    let aniMarkBgId = 'animaskBg' + markStatus[0],
                        currentAniMarkBBox = document.getElementById(aniId).getBBox();
                    document.getElementById(aniMarkBgId).setAttributeNS(null, 'x', currentAniMarkBBox.x - 1);
                    document.getElementById(aniMarkBgId).setAttributeNS(null, 'y', currentAniMarkBBox.y - 1);
                    document.getElementById(aniMarkBgId).setAttributeNS(null, 'width', currentAniMarkBBox.width + 2);
                    document.getElementById(aniMarkBgId).setAttributeNS(null, 'height', currentAniMarkBBox.height + 2);
                } else if (singleStatus.type === 'mask') {
                    aniId = 'animask' + markStatus[0];
                    /*
                     *1st. check whether the mask is added 
                     *2nd. check whether the mask is the right shape
                     *3rd. set the attributes of the mask
                     */
                    let testAniMCover = document.querySelectorAll('#' + aniId + ' [id^="animaskCover"]');
                    switch (singleStatus.animationType) {
                        case 'fade':
                        case 'move':
                        case 'wipe':
                        case 'custom':
                            if (testAniMCover.length > 0) {//already has a mask cover
                                let aniMCover = document.getElementById('animaskCover' + markStatus[0]);
                                if (aniMCover.getAttribute('maskType') !== 'rect') {//current cover is not the right shape
                                    aniMCover.parentNode.removeChild(aniMCover);
                                    let rect = Renderer.generateMaskCover(Renderer.coverTypes.rect, markStatus[0], singleStatus.attrName, singleStatus.value);
                                    document.getElementById(aniId).appendChild(rect);
                                } else {
                                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                                }
                            } else {//don't have a mask cover yet
                                let rect = Renderer.generateMaskCover(Renderer.coverTypes.rect, markStatus[0], singleStatus.attrName, singleStatus.value);
                                document.getElementById(aniId).appendChild(rect);
                            }
                            break;
                        case 'circle':
                        case 'wheel':
                            let d = Util.arc(singleStatus.value.cx, singleStatus.value.cy, singleStatus.value.innerRadius, singleStatus.value.outterRadius - 6, singleStatus.value.startAngle, singleStatus.value.endAngle);
                            if (testAniMCover.length > 0) {//already has a mask cover
                                let aniMCover = document.getElementById('animaskCover' + markStatus[0]);
                                if (aniMCover.getAttribute('maskType') !== 'wedge') {//current cover is not the right shape
                                    aniMCover.parentNode.removeChild(aniMCover);
                                    let wedge = Renderer.generateMaskCover(Renderer.coverTypes.path, markStatus[0], 'd', d);
                                    document.getElementById(aniId).appendChild(wedge);
                                } else {
                                    document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, 'd', d);
                                }
                            } else {//don't have a mask cover yet
                                let wedge = Renderer.generateMaskCover(Renderer.coverTypes.path, markStatus[0], 'd', d);
                                document.getElementById(aniId).appendChild(wedge);
                            }
                            break;
                        case 'mistake':
                            if (testAniMCover.length > 0) {//already has a mask cover
                                document.getElementById('animaskCover' + markStatus[0]).setAttributeNS(null, singleStatus.attrName, singleStatus.value);
                            }
                            break;
                    }
                } else {
                    console.log('this status has no type');
                }
            })
        }
        return true;
    }

    static generateMaskCover(coverType, markId, updateAttrName, updateAttrValue) {
        let maskCover;
        switch (coverType) {
            case Renderer.coverTypes.rect:
                maskCover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                maskCover.setAttributeNS(null, 'maskType', 'rect');
                maskCover.setAttributeNS(null, 'x', document.getElementById('animaskBg' + markId).getAttribute('x'));
                maskCover.setAttributeNS(null, 'y', document.getElementById('animaskBg' + markId).getAttribute('y'));
                maskCover.setAttributeNS(null, 'width', document.getElementById('animaskBg' + markId).getAttribute('width'));
                maskCover.setAttributeNS(null, 'height', document.getElementById('animaskBg' + markId).getAttribute('height'));
                break;
            case Renderer.coverTypes.path:
                maskCover = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                maskCover.setAttributeNS(null, 'maskType', 'wedge');
                if (document.getElementById(markId).getAttribute('transform')) {
                    maskCover.setAttributeNS(null, 'tranform', document.getElementById(markId).getAttribute('transform'));
                }
                break;
        }
        maskCover.setAttributeNS(null, 'id', 'animaskCover' + markId);
        maskCover.setAttributeNS(null, 'fill', '#000');
        maskCover.setAttributeNS(null, 'stroke', '#000');
        maskCover.setAttributeNS(null, 'stroke-width', 4);
        if (updateAttrName !== 'stroke')
            maskCover.setAttributeNS(null, updateAttrName, updateAttrValue);
        return maskCover;
    }

    static resetCover() {
        let animaskCovers = document.querySelectorAll('[id^="animaskCover"]');
        if (animaskCovers.length > 0) {
            [].forEach.call(animaskCovers, (mc) => {
                mc.parentNode.removeChild(mc);
            })
        }
    }

    static play() {
        let time = 0;
        let animationInterval = setInterval(() => {
            //render this frame
            time = parseInt(time / (1000 / TimingSpec.FRAME_RATE)) * (1000 / TimingSpec.FRAME_RATE);
            let locatedFrame = this.renderFrame(time);

            time += 1000 / TimingSpec.FRAME_RATE;
            if (time > Animation.wholeEndTime || !locatedFrame) {
                clearInterval(animationInterval);
                animationInterval = 'undefined';
                time = 0;
            }
        }, 1000 / TimingSpec.FRAME_RATE);
    }
}

Renderer.coverTypes = {
    rect: Symbol(),
    path: Symbol()
};

export default Renderer;