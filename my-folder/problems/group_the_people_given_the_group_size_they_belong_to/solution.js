/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let obj = {}
    let answer = []
    for (let i = 0; i < groupSizes.length; i++) {
        if (!obj[groupSizes[i]]) {
            obj[groupSizes[i]] = []
        }
        obj[groupSizes[i]].push(i)
        if (obj[groupSizes[i]].length === groupSizes[i]) {
            answer.push(obj[groupSizes[i]])
            obj[groupSizes[i]] = []
        }
    }
    return answer
};