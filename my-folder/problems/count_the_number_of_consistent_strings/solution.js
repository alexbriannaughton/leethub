/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    const obj = {}

    for (letter of allowed) {
        obj[letter] = true
    }

    let answer = 0
    for (word of words) {
        let inThere = true
        for (letter of word) {
            if (!obj[letter]) {
                inThere = false
                break
            }
        }
        if (inThere) answer++
    }
    return answer
};