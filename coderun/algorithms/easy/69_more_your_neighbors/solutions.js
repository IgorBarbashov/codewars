const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    console.log(solution(line.trim().split(' ').map(Number)));
    rl.close();
});

const solution = (nums) => {
    if (nums.length < 3) {
        return 0;
    }

    let res = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            res++;
        }
    }

    return res;
};
