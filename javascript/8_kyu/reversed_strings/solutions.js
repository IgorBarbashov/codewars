function solution(str){
    let result = '';
    [...str].forEach(el => result = el + result);
    return result;
}
