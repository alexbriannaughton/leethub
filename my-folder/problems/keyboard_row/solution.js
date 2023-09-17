/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const group1 = 'qwertyuiop'
    const group2 = 'asdfghjkl'
    const group3 = 'zxcvbnm'
    const output = []

    for (const string of words) {
        const lcString = string.toLowerCase()
        let allTheSame = true
        let curGroup
        
        for (const char of lcString) {
            if (curGroup && !curGroup.includes(char)) {
                allTheSame = false
                break
            }
            else if (group3.includes(char)) curGroup = group3
            else if (group2.includes(char)) curGroup = group2
            else curGroup = group1
        }
        if (allTheSame) output.push(string)
    }
    return output
};