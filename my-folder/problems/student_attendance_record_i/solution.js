/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let aCount = 0;
    let late = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') aCount++;
        if (aCount >= 2) return false;
        if (s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L') return false;
    }
    return true;
};