/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = ""
    let word = ""
    for (let char of s) {
        if (char === " ") {
            answer += word + char
            word = ""
        } else {
            word = char + word
        }
    }
    return answer + word
};