const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', line => {
    lines.push(line);

    if (lines.length === 2) {
        const [length, index] = solution(lines);
        console.log(length, index);
        rl.close();
    }
});

function solution(lines) {
    const [n, k] = lines[0].trim().split(' ').map(Number);
    const line = lines[1].trim().slice(0, n);

    let fi = 0;
    let si = 1;
    const symbols = new Map().set(line[0], [0]);
    const res = [1, 1];

    while (si < line.length) {
        const current = line[si];

        if (symbols.has(current)) {
            symbols.get(current).push(si);
        } else {
            symbols.set(current, [si]);
        }

        const info = symbols.get(current);
        if (info.length <= k) {
            si++;
        } else {
            const newFi = info.shift() + 1;
            for (let j = fi; j <= newFi - 1; j++) {
                symbols.get(line[j]).shift();
            }

            fi = newFi;
        }

        if (si - fi > res[0]) {
            res[0] = si - fi;
            res[1] = fi + 1;
        }
    }

    return res;
};