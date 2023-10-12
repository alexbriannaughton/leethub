/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let output = 0;
    let curSubarrayTotal = arr
        .slice(0, 0 + k)
        .reduce((a, b) => a + b);
    if (curSubarrayTotal / k >= threshold) output++;

    let i = k;
    while (i < arr.length) {
        curSubarrayTotal += arr[i] - arr[i - k];
        if (curSubarrayTotal / k >= threshold) output++;
        i++;
    }
    return output;
};