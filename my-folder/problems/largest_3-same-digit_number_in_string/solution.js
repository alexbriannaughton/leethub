/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let max = "";
    for (let i = 0; i < num.length - 2; i++) {
        const sub = num.substr(i, 3);
        if (sub[0] === sub[1] && sub[0] === sub[2]) {
            if (max === "") max = sub;
            else max = sub > max ? sub : max;
        }
    }
    return max;
};