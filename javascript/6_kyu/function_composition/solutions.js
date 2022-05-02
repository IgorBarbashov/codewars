function compose(f,g) {
    return function(...spread){
        return f(g(...spread));
    }
}
