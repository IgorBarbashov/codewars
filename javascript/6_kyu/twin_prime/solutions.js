function isTwinPrime(n){

    const isPrime = n => {
        if (n < 3 || n % 2 === 0 || n % 4 === 0) {
            return false;
        }

        for(let i = 3; i <= Math.sqrt(n) + 1; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    };

    return isPrime(n) && (isPrime(n + 2) || isPrime(n - 2));
}
