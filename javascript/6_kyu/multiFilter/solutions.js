var multiFilter = function(...fns) {
    return function(el) {
        if(fns.length === 0) {
            return el;
        }

        return fns.reduce((acc, fn) => {
            return acc === false ? false : fn(el);
        }, true);
    };
};