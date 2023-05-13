/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    while (num >= 2) {
        let ds = 0;
        for (let i = 0; i < String(num).length; i++) {
            ds += parseInt(String(num)[i])
        }
        if (ds % 2 === 0) count++
        num--
    }
    return count
};