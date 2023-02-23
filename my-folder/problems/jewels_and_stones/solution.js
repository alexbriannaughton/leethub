/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let obj = {}
    let count = 0
    
    for (let i = 0; i < jewels.length; i++) {
        obj[jewels[i]] = 1
    }

    for (let i = 0; i < stones.length; i++) {
        if (obj[stones[i]]) count++
    }

    return count
};