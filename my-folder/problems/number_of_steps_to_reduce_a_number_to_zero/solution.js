/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let res = 0

    while (num) {
        num % 2 === 0 ? num = num / 2 : num -= 1
        res++
    }

    return res
};