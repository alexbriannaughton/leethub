/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    const counts = {};

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            counts[nums[i][j]]
                ? counts[nums[i][j]]++
                : counts[nums[i][j]] = 1;
        }
    }

    const answer = [];

    for (n in counts) {
        if (counts[n] === nums.length) answer.push(n);
    }

    return answer;
};