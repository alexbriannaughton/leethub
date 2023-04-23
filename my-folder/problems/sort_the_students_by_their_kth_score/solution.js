/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    // let obj = {}

    // for (let i = 0; i < score.length; i++) {
    //     obj[score[i][k]] = score[i]
    // }

    // const answer = []

    // while (Object.keys(obj).length) {
    //     const val = Math.max(...Object.keys(obj))
    //     answer.push(obj[val])
    //     delete obj[val]
    // }

    // return answer

    return score.sort((a, b) => b[k] - a[k])
};