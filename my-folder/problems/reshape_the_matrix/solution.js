/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const arr = mat.flat();
    if (arr.length !== r * c) return mat;
    const answer = [];
    while (arr.length) {
        answer.push(arr.splice(0, c));
    }
    return answer;
};