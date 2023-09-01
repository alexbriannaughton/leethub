/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const output = [0]
    for (let i = 1; i <= n; i++) {
        const bin = i.toString(2)
        let onesCount = 0
        for (char of bin) {
            if (char === '1') onesCount++
        }
        output.push(onesCount)
    }
    return output
};