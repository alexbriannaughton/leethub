/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let output = 0;

    for (const word of words) {
        const curChars = chars.split("");
        let ableToMakeWord = true;
        
        for (const char of word) {
            const i = curChars.indexOf(char);
            if (i === -1) {
                ableToMakeWord = false;
                break;
            }
            curChars.splice(i, 1);
        }

        if (ableToMakeWord) output += word.length;
    }

    return output;
};