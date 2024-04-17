function sortByBit(arr) {
    return arr.sort((a, b) => {
        const aB = a.toString(2).match(/1/g)?.length ?? 0;
        const bB = b.toString(2).match(/1/g)?.length ?? 0;
        return aB === bB ? a - b : aB - bB;
    });
}