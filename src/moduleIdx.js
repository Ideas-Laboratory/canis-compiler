import TimingSpec from './TimingSpec';
import Animation from './AnimationSpec';
import ActionSpec from './ActionSpec';
import CanisSpec from './CanisSpec';
import ChartSpec from './ChartSpec';

export default class Canis {
    constructor() {
        this.canisObj = {};
        this.frameRate = TimingSpec.FRAME_RATE;
    }

    duration() {
        return Animation.wholeEndTime;
    }

    renderSpec(spec, callback) {
        if (Object.keys(this.canisObj).length === 0) {
            this.canisObj = new CanisSpec();
        }
        return this.canisObj.init(spec).then(() => {
            console.log('finsh init');
            return this.canisObj.render(callback);
        })
    }

    reset() {
        Animation.resetAll();
    }

    exportJSON() {
        return CanisSpec.lottieJSON;
    }

    test() {
        console.log('this is a test! ');
    }
}

export { ActionSpec, TimingSpec, ChartSpec, Animation}

// module.exports = Canis;

// module.exports = function(){
//     console.log('this is testing !');
// }