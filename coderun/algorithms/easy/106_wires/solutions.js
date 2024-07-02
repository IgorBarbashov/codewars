const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let k = 0;
let lengths = [];

const can_cut = (arr, len, k) => {
    const count = arr.reduce((acc, el) => (acc + Math.floor(el / len)), 0);
    return count >= k;
};

const bin_search = (arr, k) => {
    let l = 1;
    let r = Math.max(...arr);

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (can_cut(arr, mid, k)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return r;
};

rl.on('line', line => {
    if (n === 0) {
        [n, k] = line.trim().split(' ').map(Number);
    } else if (lengths.length < n) {
        lengths.push(Number(line.trim()));
    }

    if (lengths.length === n) {
        console.log(bin_search(lengths, k));
        rl.close();
    }
});
