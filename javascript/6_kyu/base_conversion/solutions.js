function convert(input, source, target) {
    const inDec = [...input].reduceRight(
        (acc, el, i) =>
            acc + source.indexOf(el) * source.length ** (input.length - i - 1),
        0
    );
    const fromDec = (number, acc = "") => {
        const next = Math.floor(number / target.length);
        const newAcc = `${target[number % target.length]}${acc}`;
        return next ? fromDec(next, newAcc) : newAcc;
    };
    return fromDec(inDec);
}
