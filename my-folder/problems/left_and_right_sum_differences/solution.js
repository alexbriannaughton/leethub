/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let rightTotal = nums.reduce((a, b) => a +b)
    let leftTotal = 0
    const answer = []
    for (let i = 0; i < nums.length; i++) {
        rightTotal -= nums[i]
        answer.push(Math.abs(rightTotal - leftTotal))
        leftTotal += nums[i]
    }
    return answer
};