/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const wordsCount = {};
    function go(arr) {
        for (let i = 0; i < arr.length; i++) {
            const cur = arr[i];
            wordsCount[cur] ? wordsCount[cur]++ : wordsCount[cur] = 1;
        }
    }
    go(s1.split(" "));
    go(s2.split(" "));
    const answer = [];
    for (word in wordsCount) {
        if (wordsCount[word] === 1) answer.push(word);
    }
    return answer
};