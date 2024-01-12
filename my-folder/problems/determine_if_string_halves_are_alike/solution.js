/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i < s.length/2; i++) {
        if (vowels.has(s[i])) aCount++;
        if (vowels.has(s[i + s.length/2])) bCount++;
    }
    return aCount === bCount;
};