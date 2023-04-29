/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const sorted = people.sort((a, b) => {
        return a[0] === b[0]
            ? a[1] - b[1]
            : b[0] - a[0]
    })
    const result = []
    for (person of sorted) {
        result.splice(person[1], 0, person)
    }
    return result
};