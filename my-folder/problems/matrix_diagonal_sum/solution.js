/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length

    let total = 0;

    for (let i = 0; i < n; i++) {
        total += mat[i][i]
        if (n - 1 - i !== i) {
            total += mat[n - 1 - i][i]
        }
    }
    return total
};