/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const output = []
    const groups = {}
    for (let i = 0; i < groupSizes.length; i++) {
        const curIDsGroupSize = groupSizes[i]
        groups[curIDsGroupSize]
            ? groups[curIDsGroupSize].push(i)
            : groups[curIDsGroupSize] = [i]

        if (groups[curIDsGroupSize].length === curIDsGroupSize) {
            output.push(groups[curIDsGroupSize])
            groups[curIDsGroupSize] = []
        }
    }
    return output
};