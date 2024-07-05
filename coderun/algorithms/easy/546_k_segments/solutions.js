const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let k = 0;

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        [n, k] = arr;
    } else {
        console.log(solution(n, k, arr));
        rl.close();
    }
});

const solution = (n, k, arr) => {
    const points = arr.slice(0, n).sort((a, b) => a - b);

    const isCover = (points, k, l) => {
        let n = points.length;
        let segmentsUsed = 1;
        let lastCovered = points[0] + l;

        for (let i = 1; i < n; i++) {
            if (points[i] > lastCovered) {
                segmentsUsed++;
                lastCovered = points[i] + l;
                if (segmentsUsed > k) return false;
            }
        }

        return true;
    }

    let left = 0;
    let right = points[points.length - 1] - points[0];
    let result = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (isCover(points, k, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};
