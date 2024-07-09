const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let k = 0;
let numbers = [];

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        [n, k] = arr;
    } else {
        numbers = arr.splice(0, n);
        console.log(solution(n, k, numbers));
        rl.close();
    }
});

const solution = (n, k, numbers) => {
    let result = 0;
    let left = 0;
    let right = 0;
    let sum = numbers[0];
    while (left < numbers.length && right < numbers.length) {
        if (sum === k) {
            sum -= numbers[left];
            result++;
            left++;
            right++;
            sum += numbers[right];
        } else if (sum > k) {
            sum -= numbers[left];
            left++;
        } else {
            right++;
            sum += numbers[right];
        }
    }

    return result;
};
