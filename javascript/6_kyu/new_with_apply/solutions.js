function construct(Class, ...rest) {
    const obj = {};
    obj.__proto__ = Class.prototype;
    Class.apply(obj, rest);
    return obj;
}
