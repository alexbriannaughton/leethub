/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0
    let ans = ""
    while (word1[i] || word2[i]) {
        word1[i] ? ans += word1[i] : null
        word2[i] ? ans += word2[i] : null
        i++
    }
    return ans
};