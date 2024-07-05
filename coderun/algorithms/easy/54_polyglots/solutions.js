const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl
    .on('line', line => {
        lines.push(line.trim());
    })
    .on('close', () => {
        solution(lines);
        rl.close();
    });

const solution = (lines) => {
    const n = lines.shift();
    const map = new Map();
    const set = new Set();

    let index = 0;
    while (index < lines.length) {
        const studentLanguagesCount = lines[index++];

        for (let i = 0; i < studentLanguagesCount; i++) {
            const language = lines[index++];
            set.add(language);
            const languageCount = map.has(language) ? map.get(language) + 1 : 1;
            map.set(language, languageCount);
        }
    }

    const all = Object.entries(Object.fromEntries(map)).filter(([, count]) => count === Number(n));

    console.log(all.length);
    for (let i = 0; i < all.length; i++) {
        console.log(all[i][0]);
    }
    console.log(set.size);
    [...set].forEach(l => console.log(l));
};