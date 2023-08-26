/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    const sArray = [];

    for (char of s) {
        char === 'i'
            ? sArray.reverse()
            : sArray.push(char);
    }
    
    return sArray.join('');
};