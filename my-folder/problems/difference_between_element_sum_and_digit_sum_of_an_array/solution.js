/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const es = nums.reduce((a, b) => a + b)
    const str = String(nums.join(""))
    let ds = 0
    for (let i = 0; i < str.length; i++) {
        ds += parseInt(str[i])
    }

    return es - ds
};