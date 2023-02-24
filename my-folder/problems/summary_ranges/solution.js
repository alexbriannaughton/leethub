/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = []
    let pointer = nums[0]


    for(let i = 0; i < nums.length; i++) {
        // if this number is not one less than the next number
        if (nums[i] + 1 !== nums[i + 1]) {
            // and if the pointer is this number, just push this number
            if (pointer === nums[i]) {
                res.push(`${nums[i]}`)
             
            }
            // but if this number is not the pointer, push this number through this one
            else {
                res.push(`${pointer}->${nums[i]}`)
              
            }
            pointer = nums[i+1]
        }
        
        
    }
    return res
};