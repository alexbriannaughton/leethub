/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    if (nums.length === 1) return 0

    if (nums.slice(1).reduce((a, b) => a + b) === 0) return 0
    

    for (let i = 1; i < nums.length - 1; i++) {
        const left = nums.slice(0, i)
        const leftSum = left.reduce((a, b) => a + b)

        const right = nums.slice(i + 1)
        const rightSum = right.reduce((a, b) => a + b)

        if (leftSum === rightSum) {
            return i
        }
    }

    if (nums.slice(0, nums.length - 1).reduce((a, b) => a + b) === 0) return nums.length - 1
    
    return -1
};