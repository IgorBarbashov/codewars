module.exports = function(fullCode) {
    const dict = {
        '-----': 0,
        '.----': 1,
        '..---': 2,
        '...--': 3,
        '....-': 4,
        '.....': 5,
        '-....': 6,
        '--...': 7,
        '---..': 8,
        '----.': 9
    };

    const res = [];

    const helper = (str) => {
        const res = [];
        for (let i = 1; i < str.length; i += 2) {
            res.push(str[i]);
        }
        return res.join('');
    };

    fullCode.split('   ').forEach(group => {
        res.push(group.split(' ').forEach(sym =>
            res.push(sym[0] === 'T'
                ? dict[[...sym.slice(1)].reverse().join('')]
                : sym[0] === 'R'
                    ? dict[helper(sym)]
                    : dict[sym])
        ));
        res.push(' ');
    });

    return res.join('');
};
