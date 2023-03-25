/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const copy = [...nums]
    copy.sort((a, b) => b - a).splice(k)
    
    let answer = []
    for (n of nums) {
        const copyInd = copy.indexOf(n)
        if (copyInd !== -1) {
            answer.push(n)
            copy.splice(copyInd, 1)
        }
    }
    
    return answer
};