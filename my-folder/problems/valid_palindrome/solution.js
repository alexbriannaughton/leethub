/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // function to check if i care about the current character
    function dontCare(char) {
        const charCode = char.charCodeAt(0);
        return (charCode < 97 || charCode > 122) &&
            !(charCode >= 48 && charCode <= 57)
    }

    s = s.toLowerCase();
    
    // set up pointer at the beginning of s and at end of s
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftChar = s[left]
        const rightChar = s[right]

        // if i dont care about the character, move to the next
        if (dontCare(leftChar)){
            left++;
            continue;
        }
        if (dontCare(rightChar)) {
            right--;
            continue;
        }

        // once i have 2 characters that i care about, check if they're the same
        // if they're not, this is not a palindrome
        if (leftChar !== rightChar) return false;
        
        // if they are the same character, move on to the next ones
        left++;
        right--;
    }

    // if i've made it this far then it must be a palindrome
    return true;
};