/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    function isANumber(n) {
        const curCharCode = n.charCodeAt(0);
        return curCharCode >= 48 && curCharCode <= 57;
    }
    let countSet = new Set();
    let curNum = "";
    for (let i = 0; i < word.length; i++) {
        const curChar = word[i];
        if (isANumber(curChar)) {
            curNum += curChar;
        }
        else if (curNum !== "") {
            curNum = BigInt(curNum);
            countSet.add(curNum);
            curNum = "";
        }
    }
    if (curNum !== "") countSet.add(BigInt(curNum));
    return countSet.size
};