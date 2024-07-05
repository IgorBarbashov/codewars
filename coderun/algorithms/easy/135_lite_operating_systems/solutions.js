const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let m = -1;
let n = -1;
let intervals = [];
rl.on('line', line => {
    const [a, b] = line.trim().split(' ').map(Number);

    if (m === -1) {
        m = a;
    } else if (n === -1) {
        n = a;
    } else if (intervals.length < n) {
        intervals.push([a, b]);

        if (intervals.length === n) {
            console.log(solution(m, n, intervals));
            rl.close();
        }
    }

    if (n === 0) {
        console.log(0);
        rl.close();
    }
});

const solution = (m, n, intervals) => {
    let available = [intervals[0]];

    const isHasIntersection = ([newA, newB], [currentA, currentB]) => {
        return !((newA < currentA && newB < currentA) || (newA > currentB && newB > currentB));
    };

    for (let i = 1; i < intervals.length; i++) {
        for (let j = 0; j < available.length; j++) {
            if (isHasIntersection(intervals[i], available[j])) {
                available[j] = null;
            }
        }
        available = available.filter(Boolean);
        available.push(intervals[i]);
    }

    return available.length;
};
