/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const res = [];
    const index = {pos: 0, neg: 1};

    for (num of nums) {
        const sign = num >= 0 ? 'pos' : 'neg';
        res[index[sign]] = num;
        index[sign] += 2;
    }

    return res;
};