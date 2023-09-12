/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
    arr.sort((a, b) => a - b)
    const middleIndex = Math.floor((arr.length - 1) / 2);
    const m = arr[middleIndex]
    const output = []
    for (let i = 0; i < k; i++) {
        const first = arr[0]
        const firstDiff = Math.abs(first - m)
        const last = arr[arr.length - 1]
        const lastDiff = Math.abs(last - m)

        if (firstDiff > lastDiff) {
            output.push(arr.shift())
        }
        else if (firstDiff < lastDiff) {
            output.push(arr.pop())
        }       
        else {
            // if they're the same, find the one that's lower in the original array
            const firstIndex = arr.indexOf(first)
            const lastIndex = arr.indexOf(last)
            if (arr[firstIndex] > arr[lastIndex]) {
                output.push(arr.splice(firstIndex, 1))
            }
            else output.push(arr.splice(lastIndex, 1))
        }
    }
    return output
};