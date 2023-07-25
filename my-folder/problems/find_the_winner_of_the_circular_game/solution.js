/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    arr = [...Array(n)].map((x, i) => i+1);

    function go(startingIndex) {
        if (arr.length === 1) return arr[0];
        const endingIndex = (startingIndex + k - 1) % arr.length;
        arr.splice(endingIndex, 1);
        return go(endingIndex);
    }

    return go(0)
};