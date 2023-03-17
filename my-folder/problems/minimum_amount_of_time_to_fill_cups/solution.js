/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    amount.sort((a,b) => b - a)

    let count = 0
    for (let i = 0; i < amount.length; i++) {
        while (amount[i] > 0) {
            amount[i]--
            
            if (amount[i+1] > 0) {
                if (amount[i + 1] === amount[i + 2]) amount[i + 2]--
                else amount[i + 1]--
            }
            else if (amount[i+2] > 0) amount[i + 2]--
            count++
        }
    }
    return count
};