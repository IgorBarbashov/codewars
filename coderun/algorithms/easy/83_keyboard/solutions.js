const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let resource = [];
let k = 0;

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        n = arr[0];
    } else if (resource.length === 0) {
        resource = arr;
    } else if (k === 0) {
        k = arr[0];
    } else {
        arr.forEach(el => resource[el - 1]--);
        resource.forEach(el => console.log(el < 0 ? "YES" : "NO"));
        rl.close();
    }
});