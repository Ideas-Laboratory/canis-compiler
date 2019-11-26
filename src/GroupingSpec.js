import TimingSpec from './TimingSpec.js';

class GroupingSpec extends TimingSpec {
    constructor() {
        super();
        this._groupBy = 'id'; //optional
        this._reference = TimingSpec.timingRef.previousStart;
        this._delay = 0;
        this.sort = class { //optional
            constructor() {
                this.field;
                this.order;
                this.expr;
            }
        }

        this.grouping;//optional, another GroupingSpec object indicating more groupings
    }

    /***** getters and setters *****/
    set groupBy(gb) {
        if (typeof gb !== 'undefined')
            this._groupBy = gb;
    }

    get groupBy() {
        return this._groupBy;
    }

    set reference(ref) {
        if (typeof ref !== 'undefined') {
            let tmpRefStr = TimingSpec.transRef(ref);
            if (Object.keys(TimingSpec.timingRef).includes(tmpRefStr)) {
                this._reference = ref;
            } else {
                alert('the \'reference\' of TimingSpec has to be one of \'previousStart\', \'previousEnd\' or \'absolute\'. ')
            }
        }
    }

    get reference() {
        return this._reference;
    }

    set delay(dly) {
        if (typeof dly !== 'undefined') {
            if (dly >= 1000 / TimingSpec.FRAME_RATE || dly === 0) {
                this._delay = dly;
            } else {
                this._delay = 1000 / TimingSpec.FRAME_RATE;
            }
        }
    }

    get delay() {
        return this._delay;
    }
    /***** end getters and setters *****/

    /**
     * init nested grouping and actions using json obj
     * @param {JSON obj} groupingJson 
     */
    initGrouping(groupingJson) {
        this.groupBy = groupingJson.groupBy;
        this.reference = groupingJson.reference;
        this.delay = groupingJson.delay;

        if (typeof groupingJson.sort !== 'undefined') {
            this.sort.field = groupingJson.sort.field;
            this.sort.order = groupingJson.sort.order;
            this.sort.expr = groupingJson.sort.expr;
        }

        if (typeof groupingJson.grouping !== 'undefined') {
            this.grouping = new GroupingSpec();
            this.grouping.initGrouping(groupingJson.grouping);
        } else if (typeof groupingJson.grouping === 'undefined' && groupingJson.groupBy !== 'id') {
            //didnot goruping to id, add extra grouping by id
            this.grouping = new GroupingSpec();
            this.grouping.groupBy = 'id';
        }
    }

