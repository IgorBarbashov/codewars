function valueOfX(eq) {
    const cS = eq.replace(/ /g, '');
    const kx = cS.match(/\-x|x/g)[0].length === 1 ? 1 : -1;
    const [left, right] = cS.split('=');
    const k = left.includes('x') ? [-1, 1] : [1, -1];
    const leftTokens = (left.match(/[+-]?\d+/g) ?? []).map(el => Number(el) * k[0]);
    const rightTokens = (right.match(/[+-]?\d+/g) ?? []).map(el => Number(el) * k[1]);
    return kx * [...leftTokens, ...rightTokens].reduce((acc, el) => acc + el);
}
