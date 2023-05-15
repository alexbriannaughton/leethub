/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0;
    while (n > 1) {
        if (n === 2) {
            count++
            break
        }
        if (n % 2 === 0) {
            count += n / 2
            n = n / 2
        }
        else {
            count += (n - 1) / 2
            n = (n - 1) / 2 + 1
        }
    }
    return count
    
    // function go(n) {
    //     if (n === 1) return count
    //     if (n === 2) return ++count
    //     if (n % 2 === 0) {
    //         count += n / 2
    //         return go(n / 2)
    //     }
    //     count += (n - 1) / 2
    //     return go((n - 1) / 2 + 1)
    // }
    // return go(n)
};