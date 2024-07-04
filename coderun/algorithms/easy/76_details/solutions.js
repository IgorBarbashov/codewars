const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    const [n, k, m] = line.trim().split(' ').map(Number);
    console.log(solution(n, k, m));
    rl.close();
});

const solution = (n, k, m) => {
    if (k > n || m > k) {
        return 0;
    }

    let splav = n;
    let result = 0;
    let z;

    while((z = Math.floor(splav / k)) > 0) {
        splav = splav % k;
        result += Math.floor(k / m) * z;
        splav += (k % m) * z;
    }

    return result;
};
