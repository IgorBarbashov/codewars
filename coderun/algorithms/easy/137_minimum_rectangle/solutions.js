const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let k = 0;
const points = [];

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (k === 0) {
        k = arr[0];
    } else if (points.length < k) {
        points.push(arr);
    }

    if (points.length === k) {
        console.log(solution(points));
        rl.close();
    }
});

const solution = (points) => {
    const first = points[0];
    let minX = Number(first[0]);
    let minY = Number(first[1]);
    let maxX = Number(first[0]);
    let maxY = Number(first[1]);

    points.forEach(point => {
        let [x, y] = point.map(Number);

        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    });

    return `${minX} ${minY} ${maxX} ${maxY}`;
};
