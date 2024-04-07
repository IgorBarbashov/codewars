Array.prototype.filter = function (cb, _this) {
    const length = this.length;
    const res = new Array();

    for (let i = 0; i < length; i++) {
        if (i in this && cb.call(_this, this[i], i, this)) {
            res.push(this[i]);
        }
    }

    return res;
};