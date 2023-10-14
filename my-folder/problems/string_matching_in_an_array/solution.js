/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    return words.filter((curWord) => {
        return words.find((word) => {
            return word.includes(curWord) && word != curWord
                ? word : null
        })
    })
};