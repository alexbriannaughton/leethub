/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = {}
    const cols = {}
    const boxes = {}
    for (let i = 0; i < 9; i++) {
        rows[i] = {}
        cols[i] = {}
        boxes[i] = {}
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const colItem = board[j][i]
            if (colItem !== '.') {
                if (cols[i][colItem]) return false
                cols[i][colItem] = true
            }


            const cur = board[i][j]
            if (cur === '.') continue

            if (rows[i][cur]) return false
            rows[i][cur] = true

            if (i <= 2) {
                if (j <= 2) {
                    if (boxes[0][cur]) return false
                    boxes[0][cur] = true
                }
                else if (j <= 5) {
                    if (boxes[1][cur]) return false
                    boxes[1][cur] = true
                }
                else {
                    if (boxes[2][cur]) return false
                    boxes[2][cur] = true
                }
            }
            else if (i <= 5) {
                if (j <= 2) {
                    if (boxes[3][cur]) return false
                    boxes[3][cur] = true
                }
                else if (j <= 5) {
                    if (boxes[4][cur]) return false
                    boxes[4][cur] = true
                }
                else {
                    if (boxes[5][cur]) return false
                    boxes[5][cur] = true
                }
            }
            else {
                if (j <= 2) {
                    if (boxes[6][cur]) return false
                    boxes[6][cur] = true
                }
                else if (j <= 5) {
                    if (boxes[7][cur]) return false
                    boxes[7][cur] = true
                }
                else {
                    if (boxes[8][cur]) return false
                    boxes[8][cur] = true
                }
            }
        }
    }

    return true

};