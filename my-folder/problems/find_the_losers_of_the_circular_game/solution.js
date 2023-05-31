/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    let i = 0;
    let count = 1;
    while (arr[i] > 0) {
        arr[i] *= -1;
        let mult = k * count;
        count++;
        i = (mult + i) % n;
    }
    return arr.filter((el) => el > 0)
};