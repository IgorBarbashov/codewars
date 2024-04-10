function once(fn) {
    let isCalled = false;
    return (...args) => {
        if (isCalled) return undefined;
        isCalled = true;
        return fn(...args);
    }
}