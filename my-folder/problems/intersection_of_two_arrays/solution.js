/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const shorter = nums1.length > nums2.length
        ? nums2 : nums1;
    const longer = nums1.length > nums2.length
        ? nums1 : nums2;

    const set = new Set(shorter)

    set.forEach((n) => {
        if (!longer.includes(n)) {
            set.delete(n);
        }
    })

    return Array.from(set)
};