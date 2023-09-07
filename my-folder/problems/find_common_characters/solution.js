/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const output = []

    for (let i = 0; i < words[0].length; i++) {
        const char = words[0][i]
        let allOfThemHaveChar = true

        for (let j = 1; j < words.length; j++) {
            const len = words[j].length
            words[j] = words[j].replace(char, '')
            if (words[j].length === len) {
                allOfThemHaveChar = false
            }
        }
        if (allOfThemHaveChar) output.push(char)
    }

    return output
};