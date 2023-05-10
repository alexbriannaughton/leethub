/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)

    function find(n) {
        if (max % n === 0) return n
        else {
            n--
            while (min % n !== 0) {
                n--
            }
            return find(n)
        }
    }

    return find(min)
};