function getMiddle(s)
{
    const len =  s.length;
    if (len < 3) {
        return s;
    }
    const mod = len % 2;
    const start = ~~(len / 2) - 1 + mod;
    return s.substr(start, 2 - mod);
}
