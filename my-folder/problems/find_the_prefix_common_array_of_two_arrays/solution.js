/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let count = 0;
    const C = [];
    const obj = {};
    for (let i = 0; i < A.length; i++) {
        obj[A[i]] ? count++ : obj[A[i]] = true;
        obj[B[i]] ? count++ : obj[B[i]] = true;
        C.push(count);
    }
    return C;
};