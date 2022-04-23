function chain(input, fs) {
    return fs.reduce((acc, el) => el(acc), input);
}
