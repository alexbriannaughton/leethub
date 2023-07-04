/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s === goal) {
        const obj = {}
        for (let i = 0; i < s.length; i++) {
            obj[s[i]]
                ? obj[s[i]]++
                : obj[s[i]] = 1;
        }
        return Object.values(obj).some((n) => n > 1);
    }
    let swap1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i] && !swap1) swap1 = [i, s[i]];
        else if (s[i] !== goal[i] && swap1) {
            const swapInd = swap1[0];
            const swapChar = swap1[1];
            const curInd = i;
            const curChar = s[i];
            s = s.split('')
            s[swapInd] = curChar;
            s[curInd] = swapChar;
            return s.join('') === goal;
        }
    }
    return false;
};