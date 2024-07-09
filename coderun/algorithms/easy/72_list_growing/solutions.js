const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    console.log(solution(line.trim().split(' ').map(Number)));
    rl.close();
});

const solution = (list) => {
    for (let i = 1; i < list.length; i++) {
        if (list[i] <= list[i - 1]) {
            return 'NO';
        }
    }

    return 'YES';
};