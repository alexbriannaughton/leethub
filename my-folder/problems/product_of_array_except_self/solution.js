/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftArr = [];
    let leftMult = 1;
    
    for (let i = 0; i < nums.length; i++) {
        leftArr[i] = leftMult;
        leftMult *= nums[i];
    };
    
    let rightArr = [];
    let rightMult = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        rightArr[j] = rightMult;
        rightMult *= nums[j];
        
        rightArr[j] *= leftArr[j];
    };
    
    return rightArr;

};