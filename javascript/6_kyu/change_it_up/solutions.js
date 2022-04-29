function changer(str) {
    const vowels = 'aeiou';
    return [...str]
        .map(l => {
            if (!/[a-zA-Z]/.test(l)) {
                return l;
            }
            if (l === 'z' || l === 'Z') {
                return 'A';
            }
            const nl = String.fromCharCode(l.charCodeAt(0) + 1).toLowerCase();
            return vowels.includes(nl) ? nl.toUpperCase() : nl;
        })
        .join('');
}
