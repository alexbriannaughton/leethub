/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const copyScore = [...score];
    score.sort((a, b) => b - a);
    const places = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    const obj = {};
    for (let i = 0; i < score.length; i++) {
        places[i]
            ? obj[score[i]] = places[i]
            : obj[score[i]] = String(i+1);
    }

    return copyScore.map((s) => obj[s])
};