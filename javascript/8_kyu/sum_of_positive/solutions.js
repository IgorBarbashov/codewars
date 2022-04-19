function positiveSum(arr) {
    return arr.filter((el) => el > 0).reduce((acc, el) => acc + el, 0);
}
