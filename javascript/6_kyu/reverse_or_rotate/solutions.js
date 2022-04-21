function revrot(str, sz) {
    if(sz <= 0 || sz > str.length || str === '' ) {
        return '';
    }
    const isEvenCube = str => [...str].map(Number).reduce((acc, el) => acc + el**3, 0) % 2 === 0;
    const reverseStr = str => [...str].reverse().join('');
    const rotateStr = str => `${str.substr(1)}${str[0]}`;
    const changeStr = str => str.length !== sz ? '' : isEvenCube(str) ? reverseStr(str) : rotateStr(str);
    return str.match(new RegExp(`\\d{1,${sz}}`, 'g')).map(changeStr).join('');
}
