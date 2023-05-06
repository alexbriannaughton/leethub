/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let leftInd = 0; let rightInd = nums.length - 1

    while (leftInd < rightInd) {
        if (!isEven(nums[leftInd] && isEven(nums[rightInd]))) {
            [nums[leftInd], nums[rightInd]] = [nums[rightInd], nums[leftInd]]
        }
        while (isEven(nums[leftInd]) && leftInd < nums.length) leftInd++
        while (!isEven(nums[rightInd]) && rightInd > 0) rightInd--
    }

    function isEven(n) {
        return n % 2 === 0
    }
    return nums
};