/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a);
    let max = 0;
    let sum = 0;
    for (s of satisfaction) {
        sum += s;
        if (sum <= 0) break;
        max += sum;
    }
    return max;
};