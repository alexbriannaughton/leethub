/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let sum;
    let diff = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const locSum = nums[i] + nums[left] + nums[right];
            const locDiff = Math.abs(target - locSum);

            if (locDiff < diff) {
                diff = locDiff;
                sum = locSum;
            }

            if (locSum > target) right--;
            else left++;
        };
    };
    return sum;
};