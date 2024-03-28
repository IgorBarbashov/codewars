function drawStairs(n) {
    return Array
        .from({length: n}, (_, i) => i)
        .reduce((acc, el) => `${acc}${' '.repeat(el)}I\n`, '')
        .slice(0, -1);
}