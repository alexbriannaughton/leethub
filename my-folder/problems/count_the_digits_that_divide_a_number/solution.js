/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const str = String(num);
    count = 0;
    for (let i = 0; i < str.length; i++) {
        if (num % str[i] === 0) count++;
    }
    return count;
};