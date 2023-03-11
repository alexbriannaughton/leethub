/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums)
    let max = 0
    set.forEach((num) => {
        if (!set.has(num - 1)) {
            let count = 1
            while (set.has(num + count)) {
                count++
            }
            if (count > max) max = count
        }

    })
    return max
};