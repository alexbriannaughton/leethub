/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    const answer = new Set();
    const set1 = new Set(nums1);
    const set2 = new Set();
    for (let i = 0; i < nums2.length; i++) {
        const cur = nums2[i];
        set2.add(cur);
        if (set1.has(cur)) answer.add(cur);
    }
    for (let i = 0; i < nums3.length; i++) {
        const cur = nums3[i];
        if (set1.has(cur) || set2.has(cur)) answer.add(cur);
    }
    return [...answer]
};