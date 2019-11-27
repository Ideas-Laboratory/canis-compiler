let TimingSpec = require('./TimingSpec.js');
let Animation = require('./AnimationSpec.js');
let Canis = require('./Canis.js');
let Renderer = require('./AniRenderer.js');

window.canis = {
    frameRate: TimingSpec.FRAME_RATE,
    duration: () => {
        return Animation.wholeEndTime;
    },
    loadSpec: (url, callback) => {
        Canis.loadSpec(url, callback);
    },
    renderSpec: (spec) => {
        let canisObj = new Canis();
        canisObj.init(spec);
        return canisObj.render();
    },
    play: () => {
        Renderer.play();
    },
    renderFrame: (time) => {//render frame of a specific timepoint
        return Renderer.renderFrame(time);
    },
    reset: function () {
        Renderer.resetCover();
        Animation.resetAll();
    },
    test: function(spec) {
        console.log('this is a test! ', spec);
    }
}