function digital_root(n) {
    const sum = [...n.toString()].reduce((acc, el) => acc + (+el), 0);
    return sum > 9 ? digital_root(sum) : sum;
}
