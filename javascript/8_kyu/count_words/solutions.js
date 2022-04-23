function countWords(str) {
    return str
        .trim()
        .replace(/\s/, ' ')
        .split(' ')
        .filter(el => el.length !== 0)
        .length;
}
