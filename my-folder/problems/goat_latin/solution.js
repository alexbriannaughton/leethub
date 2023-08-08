/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
// for each word
    // if it doesn't begin with vowel
        // remove first letter and add to end
    // add 'm'
    // add 'a' * i+1

    sentence = sentence.split(" ");
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < sentence.length; i++) {
        let cur = sentence[i];
        if (!vowels.includes(cur[0])) {
            cur = cur.split("");
            cur.push(cur.shift());
            cur = cur.join("");
        }
        cur += "m";
        for (let j = 0; j <= i + 1; j++) {
            cur += "a";
        }
        sentence[i] = cur;
    }
    return sentence.join(" ");
};