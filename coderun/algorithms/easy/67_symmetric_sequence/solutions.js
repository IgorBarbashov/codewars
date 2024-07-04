const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
rl.on('line', line => {
    const l = line.trim().split(' ').map(Number);

    if (n === 0) {
        n = l[0];
    } else {
        const add = solution(l);
        console.log(add.length);
        console.log(add.join(' '));
        rl.close();
    }
});

const isSymmetric = seq => {
    for (let i = 0; i < Math.floor(seq.length / 2); i++) {
        if (seq[i] !== seq[seq.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

function solution(seq) {
    if (isSymmetric(seq)) {
        return [];
    }

    for (let i = 0; i < seq.length; i++) {
        let suffix = seq.slice(0, i + 1).reverse();
        if (isSymmetric(seq.concat(suffix))) {
            return suffix;
        }
    }

    return seq.reverse();
}
