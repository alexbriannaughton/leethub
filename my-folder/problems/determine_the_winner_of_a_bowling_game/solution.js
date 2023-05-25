/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    function getScore(player) {
        let score = 0;
        for (let i = 0; i < player.length; i++) {
            let curScore;
            if (player[i - 1] === 10 || player[i - 2] === 10) {
                curScore = player[i] * 2;
            } else {
                curScore = player[i];
            }
            score += curScore;
        }
        return score
    }

    const score1 = getScore(player1);
    const score2 = getScore(player2);

    if (score1 > score2) return 1;
    if (score2 > score1) return 2;
    if (score1 === score2) return 0;
};