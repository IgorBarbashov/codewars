// Необходимо написать функцию для библиотеки, которой пользуются большое количество людей,
// Функция должна принимать множество чисел и возвращать два максимальных числа из этого множества

function findTwoMaxNumbers(arr) {
    let max1;
    let max2;

    if (arr.length < 2) {
        throw new Error('Последодвательность минимум два элемента');
    } else if (arr.length === 2) {
        return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])];
    }

    max1 = Math.max(arr[0], arr[1]);
    max2 = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }

    return { max1, max2 };
};
