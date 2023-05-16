/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr = new Array(nums.length + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++
    }

    let answer
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            answer = i
            break
        }
    }
    return answer

};