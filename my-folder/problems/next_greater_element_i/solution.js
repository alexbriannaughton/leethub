/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const answer = [];
    for (let i = 0; i < nums1.length; i++) {
        const n = nums1[i];
        const k = nums2.indexOf(n);

        for (let j = k + 1; j < nums2.length; j++) {
            if (nums2[j] > n) {
                answer.push(nums2[j]);
                break;
            }
        }
        if (!answer[i]) answer.push(-1);
    }
    return answer;
};