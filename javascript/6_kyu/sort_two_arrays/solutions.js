function sortArrays(arr1,arr2){

    const getSortMap = (arr) => {
        const sortedArr = arr.map((value, i) => ({value, i}));
        let isChanges = true;

        while(isChanges) {
            isChanges = false;
            for (let i = 0; i < sortedArr.length - 1; i++) {
                if (sortedArr[i].value > sortedArr[i+1].value) {
                    isChanges = true;
                    const tempA = sortedArr[i];
                    sortedArr[i] = sortedArr[i+1];
                    sortedArr[i+1] = tempA;
                }
            }
        }
        return sortedArr.map(({ i }) => i);
    };

    const sortArrByIndexMap = (arr, sortMap) => {
        const sortedArr = [];
        sortMap.forEach(i => sortedArr.push(arr[i]));
        return sortedArr;
    }

    const sortMap2 = getSortMap(arr2);
    const finalSortedArr1 = sortArrByIndexMap(arr1, sortMap2);

    const sortMap1 = getSortMap(arr1);
    const finalSortedArr2 = sortArrByIndexMap(arr2, sortMap1);

    return [finalSortedArr1, finalSortedArr2];
}
