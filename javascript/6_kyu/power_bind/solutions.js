Function.prototype.bind = function (ctx, ...bindProps) {
    const _fn = this._fn || this;
    const res = (...fnProps) => _fn.apply(ctx, [...bindProps, fnProps]);
    res._fn = _fn;
    return res;
};