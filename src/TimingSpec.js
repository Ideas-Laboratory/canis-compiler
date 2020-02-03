class TimingSpec {
    constructor() {
        this._offset = 0;//default offfset is 0
        this._reference = TimingSpec.timingRef.previousStart;//default offset reference is 'previous_start'
    }

    /***** getters and setters *****/
    set reference(offsetRef) {
        if (typeof offsetRef !== 'undefined') {
            let tmpOffsetRefStr = TimingSpec.transRef(offsetRef);
            if (Object.keys(TimingSpec.timingRef).includes(tmpOffsetRefStr)) {
                this._reference = offsetRef;
            } 
        }
    }

    get reference() {
        return this._reference;
    }

    set offset(ofst) {
        if (typeof ofst !== 'undefined') {
            if (typeof ofst === 'number') {
                this._offset = Math.floor(ofst / (1000 / TimingSpec.FRAME_RATE)) * (1000 / TimingSpec.FRAME_RATE);
            } else if (typeof ofst === 'object') {
                this._offset = ofst;
            }

        }
    }

    get offset() {
        return this._offset;
    }
    /***** end getters and setters *****/

    /**
     * add offset start time
     * @param {number} lastStart : start time of the last item
     * @param {number} lastEnd : end time of the last item
     * @param {number} allItemsStart : start time of all the items 
     * @param {Map} domMarks : key: markId, value: attrs
     */
    calOffsetTime(lastStart, lastEnd, allItemsStart = 0, domMarks = new Map()) {
        if (domMarks.size === 0) {//computing action offset time, return a number
            let itemStart = 0;
            switch (this.reference) {
                case TimingSpec.timingRef.previousStart:
                    itemStart = lastStart + this.offset - allItemsStart;
                    break;
                case TimingSpec.timingRef.previousEnd:
                    itemStart = lastEnd + this.offset - allItemsStart;
                    break;
                case TimingSpec.timingRef.absolute:
                    itemStart = this.offset + allItemsStart;
                    break;
                default:
                    itemStart = lastStart + this.offset - allItemsStart;
            }
            return itemStart;
        } else {//computing animation offset time, return a map
            let that = this;
            let itemsStart = new Map();

            //if the offset is an object, find the min value of the field in offset
            let minAttrValue = 1000000;
            if (typeof this.offset === 'object') {
                domMarks.forEach(function (attrs, markId) {
                    if (minAttrValue > parseFloat(attrs['data-datum'][that.offset.field])) {
                        minAttrValue = parseFloat(attrs['data-datum'][that.offset.field]);
                    }
                })
            }

            domMarks.forEach(function (attrs, markId) {
                let offsetValue = 0;
                //judge the type of offset: number or object
                if (typeof that.offset === 'number') {
                    offsetValue = that.offset;
                } else if (typeof that.offset === 'object') {
                    offsetValue = that.offset.minOffset * parseFloat(attrs['data-datum'][that.offset.field]) / minAttrValue;
                } else {
                    offsetValue = 0;
                }

                switch (that.reference) {
                    case TimingSpec.timingRef.previousStart:
                        itemsStart.set(markId, lastStart + offsetValue - allItemsStart);
                        break;
                    case TimingSpec.timingRef.previousEnd:
                        itemsStart.set(markId, lastEnd + offsetValue - allItemsStart);
                        break;
                    case TimingSpec.timingRef.absolute:
                        itemsStart.set(markId, offsetValue + allItemsStart);
                        break;
                    default:
                        itemsStart.set(markId, lastStart + offsetValue - allItemsStart);
                }
            })
            return itemsStart;
        }

    }

    static transRef(refStr){
        switch (refStr){
            case this.timingRef.previousStart:
                return 'previousStart';
            case this.timingRef.previousEnd:
                return 'previousEnd';
            case this.timingRef.absolute:
                return 'absolute';
        }
    }
}

TimingSpec.FRAME_RATE = 20;
TimingSpec.timingRef = {
    previousStart: 'start with previous',
    previousEnd: 'start after previous',
    absolute: 'absolute'
};

export default TimingSpec;