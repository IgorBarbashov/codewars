const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    console.log(solution(line.trim().split(' ').map(Number)));
    rl.close();
});

const solution = (numbers) => {
    const sorted = numbers.sort((a, b) => b - a);
    const [max1, max2, max3] = sorted;
    const [min2, min1] = sorted.splice(-2);

    const ans = max1 * max2 * max3 > min2 * min1 * max1 ? [max1, max2, max3] : [max1, min1, min2];
    return ans.join(' ');
};
