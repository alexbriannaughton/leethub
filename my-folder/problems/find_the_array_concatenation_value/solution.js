/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum = 0;
    while (nums.length) {
        sum += parseInt(
            String(nums.shift()) + String(nums.pop())
        );
    }
    return sum;
};