/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = String(num);
    let foundFirstSix = false;
    let res = "";
    for (let i = 0; i < num.length; i++) {
        if (!foundFirstSix && num[i] === "6" ) {
           res += "9"
           foundFirstSix = true;
        } else res += num[i]
    }
    return res;
};