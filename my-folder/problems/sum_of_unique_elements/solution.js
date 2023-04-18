/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const obj = {}
    for (num of nums) {
        obj[num] ? obj[num] = "nope" : obj[num] = "yep"
    }
    
    let answer = 0
    for (key in obj) {
        if (obj[key] === "yep") answer += parseInt(key)
    }

    return answer
};