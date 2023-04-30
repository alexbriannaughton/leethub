/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const array = []
    for (let i = 0; i < columnTitle.length; i++) {
        array.push(columnTitle.charCodeAt(i) - 64)
    }
    let sum = array[array.length - 1]
    let c = 26
    for (let i = array.length - 2; i >= 0; i--) {
        sum += c * array[i]
        c *= 26
    }
    return sum
};