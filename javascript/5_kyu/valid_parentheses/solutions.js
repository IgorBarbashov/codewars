function validParentheses(parens) {
    if (parens.length % 2 !== 0 || parens[0] === ')') {
        return false;
    } else if (parens === '') {
        return true;
    }

    return [...parens].reduce((acc, el, i) => {
        return el === '(' ? `${acc}${el}` : acc.slice(-1) === '(' ? `${acc.slice(0, -1)}` : el;
    }) === '';
}
