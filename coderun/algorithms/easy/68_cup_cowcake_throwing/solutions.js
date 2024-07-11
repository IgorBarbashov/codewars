const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;

rl.on('line', line => {
    const arr = line.trim().split(' ').map(Number);

    if (n === 0) {
        n = arr[0];
    } else {
        console.log(solution(n, arr));
        rl.close();
    }
});

const solution = (n, arr) => {
    let result = 0;
    let max = 0;
    let maxIndex = 0;
    const scoreToPlace = {};
    const indexToPlaces = {};
    const sorted = [...arr].sort((a, b) => b - a);

    sorted.forEach((item, index) => {
        if (!scoreToPlace[item]) {
            scoreToPlace[item] = index + 1;
        }
    });

    arr.forEach((item, index) => {
        const place = scoreToPlace[item];
        indexToPlaces[index] = place;
        if (item > max) {
            max = item;
            maxIndex = index;
        }
    });

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] % 5 === 0 &&
            arr[i] % 2 !== 0 &&
            i > maxIndex &&
            arr[i + 1] < arr[i]
        ) {
            if (result) {
                result = Math.min(indexToPlaces[i], result);
            } else {
                result = indexToPlaces[i];
            }
        }
    }

    return result;
};
