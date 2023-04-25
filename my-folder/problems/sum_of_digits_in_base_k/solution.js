/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    // let sum = 0
    // for (digit of n.toString(k)) {
    //     sum += parseInt(digit)
    // }
    // return sum

    return n.toString(k)
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b))
};