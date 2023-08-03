/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let a = 1, e = 1, i = 1, o = 1;

    while (n-- > 1) {
        a = a + e + i + o + 1;
        e = e + i + o + 1;
        i = i + o + 1;
        o = o + 1;
    }

    return a + e + i + o + 1;
};