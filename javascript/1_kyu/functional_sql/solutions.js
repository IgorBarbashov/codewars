class Query {
    constructor() {
        this._wasCalled = [];
        this._select = null;
        this._from = [];
        this._where = [];
        this._orderBy = null;
        this._groupBy = [];
        this._having = [];
    }

    _isWasCalled(method) {
        if (this._wasCalled.includes(method)) {
            throw new Error(`Duplicate ${method}`);
        } else {
            this._wasCalled.push(method);
        }
    }

    select(thunk = null) {
        this._isWasCalled("SELECT");
        this._select = thunk;
        return this;
    }

    from(...collections) {
        this._isWasCalled("FROM");
        this._from = collections;
        return this;
    }

    where(...predicates) {
        this._where.push(predicates);
        return this;
    }

    orderBy(comparator = () => 0) {
        this._isWasCalled("ORDERBY");
        this._orderBy = comparator;
        return this;
    }

    groupBy(...conditions) {
        this._isWasCalled("GROUPBY");
        this._groupBy = conditions;
        return this;
    }

    having(...predicates) {
        this._having.push(predicates);
        return this;
    }

    execute() {
        const isJoin = this._from.length > 1;
        const filteredCollections = [];
        const foundIndexesInCompareCol = new Set();
        this._from.forEach((targetCol, i) => {
            const targetResult = [];
            let targetColForCompare = [...targetCol];
            this._from.forEach((compareCol, j) => {
                if (isJoin && j <= i) {
                    return;
                }
                const foundIndexesInTargetCol = [];
                targetColForCompare.forEach((targetEl, targetElIndex) => {
                    const compareResult = compareCol.filter(
                        (compareEl, compareElIndex) => {
                            if (this._where.length === 0) {
                                if (isJoin) {
                                    targetResult.push([targetEl, compareEl]);
                                }
                                foundIndexesInCompareCol.add(compareElIndex);
                                return true;
                            }
                            const predicatesForAND = this._where.map(predicat => {
                                if (predicat.length === 0) {
                                    return true;
                                }
                                const predicatesForOR = predicat.map(condition => {
                                    return isJoin
                                        ? condition([targetEl, compareEl])
                                        : condition(targetEl);
                                });
                                return predicatesForOR.some(el => el);
                            });
                            const predicatesResult = predicatesForAND.every(el => el);
                            if (predicatesResult) {
                                if (isJoin) {
                                    targetResult.push([targetEl, compareEl]);
                                }
                                foundIndexesInCompareCol.add(compareElIndex);
                            }
                            return predicatesResult;
                        }
                    );
                    if (!isJoin && compareResult.length > 0) {
                        targetResult.push(targetEl);
                        foundIndexesInTargetCol.push(targetElIndex);
                    }
                });
                targetColForCompare = targetColForCompare.filter(
                    i => !foundIndexesInTargetCol.includes(i)
                );
            });
            if (isJoin) {
                filteredCollections.push(...targetResult);
            } else {
                filteredCollections.push(targetResult);
            }
        });

        const grouping = (col, cons) => {
            const con = cons[0];
            if (!con) {
                return col;
            }
            const srpeadCons = cons.slice(1);
            const res = {};
            const keys = col.reduce((acc, el) => {
                const key = con(el);
                if (res.hasOwnProperty(key)) {
                    res[key].push(el);
                    return acc;
                } else {
                    res[key] = [el];
                    return [...acc, key];
                }
            }, []);
            return keys.reduce((acc, key) => {
                if (srpeadCons.length > 0) {
                    return [...acc, [key, grouping(res[key], srpeadCons)]];
                } else {
                    return [...acc, [key, res[key]]];
                }
            }, []);
        };
        const groupedCollection = isJoin
            ? filteredCollections.map(el => grouping(el, this._groupBy) || [])
            : grouping(filteredCollections[0], this._groupBy) || [];

        const isHavingCollection = groupedCollection.filter(el => {
            const predicatesForAND = this._having.map(predicat => {
                if (predicat.length === 0) {
                    return true;
                }
                const predicatesForOR = predicat.map(condition => {
                    return condition(el);
                });
                return predicatesForOR.some(el => el);
            });
            return predicatesForAND.every(el => el);
        });

        const isHavingCollectionForMap = isJoin
            ? isHavingCollection
            : isHavingCollection;

        const selectedCollection = isHavingCollectionForMap
            ? this._select === null
                ? isHavingCollection
                : isHavingCollectionForMap.map(el => this._select(el))
            : [];

        const orderedCollection = this._orderBy
            ? selectedCollection.sort(this._orderBy)
            : selectedCollection;

        return orderedCollection;
    }
}

var query = function() {
    return new Query();
};
