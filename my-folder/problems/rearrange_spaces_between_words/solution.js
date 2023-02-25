/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaces = 0
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") spaces++
    }
    
    let words = text.split(" ").filter(str => str !== "")
    
    let res = ""
    
    const betweenWords = spaces / (words.length - 1)
    
    if (words.length === 1) return words[0] += " ".repeat(spaces)
    
    for (let i = 0; i < words.length; i++) {
        res += words[i]
        if (i !== words.length - 1) res += " ".repeat(betweenWords)
    }
    
    let rem = spaces % (words.length - 1)
    
    return res += " ".repeat(rem)
};