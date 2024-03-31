function splitTheBill(x) {
    const average = Object.values(x).reduce((acc, el) => acc + el, 0) / Object.values(x).length;
    return Object.entries(x).reduce((acc, [key, value]) => {
        acc[key] = Number((value - average).toFixed(2));
        return acc;
    }, {});
}