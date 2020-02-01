import TimingSpec from './TimingSpec';
import Animation from './AnimationSpec';
import CanisSpec from './CanisSpec';

window.canis = {
    canisObj: {},
    frameRate: TimingSpec.FRAME_RATE,
    duration: () => {
        return Animation.wholeEndTime;
    },
    renderSpec: (spec, status, callback) => {
        status.info = { type: 'clear', msg: 'rendering...' };
        if (Object.keys(canis.canisObj).length === 0) {
            canis.canisObj = new CanisSpec();
        }
        return canis.canisObj.init(spec, status).then(() => {
            if (!canis.canisObj.hasError) {
                return canis.canisObj.render(callback, status);
            }
        })
    },
    reset: function () {
        Animation.resetAll();
    },
    exportJSON: function () {
        return CanisSpec.lottieJSON;
    },
    test: function (spec) {
        console.log('this is a test! ', spec);
    }
}