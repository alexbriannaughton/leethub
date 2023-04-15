/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let n = ""

    for (letInd in s) {
        n += s.charCodeAt(letInd) - 96
    }

    let answer

    for (let j = 0; j < k; j++) {
        answer = 0

        for (char of n) {
            answer += parseInt(char)
        }

        n = answer.toString()
        
    }

    return answer
};