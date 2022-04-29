function partitionOn(pred, items) {
    const copyArr = [...items];
    let falseCount = 0;
    items.length = 0;
    copyArr.forEach(el => {
        if(pred(el)) {
            items.push(el);
        } else {
            items.splice(falseCount, 0, el);
            falseCount += 1;
        }
    });
    return falseCount;
}
