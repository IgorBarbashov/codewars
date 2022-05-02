function sortTwisted37(array) {
    const replaceNumbers = n => Number([...String(n)].map(d => +d === 3 ? 7 : +d === 7 ? 3 : d === '-' ? d : +d).join(''));
    return array.map(el => replaceNumbers(el)).sort((a, b) => a > b ? 1 : -1).map(el => replaceNumbers(el));
}
