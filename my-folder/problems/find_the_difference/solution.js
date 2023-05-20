/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const sObj = {};
    for (let i = 0; i < s.length; i++) {
        !sObj[s[i]]
            ? sObj[s[i]] = 1
            : sObj[s[i]]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (!sObj[t[i]]) {
            return t[i];
        }
        sObj[t[i]]--;
    }
};