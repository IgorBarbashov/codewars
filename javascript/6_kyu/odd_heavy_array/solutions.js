function isOddHeavy(n){
    const [oddCount, minOdd, maxEven] = n.reduce(([oddCount, minOdd, maxEven], el) => {
        const isEven = el % 2 === 0;
        return [
            !isEven ? ++oddCount : oddCount,
            !isEven && el < minOdd ? el : minOdd,
            isEven && el > maxEven ? el : maxEven
        ];
    }, [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
    return oddCount > 0 && minOdd > maxEven;
};
