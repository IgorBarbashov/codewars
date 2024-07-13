const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let m = 0;
let k = 0;
let matrix = [];
let queries = [];

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        [n, m, k] = arr;
    } else if (matrix.length < n) {
        matrix.push(arr.slice(0, m));
    } else if (queries.length < k) {
        queries.push(arr.slice(0, 4));
    }

    if (queries.length === k) {
        solution(n, m, matrix, queries);
        rl.close();
    }
});

const solution = (n, m, matrix, queries) => {
    const prefixSum = new Array(n).fill(null).map(() => new Array(m));

    for (let x = 0; x < n; ++x) {
        for (let y = 0; y < m; ++y) {
            prefixSum[x][y] = matrix[x][y] + (prefixSum[x - 1]?.[y] ?? 0) + (prefixSum[x][y - 1] ?? 0) - (prefixSum[x - 1]?.[y - 1] ?? 0);
        }
    }

    let sum = 0;
    for (const rectangle of queries) {
        const [x1, y1, x2, y2] = rectangle.map((n) => n - 1);
        sum = prefixSum[x2][y2] - (prefixSum[x1 - 1]?.[y2] ?? 0) - (prefixSum[x2][y1 - 1] ?? 0) + (prefixSum[x1 - 1]?.[y1 - 1] ?? 0);
        console.log(sum);
    }
};