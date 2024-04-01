function findUniq(arr) {
    const dicrionaries = new Map();

    for (let i = 0; i < arr.length; i++) {
        const dictionary = [...new Set([...arr[i].toLowerCase()].sort().join('').replaceAll(/\s/g, ''))].join('');

        if (dicrionaries.has(dictionary)) {
            dicrionaries.set(dictionary, -1);
        } else {
            dicrionaries.set(dictionary, arr[i]);
        }
    }

    return [...dicrionaries].find(([_, string]) => typeof string === 'string')[1];
}