    arrangeOrder(markIds, domMarks) {
        let root = {};
        root.groupRef = 'root';
        root.children = [];
        root.marks = markIds;
        this.generateTree(root, domMarks);

        let orderedMarks = this.getMarkOrder(root);
        return orderedMarks;
    }
    generateTree(t, domMarks) {
        let groupByRef = this.groupBy;

        let nodesThisLevel = new Map();
        for (let i = 0, markId; i < t.marks.length | (markId = t.marks[i]); i++) {
            let datum = domMarks.get(markId)['data-datum'];//datum stored in the tag
            let refValue;
            if (typeof domMarks.get(markId)[groupByRef] !== 'undefined') {
                refValue = domMarks.get(markId)[groupByRef];
            } else if (typeof domMarks.get(markId)[groupByRef] === 'undefined' && typeof datum[groupByRef] !== 'undefined') {
                refValue = datum[groupByRef];
            } else {
                console.log('error: grouping by an unknown attribute');
                return;
            }

            if (typeof nodesThisLevel.get(refValue) !== 'undefined') {
                nodesThisLevel.get(refValue).marks.push(markId);
            } else {
                let tmpObj = {};
                tmpObj.groupRef = groupByRef;
                tmpObj.refValue = refValue;
                tmpObj.children = [];
                tmpObj.marks = [markId];
                nodesThisLevel.set(refValue, tmpObj);
            }
        }

        //order nodes of this level according to the 'sort' spec
        switch (typeof this.sort.order) {
            case 'object'://Array
                for (let i = 0, refValue; i < this.sort.order.length | (refValue = this.sort.order[i]); i++) {
                    if (typeof nodesThisLevel.get(refValue) !== 'undefined') {
                        t.children.push(nodesThisLevel.get(refValue));
                    }
                }
                break;
            case 'string'://'ascending' | 'descending'
                //check whether have come to the lowest level
                let hasSingleMark = true;
                nodesThisLevel.forEach(function (value, ref) {
                    if (value.marks.length > 1) {
                        hasSingleMark = false;
                    }
                })

                //only take effect when a specific field is specified and are on the lowest level
                if (typeof this.sort.field !== 'undefined' && hasSingleMark) {
                    let orderRef = this.sort.field;
                    let nodesThisLevelArr = [...nodesThisLevel];
                    let orderType = this.sort.order;
                    nodesThisLevelArr.sort(function (a, b) {
                        let markId1 = a[1].marks[0];
                        let markId2 = b[1].marks[0];
                        let orderRefValue1 = '', orderRefValue2 = '';
                        let datum1 = domMarks.get(markId1)['data-datum'];
                        let datum2 = domMarks.get(markId2)['data-datum'];
                        if (typeof domMarks.get(markId1)[orderRef] !== 'undefined' && domMarks.get(markId2)[orderRef] !== 'undefined') {
                            orderRefValue1 = domMarks.get(markId1)[orderRef];
                            orderRefValue2 = domMarks.get(markId2)[orderRef];
                        } else if (typeof domMarks.get(markId1)[orderRef] === 'undefined'
                            && typeof datum1[orderRef] !== 'undefined'
                            && typeof domMarks.get(markId2)[orderRef] === 'undefined'
                            && typeof datum2[orderRef] !== 'undefined') {
                            orderRefValue1 = datum1[orderRef];
                            orderRefValue2 = datum2[orderRef];
                        }

                        if (!isNaN(parseFloat(orderRefValue1))) {
                            orderRefValue1 = parseFloat(orderRefValue1);
                        }
                        if (!isNaN(parseFloat(orderRefValue2))) {
                            orderRefValue2 = parseFloat(orderRefValue2);
                        }

                        if (orderType === GroupingSpec.orderTypes.ascending) {
                            if (orderRefValue1 >= orderRefValue2) {
                                return 1;
                            } else {
                                return -1;
                            }
                        } else if (orderType === GroupingSpec.orderTypes.descending) {
                            if (orderRefValue2 >= orderRefValue1) {
                                return 1;
                            } else {
                                return -1;
                            }
                        } else if (orderType === GroupingSpec.orderTypes.random) {
                            return Math.random() >= 0.5 ? 1 : -1;
                        }

                    })
                    for (let i = 0, tmpNode; i < nodesThisLevelArr.length | (tmpNode = nodesThisLevelArr[i]); i++) {
                        t.children.push(tmpNode[1]);
                    }
                } else {
                    let nodesThisLevelArr = [...nodesThisLevel];
                    if (this.sort.order === GroupingSpec.orderTypes.ascending) {
                        nodesThisLevelArr.sort(function (a, b) {
                            if (a[0] >= b[0]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })
                    } else if (this.sort.order === GroupingSpec.orderTypes.descending) {
                        nodesThisLevelArr.sort(function (a, b) {
                            if (b[0] >= a[0]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })
                    } else if (this.sort.order === GroupingSpec.orderTypes.random) {
                        nodesThisLevelArr.sort(function (a, b) {
                            return Math.random() >= 0.5 ? 1 : -1;
                        })
                    }
                    for (let i = 0, tmpNode; i < nodesThisLevelArr.length | (tmpNode = nodesThisLevelArr[i]); i++) {
                        t.children.push(tmpNode[1]);
                    }
                }

                break;
            default:
                nodesThisLevel.forEach(function (tmpNode, ref) {
                    t.children.push(tmpNode);
                })
        }

        if (typeof this.grouping !== 'undefined') {
            for (let i = 0, tmpNode; i < t.children.length | (tmpNode = t.children[i]); i++) {
                this.grouping.generateTree(tmpNode, domMarks);
            }
        }
    }

    /**
     * get the animation order of marks
     * @param {Object} t
     * @param {Array} arr 
     */
    getMarkOrder(t) {
        let orderedMarks = [];
        if (t != null) {
            let queue = [];
            queue.unshift(t);
            while (queue.length != 0) {
                let item = queue.shift();
                let children = item.children;
                if (children.length <= 0) {
                    orderedMarks = [...orderedMarks, ...item.marks];
                } else {
                    for (let i = 0; i < children.length; i++)
                        queue.push(children[i]);
                }

            }
        }
        return orderedMarks;
    }

    /**
     * from bottom up, calculate the time specs of marks recursively
     * @param {GroupingSpec} groupingSpec 
     * @param {Map} markAni : key:markId, value:time & action specs of the corresponding mark
     * @param {Map} groupByM : key:markId, value:group reference
     */
    calTimeInGrouping(markAni, domMarks) {
        let groupByRef = this.groupBy;

        let groupByMap = new Map();//record the result of groupBy in this level. key:markId, value:group reference
        markAni.forEach(function (ani, markId) {
            let datum = domMarks.get(markId)['data-datum'];//datum stored in the tag
            if (typeof domMarks.get(markId)[groupByRef] !== 'undefined') {
                groupByMap.set(markId, domMarks.get(markId)[groupByRef]);
            } else if (typeof domMarks.get(markId)[groupByRef] === 'undefined' && typeof datum[groupByRef] !== 'undefined') {
                groupByMap.set(markId, datum[groupByRef]);
            } else {
                console.log('error: grouping by an unknown attribute');
            }
        })
        if (typeof this.grouping !== 'undefined') {
            this.grouping.calTimeInGrouping(markAni, domMarks);

            //update time with upper grouping specs
            let groupByArr = [...groupByMap];
            let currentGroupRef = '';
            let firstItemLastGroup, lastItemLastGroup;
            let currentGroup = new Array();//record marks belong to current group
            let lastGroup = new Map();
            for (let i = 0; i < groupByArr.length; i++) {
                let markId = groupByArr[i][0];
                let groupRef = groupByArr[i][1];
                if (groupRef !== currentGroupRef) {//come to the end of one group
                    this.updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni);
                    firstItemLastGroup = currentGroup[0];
                    lastItemLastGroup = currentGroup[currentGroup.length - 1];
                    lastGroup = currentGroup;
                    currentGroup = [];
                    currentGroupRef = groupRef;
                }
                currentGroup.push(markId);
            }

            //deal with the last group
            this.updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni);
        } else {//has come to the lowest level
            let markAniArr = [...markAni.entries()];
            markAniArr[0][1].startTime = 0;
            for (let i = 1; i < markAniArr.length; i++) {
                let tmpStart,
                    previousStartTime = markAniArr[i - 1][1].startTime,
                    previousEndTime = previousStartTime + markAniArr[i - 1][1].totalDuration;
                switch (this.reference) {
                    case TimingSpec.timingRef.previousStart:
                        tmpStart = previousStartTime + this.delay;
                        break;
                    case TimingSpec.timingRef.previousEnd:
                        tmpStart = previousEndTime + this.delay;
                        break;
                    case TimingSpec.timingRef.absolute:
                        tmpStart = this.delay;
                        break;
                    default:
                        tmpStart = previousStartTime + this.delay;
                }
                markAniArr[i][1].startTime = tmpStart;
                markAni.set(markAniArr[i][0], markAniArr[i][1]);
            }
        }
    }

