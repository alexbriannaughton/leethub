/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = nums[0], fast = slow

    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast)

    slow = nums[0]

    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};