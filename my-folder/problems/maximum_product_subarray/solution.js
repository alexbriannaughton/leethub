/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0]
    let min = nums[0]
    let answer = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let localMax = Math.max(max * nums[i], nums[i], min * nums[i])
        let localMin = Math.min(max * nums[i], nums[i], min * nums[i])
        
        max = Math.max(localMin, localMax)
        min = Math.min(localMax, localMin)
        
        answer = Math.max(max, answer)
    }
    return answer
};