/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    for (digit of n.toString()) {
        product *= digit
        sum += parseInt(digit)
    }
    return product - sum
};