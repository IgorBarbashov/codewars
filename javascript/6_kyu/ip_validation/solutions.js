function isValidIP(str) {
    const arr = str.split('.');
    return arr.length === 4 && arr.every(el => /^\d$|^[1-9]\d$|^1\d{1,2}$|^2[0-4]\d$|^25[0-5]$/.test(el));
}
