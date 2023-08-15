/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    // iterate through position and check:
        // is position[i] even? evenCount++
        // or is position[i] odd? oddCount++
    // return min(evenCount,oddCount)

    let evenCount = 0, oddCount = 0

    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) evenCount++
        else oddCount++

    }

    return Math.min(evenCount, oddCount)
}