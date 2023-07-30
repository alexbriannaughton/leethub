/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    text = text.split(" ");
    for (let i = 0; i < text.length; i++) {
        let hasBrokenKey = false;
        for (let j = 0; j < brokenLetters.length; j++) {
            if (text[i].includes(brokenLetters[j])) {
                hasBrokenKey = true;
                break;
            }
        }
        if (!hasBrokenKey) count++;
    }
    return count;
};