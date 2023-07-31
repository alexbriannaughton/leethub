/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const answer = [];

    for (let i = 0; i < boxes.length; i++) {
        let count = 0
        for (let j = 0; j < boxes.length; j++) {
            if (j === i) continue;
            if (boxes[j] !== "0") {
                count += Math.abs(i - j);
            }
        }
        answer.push(count);
    }

    return answer;
};