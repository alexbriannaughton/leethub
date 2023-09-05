/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    // find the max number where x = num
    // we are allowed to do the following up to t times
        // x += 1
        // num -= 1
    return num + t*2
};