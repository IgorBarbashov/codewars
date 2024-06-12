/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
function merge(nums1, m, nums2, n) {
    let index = n + m - 1;
    let mi = m - 1;
    let ni = n - 1;

    while (ni != -1) {
        if (nums1[mi] > nums2[ni]) {
            nums1[index] = nums1[mi];
            mi--;
        } else {
            nums1[index] = nums2[ni];
            ni--;
        }
        index--;
    }
}

// Tests

const nums1_1 = [46,55,88,0,0,0,0];
const m_1 = 3;
const nums2_1 = [18,29,80,90];
const n_1 = 4;
merge(nums1_1, m_1, nums2_1, n_1);
console.log(nums1_1);

const nums1_2 = [18,29,80,90,0,0,0];
const m_2 = 4;
const nums2_2 = [46,55,88];
const n_2 = 3;
merge(nums1_2, m_2, nums2_2, n_2);
console.log(nums1_2);

const nums1_3 = [18,0,0,0];
const m_3 = 1;
const nums2_3 = [46,55,88];
const n_3 = 3;
merge(nums1_3, m_3, nums2_3, n_3);
console.log(nums1_3);

const nums1_4 = [18,29,80,90,0];
const m_4 = 4;
const nums2_4 = [46];
const n_4 = 1;
merge(nums1_4, m_4, nums2_4, n_4);
console.log(nums1_4);

const nums1_5 = [0,0,0];
const m_5 = 0;
const nums2_5 = [46,55,88];
const n_5 = 3;
merge(nums1_5, m_5, nums2_5, n_5);
console.log(nums1_5);

const nums1_6 = [46,55,88];
const m_6 = 3;
const nums2_6 = [];
const n_6 = 0;
merge(nums1_6, m_6, nums2_6, n_6);
console.log(nums1_6);