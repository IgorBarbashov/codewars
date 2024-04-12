function makeClass(...properties) {
    return function Animel(...values) {
        properties.forEach((prop, i) => {
            this[prop] = values[i];
        });
    };
}