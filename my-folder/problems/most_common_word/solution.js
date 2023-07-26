/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
        const wordCount = {};
    const words = paragraph.split(/[ ,.!?';]+/g);
    for (let i = 0; i < words.length; i++) {
        if (!words[i].length) continue;
        words[i] = words[i].toLowerCase();
        if (!banned.includes(words[i])) {
            wordCount[words[i]]
                ? wordCount[words[i]]++
                : wordCount[words[i]] = 1;
        }
    }
    let answer;
    for (const [word, count] of Object.entries(wordCount)) {
        if (answer === undefined || count > wordCount[answer]) {
            answer = word;
        }
    }
    return answer
};