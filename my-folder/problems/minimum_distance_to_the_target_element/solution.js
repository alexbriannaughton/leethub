/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let answer
    let ind = 0
    while (answer === undefined) {
        if (nums[ind] === target) {
            answer = Math.abs(ind - start)
        }
        ind++
    }
    for (ind; ind < nums.length; ind++) {
        if (nums[ind] === target && Math.abs(ind - start) < answer) {
            answer = Math.abs(ind - start)
        }
    }
    return answer
};