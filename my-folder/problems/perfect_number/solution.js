/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    const divs = []

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divs.push(i)
        }
    }

    if (!divs.length) return false
    
    const sum = divs.reduce((a, b) => a + b)
    
    return sum === num
};