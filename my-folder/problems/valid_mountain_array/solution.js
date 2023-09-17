/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length <= 2) return false

    let i = 0

    while (arr[i] < arr[i+1] && i+1 < arr.length) i++

    if (i === 0 || i === arr.length - 1) return false

    while (arr[i] > arr[i+1] && i+1 < arr.length) i++

    return i === arr.length - 1
};