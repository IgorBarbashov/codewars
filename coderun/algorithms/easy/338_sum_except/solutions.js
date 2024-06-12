function sumExcept(a, i, n) {
    i = i < 0 || (i | 0) !== i ? 0 : i;
    n = n < 0 || (n | 0) !== n ? 0 : n;
    let sum = 0;

    for (let j = 0; j < i; j++) {
        sum += (a[j] | 0) === a[j] ? a[j] : 0;
    }

    for (let j = i + n; j < a.length; j++) {
        sum += (a[j] | 0) === a[j] ? a[j] : 0;
    }

    return sum;
}

module.exports = sumExcept;

// Tests
console.log(sumExcept([1, 9, 8, 4], 1, 2)); // 5
console.log(sumExcept([1, 9, 8, -4], 1, 2)); // -3
console.log(sumExcept([1.8, 9, 8, -4], 1, 2)); // -4
console.log(sumExcept([1.8, 9, 8, -4, 8.7], 2, 1)); // 5
console.log(sumExcept([1.8, 9, 8, -4, 8.7], 2.9, 1)); // 13
console.log(sumExcept([1.8, 9, 8, -4, 8.7], 2, 1.9)); // 13
console.log(sumExcept([1.8, 9, 8, -4, 8.7], -2, 2)); // 4
console.log(sumExcept([1, 9, 8, -4, 7], 8, 2)); // 21
console.log(sumExcept([1, 9, 8, -4, 7], 1, 20)); // 1