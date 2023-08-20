/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const len = arr.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i+1; j <= len; j+=2) {
            const subArr = arr.slice(i, j);
            count += subArr.reduce((a,b) => a+b);
        }
    }

    return count;
};