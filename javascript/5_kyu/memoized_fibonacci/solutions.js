const fibonacci = function(n) {
    if(n === 0 || n === 1) {
        return n;
    }

    const cache = new Map([[0, 0], [1, 1]]);

    const calc = n => {
        if (n === 2) {
            cache.set(2, 1);
            return 1;
        }

        const fn = calc(n - 1) + cache.get(n - 2);
        cache.set(n, fn);
        return fn;
    }

    return calc(n);
}
