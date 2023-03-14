/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length - 1
    
    while (left <= right) {
        const leftMat = matrix[left]
        const rightMat = matrix[right]
        
        if (leftMat[0] <= target && leftMat[leftMat.length - 1] >= target) {
            
            if (leftMat.includes(target)) return true
            else return false
        }
        else if (rightMat[0] <= target && rightMat[rightMat.length - 1] >= target) {
            if (rightMat.includes(target)) return true
            else return false
        }
        else if (leftMat[leftMat.length - 1] < target) {
            left ++
        }
        else if (rightMat[0] > target) {
            right--
        }
    }
    return false
};