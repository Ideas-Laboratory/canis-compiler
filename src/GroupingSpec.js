import TimingSpec from './TimingSpec.js';

class GroupingSpec extends TimingSpec {
    constructor() {
        super();
        this._groupBy = 'id'; //optional
        this._reference = TimingSpec.timingRef.previousStart;
        this._delay = 0;
        this.definedById = false;
        this.sort = {};
        // this.root = {};
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
        if (groupingJson.groupBy === 'id') {
            this.grouping.definedById = true;
        }
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
            this.grouping.definedById = false;
        }
    }

    arrangeOrder(markIds, domMarks, root) {
        GroupingSpec.frames.clear();
        GroupingSpec.framesMark.clear();
        if (Object.keys(root).length === 0) {// generate new tree
            root.groupRef = 'root';
            root.id = GroupingSpec.nodeId;
            GroupingSpec.frames.set(GroupingSpec.nodeId, true);
            GroupingSpec.nodeId++;
            root.children = [];
            root.marks = markIds;
            root.timingRef = TimingSpec.timingRef.previousStart;
            root.delay = 0;
            this.generateTree(root, domMarks);
        } else {// update the current tree
            this.updateTree(root, domMarks);
        }
        console.log('generated tree: ', root);
        let orderedMarks = this.getMarkOrder(root);
        return orderedMarks;
    }

    updateTree(t, domMarks) {
        if (typeof t !== 'undefined') {
            const groupByRef = this.groupBy;
            const timingRef = this.reference;
            const delay = this.delay;
            if (typeof this.grouping !== 'undefined') {
                let sameGrouping = false;
                if (typeof t.children[0] !== 'undefined') {
                    sameGrouping = t.children[0].groupRef === groupByRef;
                }

                console.log('whether this is same grouping: ', sameGrouping);
                if (sameGrouping) {
                    let nodesThisLevel = new Map();
                    for (let i = 0, tmpNode; i < t.children.length | (tmpNode = t.children[i]); i++) {
                        this.grouping.updateTree(tmpNode, domMarks);
                        nodesThisLevel.set(tmpNode.refValue, tmpNode);
                        tmpNode.timingRef = timingRef;
                        tmpNode.delay = delay;
                    }
                    //re-sort the children of t
                    this.sortNodes(this.sort, t, nodesThisLevel, domMarks);
                } else {
                    t.children = [];
                    this.generateTree(t, domMarks);
                }
            } else if (typeof this.grouping === 'undefined' && t.children.length > 0) {//no more grouping is defined, but the ori tree has deeper hierarchy
                t.children = [];
            }
        }
    }

    generateTree(t, domMarks) {
        const groupByRef = this.groupBy;
        const timingRef = this.reference;
        const delay = this.delay;
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
                tmpObj.id = GroupingSpec.nodeId;
                GroupingSpec.nodeId++;
                tmpObj.groupRef = groupByRef;
                if (tmpObj.groupRef === 'id') {
                    tmpObj.definedById = this.definedById;
                }
                tmpObj.refValue = refValue;
                tmpObj.timingRef = timingRef;
                tmpObj.delay = delay;
                tmpObj.children = [];
                tmpObj.marks = [markId];
                nodesThisLevel.set(refValue, tmpObj);
            }
        }
        //order nodes of this level according to the 'sort' spec
        this.sortNodes(this.sort, t, nodesThisLevel, domMarks);
        console.log('nodes this level: ', nodesThisLevel);
        if (typeof this.grouping !== 'undefined') {
            for (let i = 0, tmpNode; i < t.children.length | (tmpNode = t.children[i]); i++) {
                this.grouping.generateTree(tmpNode, domMarks);
            }
        }
    }

    sortNodes(specSort, t, nodesThisLevel, domMarks) {
        const that = this;
        t.children = [];
        switch (typeof specSort.order) {
            case 'object'://Array
                let appendNum = 0;
                for (let i = 0, refValue; i < specSort.order.length | (refValue = specSort.order[i]); i++) {
                    if (typeof nodesThisLevel.get(refValue) !== 'undefined') {
                        t.children.push(nodesThisLevel.get(refValue));
                        that.appendFrame(t.id, nodesThisLevel.get(refValue).id, appendNum, nodesThisLevel.size);
                        appendNum++;
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
                if (typeof specSort.field !== 'undefined' && hasSingleMark) {
                    let orderRef = specSort.field;
                    let nodesThisLevelArr = [...nodesThisLevel];
                    let orderType = specSort.order;
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
                        that.appendFrame(t.id, tmpNode.id, i, nodesThisLevelArr.length);
                        t.children.push(tmpNode[1]);
                    }
                } else {
                    let nodesThisLevelArr = [...nodesThisLevel];
                    if (specSort.order === GroupingSpec.orderTypes.ascending) {
                        nodesThisLevelArr.sort(function (a, b) {
                            if (a[0] >= b[0]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })
                    } else if (specSort.order === GroupingSpec.orderTypes.descending) {
                        nodesThisLevelArr.sort(function (a, b) {
                            if (b[0] >= a[0]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })
                    } else if (specSort.order === GroupingSpec.orderTypes.random) {
                        nodesThisLevelArr.sort(function (a, b) {
                            return Math.random() >= 0.5 ? 1 : -1;
                        })
                    }
                    for (let i = 0, tmpNode; i < nodesThisLevelArr.length | (tmpNode = nodesThisLevelArr[i]); i++) {
                        that.appendFrame(t.id, tmpNode.id, i, nodesThisLevelArr.length);
                        t.children.push(tmpNode[1]);
                    }
                }

                break;
            default:
                let count = 0;
                nodesThisLevel.forEach(function (tmpNode, ref) {
                    t.children.push(tmpNode);
                    that.appendFrame(t.id, tmpNode.id, count, nodesThisLevel.size);
                    count++;
                })
        }
    }

    appendFrame(parentId, nodeId, nodeIdx, nodesNum) {
        if (GroupingSpec.frames.get(parentId) && (nodeIdx === 0 || nodeIdx === nodesNum - 1)) {
            GroupingSpec.frames.set(nodeId, true);
        } else {
            GroupingSpec.frames.set(nodeId, false);
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
     * calculate the time of each mark based on the grouping structure
     * @param {*} t 
     * @param {*} lastGroupStart 
     * @param {*} lastGroupEnd 
     * @param {*} markAni 
     */
    calTimeWithTree(t, lastGroupStart, lastGroupEnd, markAni) {
        if (t.children.length > 0) {
            for (let i = 0; i < t.children.length; i++) {
                if (i > 0) {
                    this.calTimeWithTree(t.children[i], t.children[i - 1].start, t.children[i - 1].end, markAni);
                } else {
                    this.calTimeWithTree(t.children[i], -1, -1, markAni);
                }
            }
        }
        switch (t.timingRef) {
            case TimingSpec.timingRef.previousStart:
                t.start = lastGroupStart + t.delay;
                break;
            case TimingSpec.timingRef.previousEnd:
                t.start = lastGroupEnd + t.delay;
                break;
            case TimingSpec.timingRef.absolute:
                t.start = t.delay;
                break;
            default:
                t.start = lastGroupStart + t.delay;
        }
        if (lastGroupStart === -1) {
            t.start = 0;
        }
        t.end = 0;
        for (let i = 0; i < t.marks.length; i++) {
            markAni.get(t.marks[i]).startTime += t.start;
            if (markAni.get(t.marks[i]).startTime + markAni.get(t.marks[i]).totalDuration > t.end) {
                t.end = markAni.get(t.marks[i]).startTime + markAni.get(t.marks[i]).totalDuration;
                console.log('t end: ', t.end);
            }
        }

        if (t.marks.length === 1) {
            const tmpMarkId = t.marks[0];
            if (GroupingSpec.frames.get(t.id)) {
                GroupingSpec.framesMark.set(tmpMarkId, true);
            } else {
                if (typeof GroupingSpec.framesMark.get(tmpMarkId) === 'undefined') {
                    GroupingSpec.framesMark.set(tmpMarkId, false);
                }
            }
        }
        // console.log('*************');
        // console.log(t.id, t.marks, GroupingSpec.frames.get(t.id));
        // if (GroupingSpec.frames.get(t.id)) {//this is a keyframe
        //     console.log('this is a keyframe', t.end);
        //     GroupingSpec.frameTime.set(t.end, true);
        // } else {
        //     console.log('this is not a keyframe', t.end);
        //     if (typeof GroupingSpec.frameTime.get(t.end) === 'undefined') {
        //         console.log('setting to false');
        //         GroupingSpec.frameTime.set(t.end, false);
        //     }
        // }

    }
}

GroupingSpec.orderTypes = {
    ascending: 'ascending',
    descending: 'descending',
    random: 'random'
}

GroupingSpec.nodeId = 0;
GroupingSpec.frames = new Map();//key: nodeId, value: whether this is a keyframe
GroupingSpec.framesMark = new Map();//keyframe: markid, value: whether this time point is a keyframe


export default GroupingSpec;