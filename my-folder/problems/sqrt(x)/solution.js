/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let count = 0
    let answer = false
    while(!answer) {
        result = count * count 
        if (result > x) {
            return (count-1)
        }
        count += 1
    }

};