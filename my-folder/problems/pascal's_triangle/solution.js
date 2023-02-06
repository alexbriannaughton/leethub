/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = [[1]]

    if (numRows > 1) {
        arr.push([1, 1])
    }

    for (let i = 2; i < numRows; i++) {
        const currArr = arr[arr.length - 1]
        const newArr = [1]
        for (let j = 0; j < currArr.length-1; j++) {
            const value = currArr[j] + currArr[j + 1]
            newArr.push(value)
        }
        newArr.push(1)
        arr.push(newArr)
    }

    return arr
};