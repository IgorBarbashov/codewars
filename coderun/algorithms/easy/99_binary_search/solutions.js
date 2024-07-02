const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let n = 0;
let k= 0;
let arrN = [];
let arrK = [];
const answers = new Map();

const bin_search = (arr, n, l, r) => {
    const index = Math.floor((r + l) / 2) ;

    if (arr[index] === n) {
        return true;
    }

    if (r - l <= 1) {
        return false;
    }

    if (n > arr[index]) {
        return bin_search(arr, n, index + 1, r);
    } else {
        return bin_search(arr, n, l, index);
    }
};

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (count === 0) {
        [n, k] = arr;
        count++;
    } else if (arrN.length === 0) {
        arrN = arr;
    } else {
        arrK = arr;
        arrK.forEach(currentK => {
            if (answers.has(currentK)) {
                console.log(answers.get(currentK));
            } else {
                const answer = bin_search(arrN, currentK, 0, arrN.length) ? "YES" : "NO";
                answers.set(currentK, answer);
                console.log(answer);
            }
        });

        rl.close();
    }
});