/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let obj = {}
    for (letter of sentence) {
        obj[letter] = true
    }
    return Object.values(obj).length === 26
};