import TimingSpec from './TimingSpec';
import Animation from './AnimationSpec';
import Canis from './Canis';

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
        Animation.resetAll();
    },
    exportJSON: function () {
        return Canis.lottieJSON;
    },
    test: function (spec) {
        console.log('this is a test! ', spec);
    }
}