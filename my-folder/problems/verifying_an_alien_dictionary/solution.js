/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const obj = {};
    for (let i = 0; i < order.length; i++) {
        const char = order[i];
        obj[char] = i;
    }
    
    for (let i = 1; i < words.length; i++) {
        const curWord = words[i];
        const prevWord = words[i-1];
        
        for (let j = 0; j < prevWord.length; j++) {
            const curChar = curWord[j];
            const prevChar = prevWord[j];
            if (obj[curChar] > obj[prevChar]) break;
            if (obj[curChar] < obj[prevChar] || !curChar) return false;
            
        }
    }
    return true
};