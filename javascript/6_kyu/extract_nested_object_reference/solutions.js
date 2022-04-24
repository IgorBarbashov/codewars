Object.prototype.hash = string => string.split('.').reduce((acc, el) => acc === undefined ? acc : acc[el] ? acc[el] : undefined, obj);

