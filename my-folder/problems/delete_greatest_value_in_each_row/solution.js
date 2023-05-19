/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let answer = 0;

    while (grid[0].length) {
        let m = 0;
        for (let i = 0; i < grid.length; i++) {
            const h = Math.max(...grid[i]);
            grid[i].splice(grid[i].indexOf(h), 1);
            m = Math.max(m, h);
        }
        answer += m;
    }

    return answer;
};