Array.prototype.filter = function(func) {
    return this.reduce((acc, el) => (func(el) ? [...acc, el] : acc), []);
};
