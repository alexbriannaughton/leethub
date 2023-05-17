/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let bool = false;
    for (let r = 0; r < s.length; r++) {
        bool = goal === s.slice(r) + s.slice(0, r);
        if (bool) break;
    }
    return bool;
};