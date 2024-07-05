function decode(message, replaces) {
    let copy = [...message];
    const sortedReplaces = replaces
        .sort((a, b) =>
            a.from.length !== b.from.length
                ? b.from.length - a.from.length
                : a.from > b.from ? 1 : -1
        );

    const matches = [];
    sortedReplaces.forEach(({ from, to }) => {
        const replaceMatches = message.matchAll(new RegExp(`${from}`, 'g'));
        replaceMatches && matches.push(...[...replaceMatches]
            .map(match => ({ from: match[0], index: match.index, to }))
        );
        message = message.split(from).join('_'.repeat(from.length));
    });

    matches.sort((a, b) => b.index - a.index).forEach(({ from, to, index}) => {
        copy.splice(index, from.length, to);
    });

    return copy.join('');
}

module.exports = {decode};