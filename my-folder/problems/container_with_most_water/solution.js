/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let max = -Infinity

    while (left < right) {
        const lh = height[left]
        const rh = height[right]
        const dist = right - left
        
        const area = Math.min(lh, rh) * dist
        max = Math.max(max, area)

        lh > rh ? right-- : left++
    }

    return max
};