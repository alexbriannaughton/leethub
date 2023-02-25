/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr =  Array.from(String(num), Number)

    if (arr.length === 1) return num

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
    }

    return addDigits(count)
};