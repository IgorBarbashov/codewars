const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let numbers = [];
let k = 0;

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        n = arr[0];
    } else if (numbers.length === 0) {
        numbers = arr.splice(0, n);
    } else {
        k = arr[0];
        console.log(solution(n, numbers, k));
        rl.close();
    }
});

const solution = (n, number, k) => {
    let result;
    let distance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        const currentDistance = Math.abs(numbers[i] - k);
        if (currentDistance < distance) {
            distance = currentDistance;
            result = numbers[i];
        }
    }

    return result;
};
