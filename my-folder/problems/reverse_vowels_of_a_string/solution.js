/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let left = 0; right = s.length - 1;
    const vowels = 'aeiouAEIOU';
    s = s.split("");
    
    while (left < right) {
        while (!vowels.includes(s[left]) && left < right) left++;
        while (!vowels.includes(s[right]) && left < right) right--;

        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;

    }
    return s.join("");
};