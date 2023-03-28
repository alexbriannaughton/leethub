/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nStr = String(n)
    const arr = []
    
    function checkDigits() {
        let total = 0
        for (num of nStr) {
            total += num*num
        }

        nStr = String(total)
        
        if (arr.includes(total)) return false
        if (total === 1) return true
        else arr.push(total)
        
        return checkDigits()
    }
    
    return checkDigits()
};
