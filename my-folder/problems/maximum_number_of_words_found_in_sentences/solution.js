/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
    for (sent of sentences) {
        const sentCount = sent.split(" ").length
        max < sentCount ? max = sentCount : null
    }
    return max
};