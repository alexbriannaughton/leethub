/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 0;
    let str = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (str.includes(char)) {
            count++;
            str = char;
        }
        else str += char;
    }
    if (str !== "") count++;
    return count;
};