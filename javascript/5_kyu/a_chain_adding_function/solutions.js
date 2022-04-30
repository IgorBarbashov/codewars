function add(n) {
    let res = n;

    function innerAdd (m) {
        res += m;
        return innerAdd;
    }

    innerAdd.valueOf = function(){
        return res;
    }

    return innerAdd;
}
