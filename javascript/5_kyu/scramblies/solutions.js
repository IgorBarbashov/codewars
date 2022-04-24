function scramble(str1, str2) {
    const set = [...new Set(str2)];

    for (let i = 0; i < set.length; i++) {
        const count1 = [...str1.matchAll(set[i])].length;
        const count2 = [...str2.matchAll(set[i])].length;
        if (count1 < count2) {
            return false;
        }
    }

    return true;
}
