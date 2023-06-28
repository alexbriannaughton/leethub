/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]]
            ? obj[arr[i]]++
            : obj[arr[i]] = 1;
    }
    const res = [-1];
    for (n in obj) {
        if (n == obj[n]) res.push(obj[n]);
    }
    return Math.max(...res);
};