    updateGroupingTime(firstItemLastGroup, lastItemLastGroup, lastGroup, currentGroup, markAni) {
        let maxDuration = -10000, maxDurationItemLastGroup;
        for (let i = 0, itemLastGroup; i < lastGroup.length | (itemLastGroup = lastGroup[i]); i++) {
            if (markAni.get(itemLastGroup).startTime + markAni.get(itemLastGroup).totalDuration > maxDuration) {
                maxDuration = markAni.get(itemLastGroup).startTime + markAni.get(itemLastGroup).totalDuration;
                maxDurationItemLastGroup = itemLastGroup;
            }
        }


        //update time acording to delay from the second group
        if (typeof firstItemLastGroup !== 'undefined' && typeof maxDurationItemLastGroup !== 'undefined') {
            let timeDiff = 0;
            switch (this.reference) {
                case TimingSpec.timingRef.previousStart:
                    timeDiff = markAni.get(firstItemLastGroup).startTime - markAni.get(currentGroup[0]).startTime + this.delay;
                    break;
                case TimingSpec.timingRef.previousEnd:
                    timeDiff = markAni.get(maxDurationItemLastGroup).startTime + markAni.get(maxDurationItemLastGroup).totalDuration - markAni.get(currentGroup[0]).startTime + this.delay;
                    break;
                case TimingSpec.timingRef.absolute:
                    timeDiff = this.delay - markAni.get(currentGroup[0]).startTime;
                    break;
            }
            for (let i = 0, markId; i < currentGroup.length | (markId = currentGroup[i]); i++) {
                markAni.get(markId).startTime += timeDiff;
            }
        }
    }
}

GroupingSpec.orderTypes = {
    ascending: 'ascending',
    descending: 'descending',
    random: 'random'
}

export default GroupingSpec;