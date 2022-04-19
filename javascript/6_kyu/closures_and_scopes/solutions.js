const createFunctions = n => (new Array(n)).fill(0).reduce((acc, el, i) => [...acc, () => i], []);
