function vowelIndices(word){
    const dict = 'aeiouyAEIOUY';
    return [...word].reduce((acc, el, i) => dict.includes(el) ? [...acc, i + 1] : acc, []);
}
