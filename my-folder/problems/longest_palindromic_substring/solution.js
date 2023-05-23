/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j > i; j--) {
            if (j - i < longest.length) break;
            const f = s.substring(i, j)
            if (isPalindrome(f) && f.length > longest.length) {
                longest = f;
                break;
            }
        }
    }

    function isPalindrome(str) {
        let l = 0, r = str.length - 1;
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++, r--;
        }
        return true;
    }

    return longest;
};