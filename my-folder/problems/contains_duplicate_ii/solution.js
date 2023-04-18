/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j <= (i + k); j++) {
    //         if (nums[i] === nums[j]) return true
    //     }
    // }
    // return false

    // or 

    const obj = {}
    for (i in nums) {
        if (i - obj[nums[i]] <= k) return true
        obj[nums[i]] = i
    }
    return false
};