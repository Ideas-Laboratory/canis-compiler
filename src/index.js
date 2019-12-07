let TimingSpec = require('./TimingSpec.js');
let Animation = require('./AnimationSpec.js');
let Canis = require('./Canis.js');
let Renderer = require('./AniRenderer.js');

window.canis = {
    frameRate: TimingSpec.FRAME_RATE,
    duration: () => {
        return Animation.wholeEndTime;
    },
    renderSpec: (spec, callback) => {
        let canisObj = new Canis();
        return canisObj.init(spec).then(()=>{
            return canisObj.render(callback);
        })
    },
    reset: function () {
        Renderer.resetCover();
        Animation.resetAll();
    },
    exportJSON: function () {
        return Canis.lottieJSON;
    },
    test: function (spec) {
        console.log('this is a test! ', spec);
    }
}