/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    const len = nums.length;
    return nums.reduce((acc, cur, ind) => {
        return len % (ind+1) === 0
            ? acc + (cur * cur)
            : acc;
    }, 0)

    // const len = nums.length;
    // let count = 0;
    // for (let i = 0; i < len; i++) {
    //     if (len % (i + 1) === 0) {
    //         count += nums[i] * nums[i];
    //     }
    // }
    // return count;
};