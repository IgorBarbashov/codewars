function matrix(array) {
    return array.map((el, i) => [...el.slice(0, i), el[i] < 0 ? 0 : 1, ...el.slice(i + 1)]);
}