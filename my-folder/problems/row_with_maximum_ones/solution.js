/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    const answer = [0, mat[0].reduce((a, b) => a + b)];
    
    for (let i = 1; i < mat.length; i++) {
        const count = mat[i].reduce((a, b) => a + b);
        if (count > answer[1]) {
            answer[0] = i;
            answer[1] = count;
        }
    }
    return answer
};