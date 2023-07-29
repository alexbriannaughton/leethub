/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let kidIndex = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const curCookie = s[i];
        const curKidGreed = g[kidIndex];
        if (curCookie >= curKidGreed) {
            count++;
            kidIndex++
        }
    }

    return count;
};