/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const longer = nums1.length > nums2.length
        ? nums1 : nums2;
    const shorter = longer === nums1
        ? nums2 : nums1;
    const answer = [];
    for (let i = 0; i < shorter.length; i++) {
        const indOf = longer.indexOf(shorter[i]);
        if (indOf > -1) answer.push(longer.splice(indOf, 1));
    }
    return answer;
};