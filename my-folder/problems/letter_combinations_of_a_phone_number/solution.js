/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];

    let obj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    
    const answer = [];

    function go(i, str) {
        if (i === digits.length) {
            answer.push(str)
            return;
        }
        for (x of obj[digits[i]]) {
            go(i+1, str+x)
        }
    }

    go(0, "")

    return answer
};