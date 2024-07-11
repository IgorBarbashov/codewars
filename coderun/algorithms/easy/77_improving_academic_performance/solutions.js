const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = '';
let b = '';
let c = '';

rl.on('line', line => {
    const n = line.trim();

    if (a.length === 0) {
        a = n;
    } else if (b.length === 0) {
        b = n;
    } else {
        c = n;
        console.log(solution(a, b, c));
        rl.close();
    }
});

const solution = (a, b, c) => {
    a = BigInt(a);
    b = BigInt(b);
    c = BigInt(c);
    let l = 0n;
    let r = 2n * a + b;

    while (l < r) {
        let m = (l + r) / 2n;
        if (2n * (a * 2n + b * 3n + c * 4n + m * 5n) >= 7n * (a + b + c + m)) {
            r = m;
        } else {
            l = m + 1n;
        }
    }

    return String(l);
};
