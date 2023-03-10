/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}
    for (num of nums) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }
    let ordered = Object.values(obj).sort(function(a, b){return a - b})
    let topK = ordered.slice(-k)
    let answer = []
    for (num of Object.keys(obj)) {
        if (topK.includes(obj[num])) {
            answer.push(parseInt(num))
        }
    }
    return answer
};