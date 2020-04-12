class FacetSpec {
    constructor(type, views) {
        this._type;
        this._views;
        this.views = views;
        this.type = type;
    }

    set type(type) {
        if (typeof type !== 'undefined') {
            if (Object.keys(FacetSpec.facetType).includes(type)) {
                this._type = type;
            } else {
                console.warn('the facet type has to be one of "row" or "column", setting to default value "column".')
                this._type = FacetSpec.facetType.col;
            }
        }
    }

    get type() {
        return this._type;
    }

    set views(views) {
        if (typeof views !== 'undefined') {
            //translate "range" to "frames"
            let frameViews = views.map(view => {
                if (typeof view.range !== 'undefined') {
                    //check range 
                    let regend = new RegExp("\\d+$"); 
                    let rangeStartName = view.range[0].replace(regend, ''),
                        rangeEndName = view.range[1].replace(regend, ''),
                        rangeStart = view.range[0].match(regend),
                        rangeEnd = view.range[1].match(regend);
                    if (rangeStartName === rangeEndName) {
                        view.frames = [];
                        for (let i = rangeStart; i <= rangeEnd; i++) {
                            view.frames.push(rangeStartName + i);
                        }
                    } else {
                        view.frames = [view.range[0], view.range[1]];
                        console.warn('range start and end mismatch');
                    }
                }
                return view;
            })

            //find the max number of charts in views
            let maxLen = 0;
            for (let i = 0; i < frameViews.length; i++) {
                if (frameViews[i].frames.length > maxLen) {
                    maxLen = frameViews[i].frames.length;
                }
            }
            for (let i = 0; i < frameViews.length; i++) {
                if (frameViews[i].frames.length < maxLen) {
                    let lastItem = frameViews[i].frames[frameViews[i].frames.length - 1];
                    let numDiff = maxLen - frameViews[i].frames.length;
                    while (numDiff > 0) {
                        frameViews[i].frames.push(lastItem);
                        numDiff--;
                    }
                }
            }
            this._views = frameViews;
        }
    }

    get views() {
        return this._views;
    }
}

FacetSpec.facetType = {
    row: 'row',
    col: 'column'
}

export default FacetSpec;