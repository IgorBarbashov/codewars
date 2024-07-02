/**
 * @param {number} N - целое число, количество сотрудников готовых к объединению
 * @param {number[]} staff - массив длины N с грейдами доступных сотрудников
 * @param {number} K - целое число, количество доступных клавиатур
 * @returns {number}
 */
module.exports = function (N, staff, K) {
    const map = {};

    for (let i = 0; i < staff.length; i++) {
        if (!map[staff[i]]) {
            map[staff[i]] = 1;
        } else {
            map[staff[i]]++;
        }
    }

    const sortedMap = Object.entries(map).sort((a, b) => b[0] - a[0]);

    let power = 0;
    let staffCount = 0;
    for (let i = 0; i < sortedMap.length; i++) {
        const ostatok = Math.min(K - staffCount, sortedMap[i][1]);
        power += ostatok * sortedMap[i][0];
        staffCount += ostatok;
        if (staffCount >= K) {
            break;
        }
    }

    return power;
}