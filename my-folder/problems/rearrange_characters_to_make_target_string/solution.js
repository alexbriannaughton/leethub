/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {

    const obj1 = {};
    for (let i = 0; i < target.length; i++) {
        obj1[target[i]]
            ? obj1[target[i]]++
            : obj1[target[i]] = 1;
    }
    const obj2 = {};
    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]]) {
            obj2[s[i]]
                ? obj2[s[i]]++
                : obj2[s[i]] = 1;
        }
    }

    let min = 0;

    for (let i = 0; i < target.length; i++) {
        const needs = obj1[target[i]];
        const has = obj2[target[i]];
        if (!has) return 0;
        const possA = Math.floor(has / needs);
        if (min === 0 || possA < min) min = possA;
    }
    return min
};