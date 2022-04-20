function isSumOfCubes(s){
    const isCubic = n => Number(n) === [...n].reduce((acc, el) => acc + Number(el) ** 3, 0);
    const cubics = s.match(/\d{1,3}/g).filter(isCubic).map(Number);
    return cubics.length ? `${cubics.join(' ')} ${cubics.reduce((acc, el) => acc + el)} Lucky` : 'Unlucky';
}
