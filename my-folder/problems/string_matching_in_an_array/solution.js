/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((word) => {
        for (const w of words) {
            if (w === word) continue
            if (w.includes(word)) return word
        }
    })
};