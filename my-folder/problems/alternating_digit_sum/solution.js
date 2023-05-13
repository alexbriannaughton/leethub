/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let pos = true;
    let strN = String(n);
    let sum = 0;
    for (let i = 0; i < strN.length; i++) {
        const digit = parseInt(strN[i])
        pos
            ? sum += digit
            : sum -= digit
        pos = !pos
    }
    return sum
};