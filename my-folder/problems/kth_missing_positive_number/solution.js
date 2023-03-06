/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let count = 1;
    let result = [];
    let i = 0;
    while (result.length < k) {
        if (arr[i] !== count) {
            result.push(count)
            count++
            continue
        }
        i++, count++
    }
    return result[k - 1];
};