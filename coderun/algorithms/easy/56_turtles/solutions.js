const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
const data = [];

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        n = arr[0];
    } else if (data.length < n) {
        data.push(arr);
    }
}).on('close', () => {
    console.log(solution(n, data));
});

const solution = (n, data) => {
    const set = new Set();

    data.forEach((item) => {
        const [a, b] = item;
        if (a >= 0 && b >= 0 && a + b === n - 1) {
            set.add(a);
        }
    });

    return set.size;
};
