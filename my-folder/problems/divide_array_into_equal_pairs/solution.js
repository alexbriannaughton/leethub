/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const counts = new Map();
    for (let i = 0; i < nums.length; i++) {
        counts.set(nums[i], counts.get(nums[i]) + 1 || 1)
    }
    let tru = true
    counts.forEach((entry) => {
        if (entry % 2 !== 0) tru = false
    })
    return tru
};