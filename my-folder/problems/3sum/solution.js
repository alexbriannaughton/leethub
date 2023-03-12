/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)

    const answer = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        
        if (i > 0 && nums[i] === nums[i - 1]) continue
        
        let left = i + 1
        let right = nums.length - 1
        
        while(left < right) {
            const added = nums[left] + nums[right] + nums[i]
            if (added === 0) {
                answer.push([nums[i], nums[right], nums[left]])
                do {
                    left++ 
                } while (left < right && nums[left] === nums[left - 1])
                do {
                    right-- 
                } while (left < right && nums[right] === nums[right + 1])
                
            }
            else if (added < 0) left++
            else if (added > 0) right--
        }
    }
    return answer
};