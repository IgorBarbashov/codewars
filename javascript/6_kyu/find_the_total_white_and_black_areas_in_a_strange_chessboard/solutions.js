function whiteBlackAreas(cols, rows) {
    const countWB = arr => arr.reduce((acc, el, i) => {
        const index = i % 2 === 0 ? 0 : 1;
        acc[index] += el;
        return acc;
    }, [0, 0]);

    const [wC, bC] = countWB(cols);
    const [wR, bR] = countWB(rows);

    return [wR * wC + bR * bC, bR * wC + wR * bC];
}
