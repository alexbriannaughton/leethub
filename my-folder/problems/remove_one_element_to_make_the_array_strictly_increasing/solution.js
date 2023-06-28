/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    const firstCheck = checkIfIncreasing(nums);
    if (firstCheck) return true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const newArr = nums.slice(0, i - 1).concat(nums.slice(i));
            if (newArr.length === 1) return true;
            const increasing = checkIfIncreasing(newArr);
            if (increasing) return true;
            const newArr1 = nums.slice(0, i).concat(nums.slice(i+1));
            const increasing1 = checkIfIncreasing(newArr1);
            if (increasing1) return true;
            i++
        }
    }

    function checkIfIncreasing(newArr) {
        for (let j = 1; j < newArr.length; j++) {
            if (newArr[j] <= newArr[j - 1]) {
                return false;
            }
        }
        return true;
    }
    return false
};