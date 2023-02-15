/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let n = BigInt(num.join(""))
    let res = n + BigInt(k)
    return res.toString().split("")
};