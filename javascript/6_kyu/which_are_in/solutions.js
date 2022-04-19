function inArray(array1,array2){
    return [...new Set(array1)].sort().filter(el1 => array2.some(el2 => el2.includes(el1)));
}
