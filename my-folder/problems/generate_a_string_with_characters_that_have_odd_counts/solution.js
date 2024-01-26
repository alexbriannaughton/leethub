/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    const nIsEven = n % 2 === 0;
    let output = nIsEven ? 'a' : '';
    const len = nIsEven ? n - 1 : n;
    for (let i = 0; i < len; i++) {
        output += 'b';
    }
    return output;

    //return n % 2 === 0
    //    ? 'a'.repeat(n - 1) + 'b'
    //    : 'a'.repeat(n);
};