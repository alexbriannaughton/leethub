/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        const end = words[i].length - 1
        let string = ""
        for (let j = end; j > end / 2; j--) {
            string += words[i][j]
        }
        if (words[i].slice(0, words[i].length/2) === string) return words[i]
    }
    return ""
};