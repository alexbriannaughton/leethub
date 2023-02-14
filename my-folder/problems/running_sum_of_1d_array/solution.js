/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = nums[0]

    let arr = [nums[0]]

    for (let i = 1; i < nums.length; i++){
        count = nums[i] + count
        arr.push(count)
    }

    return arr
};