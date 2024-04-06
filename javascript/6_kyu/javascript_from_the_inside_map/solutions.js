Array.prototype.map = function(cb, _this) {
    const newArr = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            newArr[i] = cb.call(_this, this[i], i, this);
        }
    }

    return newArr;
};