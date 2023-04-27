/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set(nums)
    const arr = []
    for(i = 1; i <= nums.length; i++) {
        if (!set.has(i)) arr.push(i)
    }
    return arr

    // const arr = []
    // for(i = 1; i <= nums.length; i++) {
    //     if (!nums.includes(i)) arr.push(i)
    // }
    // return arr
};