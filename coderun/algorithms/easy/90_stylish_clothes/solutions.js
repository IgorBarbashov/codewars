const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0
let tShirts = [];
let m = 0;
let shorts = [];

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        n = arr[0];
    } else if (tShirts.length === 0) {
        tShirts = arr.splice(0, n);
    } else if (m === 0) {
        m = arr[0];
    } else {
        shorts = arr.splice(0, m);
        console.log(solution(n, tShirts, m, shorts));
        rl.close();
    }
});

const solution = (n, tShirts, m, shorts) => {
    let tShirt = tShirts[0];
    let short = shorts[0];
    let right = 0;
    let diff = Math.abs(tShirts[0] - shorts[0]);

    for (let left = 0; left < tShirts.length; left++) {
        while (right < shorts.length) {
            const currentDiff = Math.abs(tShirts[left] - shorts[right]);

            if (currentDiff < diff) {
                diff = currentDiff;
                tShirt = tShirts[left];
                short = shorts[right];

                if (shorts[right] > tShirts[left]) {
                    break;
                }
            } else if (shorts[right] > tShirts[left]) {
                break;
            }
            right++;
        }
    }

    return `${tShirt} ${short}`;
};