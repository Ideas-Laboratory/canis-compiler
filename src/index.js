import TimingSpec from './TimingSpec';
import Animation from './AnimationSpec';
import Canis from './Canis';

window.canis = {
    canisObj: {},
    frameRate: TimingSpec.FRAME_RATE,
    duration: () => {
        return Animation.wholeEndTime;
    },
    renderSpec: (spec, callback) => {
        if (Object.keys(canis.canisObj).length === 0) {
            canis.canisObj = new Canis();
        }
        return canis.canisObj.init(spec).then(() => {
            return canis.canisObj.render(callback);
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