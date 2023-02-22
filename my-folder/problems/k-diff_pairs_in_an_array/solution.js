/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    const obj = {}
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1
    }

    Object.keys(obj).forEach((key) => {
        if (k === 0) {
            if (obj[key] >= 2) count++;
        } else {
            let secondNum = +k + +key;
            if (obj[secondNum]) count++
        }
    })
    return count
};