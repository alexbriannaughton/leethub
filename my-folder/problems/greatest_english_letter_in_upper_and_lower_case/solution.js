/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set(s);
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char.toLowerCase() === char) continue
        if (set.has(char.toLowerCase())) {
            max = Math.max(max, char.charCodeAt(0))
        }
    }
    return max ? String.fromCharCode(max) : ""
};