/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ")
    arr = arr.filter(str => str !== "")
    let last = arr[arr.length - 1]
    return last.length
};