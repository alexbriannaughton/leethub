/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const a = String(x).split("").reverse();
    if (a[a.length - 1] === "-") a.unshift(a.pop());
    let i = 0;
    while (a[i] === "0") a.shift();
    const b = Number(a.join(""));
    return Math.abs(b) > 2**31 ? 0 : b;
};