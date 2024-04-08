Array.prototype.square = function() {
    return this.map(x => x * x);
};

Array.prototype.cube = function() {
    return this.map(x => x * x * x);
}

Array.prototype.average = function() {
    return this.reduce((acc, el) => acc + el, 0) / this.length;
}

Array.prototype.sum = function() {
    return this.reduce((acc, el) => acc + el, 0);
}

Array.prototype.even = function() {
    return this.filter(el => el % 2 === 0);
}

Array.prototype.odd = function() {
    return this.filter(el => el % 2 !== 0);
}