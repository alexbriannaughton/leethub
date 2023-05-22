/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]]
            ? obj[nums[i]]++
            : obj[nums[i]] = 1;
    };

    const topK = Object.values(obj)
        .sort((a, b) => a - b)
        .slice(-k);

    const answer = [];

    for (num in obj) {
        if (topK.includes(obj[num])) {
            answer.push(parseInt(num));
        };
    };

    return answer;
};