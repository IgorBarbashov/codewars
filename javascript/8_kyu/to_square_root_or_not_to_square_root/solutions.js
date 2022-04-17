function squareOrSquareRoot(array) {
    return array.map(el => {
        const sqrt = Math.sqrt(el);
        return sqrt % 1 === 0 ? sqrt : el ** 2
    });
}
