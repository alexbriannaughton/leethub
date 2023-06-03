/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let i = 0;
    const arr = [];
    while (++i <= n) {
        if (n % i === 0) arr.push(i);
    }
    return arr[k - 1] ? arr[k - 1] : -1;
};