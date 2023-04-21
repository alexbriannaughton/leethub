/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let h = 0
    let v = 0
    for (move of moves) {
        if (move === "U") h++
        else if (move === "D") h--
        else if (move === "L") v--
        else v++
    }
    return h === 0 && v === 0
};