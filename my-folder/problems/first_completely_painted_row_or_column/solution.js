/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    const m = mat.length; n = mat[0].length;
    const obj = {};

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            obj[mat[i][j]] = { i, j };
        }
    }

    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);

    for (let i = 0; i < m * n; i++) {
        if (++rows[obj[arr[i]].i] === n ||
            ++cols[obj[arr[i]].j] === m) {
            return i
        }
    }
};