const createIterator = (array) => {
    let _index = 0;

    return {
        next: () => ({
            done: _index === array.length,
            value: _index === array.length ? undefined : array[_index++]
        }),
        get index() {
            return _index;
        }
    }
};