/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    let max = -1
    for (let i = 0; i < nums.length; i++) {
        const start = nums[i]
        let shouldBeSameAsStart = false
        for (let j = i + 1; i < nums.length; j++) {
            const end = nums[j]
            if ((shouldBeSameAsStart && end === start)
                || (!shouldBeSameAsStart && end === start + 1)) {
                max = Math.max(max, j - i + 1)
                shouldBeSameAsStart = !shouldBeSameAsStart
            }
            else break
        }
    }
    return max
};