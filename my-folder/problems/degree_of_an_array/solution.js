/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const obj = {};

    for (num of nums) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }

    const max = Math.max(...Object.values(obj))
    const possNums = []

    for (num in obj) {
        if (obj[num] === max) possNums.push(num)
    }

    let minDist = Infinity
    for (possN of possNums) {
        const start = nums.indexOf(parseInt(possN))
        const last = nums.lastIndexOf(parseInt(possN))
        minDist = Math.min(last - start + 1, minDist)
    }
    return minDist
};