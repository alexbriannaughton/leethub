/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let res = -1
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1
            if (res === -1) res = nums[i]
        }
        if (obj[nums[i]] > obj[res]) {
            res = nums[i]
        }
        if (obj[nums[i]] === obj[res]) {
            res = nums[i] < res ? nums[i] : res
        }
    }
    return res
};