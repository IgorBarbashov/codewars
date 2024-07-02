const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let birdsCount = 0;
let count = 0;
const birds = new Set();
rl.on('line', line => {
    const [a, b] = line.split(' ').map(Number);

    if (birdsCount === 0) {
        birdsCount = a;
    } else if (count < birdsCount) {
        birds.add(a);
        count++;
    }

    if (count === birdsCount) {
        console.log(birds.size);
        rl.close();
    }
});
