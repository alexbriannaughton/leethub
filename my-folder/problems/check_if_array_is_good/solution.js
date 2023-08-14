/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    // version 1
    const goodNumber = nums.length - 1;
    const first = nums.indexOf(goodNumber);
    const last = nums.lastIndexOf(goodNumber);
    if (first === last || first === -1 || last === -1) {
        return false;
    }
    const hash = {};
    for (n of nums) {
        if (n > goodNumber) return false;
        if (hash[n]) {
            if (n === goodNumber) {
                if (++hash[n] > 2) return false;
            }
            else return false;
        }
        else hash[n] = 1;
    }
    return true;



    // version 2

    // nums.sort((a, b) => b - a);
    // const len = nums.length;
    // if (!(len - 1 === nums[0] && len - 1 === nums[1])) {
    //     return false;
    // }
    // for (let i = 2; i < len; i++) {
    //     const next = nums[i+1] || 0;
    //     if (nums[i] - 1 !== next) return false;
    // }
    // return true;



    // version 3
    // const max = Math.max(...nums);
    // if (max !== nums.length - 1) return false;
    // const hash = {};
    // for (n of nums) {
    //     if (hash[n]) {
    //         if (n === max) {
    //             if (++hash[n] > 2) return false;
    //         }
    //         else return false;
    //     }
    //     else hash[n] = 1;
    // }
    // return true;
};