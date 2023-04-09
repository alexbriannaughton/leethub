/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b)
    const cutOff = people.findIndex((element) => element >= limit);
    let count = 0
    cutOff === -1 
        ? null 
        : count = people.splice(cutOff).length
    
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            count++
            left++
            right--
        }
        else if (left === right) {
            count++
            break
        }
        else {
            right--
            count++
        }
    }
    return count
};