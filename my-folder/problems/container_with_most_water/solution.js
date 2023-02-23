/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0

    let left = 0
    let right = height.length - 1
    while (left < right) {
        let lesser = Math.min(height[right], height[left])
        max = Math.max(lesser * (right - left), max)
        height[left] >= height[right] ? right-- : left++
    }

    return max
};