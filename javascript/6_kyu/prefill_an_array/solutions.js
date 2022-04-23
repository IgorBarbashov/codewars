function prefill(n, v) {
    if (n === 0) {
        return [];
    }

    const parsedN = ('' + n).match(/\./) === null ? parseInt(n, 10) : NaN;
    if ( isNaN(parsedN) || parsedN < 0 ) {
        throw new TypeError(`${n} is invalid`);
    }
    return [...new Array(parsedN)].map(el => v);
}
