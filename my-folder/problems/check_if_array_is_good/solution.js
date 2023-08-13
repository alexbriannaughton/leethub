/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    // const goodNumber = nums.length -1;
    // const first = nums.indexOf(goodNumber)
    // const last = nums.lastIndexOf(goodNumber)
    // return (first !== last) && (first !== -1) && (last !== -1)

    // nums.sort((a, b) => b - a)
    // return nums.length - 1 === nums[0] && nums.length - 1 === nums[1]

    const max = Math.max(...nums);;
    if (max !== nums.length - 1) return false;
    const hash = {};
    for (n of nums) {
        if (hash[n]) {
            if (n === max) {
                hash[n]++;
                if (hash[n] > 2) return false;
            }
            else return false;
        }
        else hash[n] = 1;
    }
    return true;
};