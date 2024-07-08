const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    console.log(solution(line.trim().split(/\s+/).map(Number)));
    rl.close();
});

const solution = (numbers) => {
    let max1 = Math.max(numbers[0], numbers[1]);
    let min1 = Math.min(numbers[0], numbers[1]);
    let max2;
    let min2;

    if (numbers.length === 2) {
        return `${min1} ${max1}`;
    }

    for (let i = 2; i < numbers.length; i++) {
        const current = numbers[i];

        if (current > max1) {
            [max1, max2] = [current, max1];
        } else if (current > max2) {
            max2 = current;
        } else if (current < min1) {
            [min1, min2] = [current, min1];
        } else if (current < min2) {
            min2 = current;
        }
    }

    return min1 * min2 > max2 * max1 ? `${min1} ${min2}` : `${max2} ${max1}`;
};
