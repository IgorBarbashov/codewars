function twoSum(numbers, target) {
    for(let i = 0; i <= numbers.length - 2; i++) {
        for(let j = i + 1; j <= numbers.length - 1; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}
