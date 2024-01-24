/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let counts = {}
    for (char of s) {
        counts[char] = (counts[char] || 0) + 1
    }
    let highestOddCount = 0;
    for (c of Object.values(counts)) {
        const cIsEven = c % 2 === 0;
        if (!cIsEven) {
            highestOddCount = Math.max(highestOddCount, c)
        }
    }
    let count = 0;
    let foundHighestOddCount = false;
    for (c of Object.values(counts)) {
        const cIsEven = c % 2 === 0;
        if (cIsEven) {
            count += c;
            }
        else if (!foundHighestOddCount) {
            if (c === highestOddCount) {
                foundHighestOddCount = true;
                count += c;
            }
            else count += c - 1;
        }
        else {
            count += c - 1;
            }
    }
    return count;
};