/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const res = [];
    const signIndex = {
        pos: 0,
        neg: 1
    };

    for (num of nums) {
        const sign = num >= 0 ? 'pos' : 'neg';
        const index = signIndex[sign];
        res[index] = num;
        signIndex[sign] += 2;
    }

    return res;
};