/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    
    for (str of strs) {
        const letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};