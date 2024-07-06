const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let f = '';
let s = '';

rl.on('line', line => {
    if (f.length === 0) {
        f = line.trim();
    } else if (s.length === 0) {
        s = line.trim();
        console.log(solution(f, s));
        rl.close();
    }
});

const solution = (f, s) => {
    const fPairs = new Map();
    const sPairs = new Set();
    let relative = 0;

    for (let i = 0; i < f.length - 1; i++) {
        const current = f[i] + f[i + 1];
        const count = fPairs.has(current) ? fPairs.get(current) + 1 : 1
        fPairs.set(current, count);
    }

    for (let i = 0; i < s.length - 1; i++) {
        const current = s[i] + s[i + 1];
        sPairs.add(current);
    }

    for (let sPair of sPairs) {
        relative += fPairs.has(sPair) ? fPairs.get(sPair) : 0;
    }

    return relative;
};