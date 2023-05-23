/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const checked = [];
    for (let i = 0; i < s.length; i++) {
        if (checked.includes(s[i])) continue;
        const dis = distance[s.charCodeAt(i) - 97];
        if (s[i + dis + 1] !== s[i]) {
            return false;
        }
        checked.push(s[i]);
    }
    return true;
};