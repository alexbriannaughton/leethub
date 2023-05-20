/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const colArr = Array(grid[0].length);

    for (let i = 0; i < colArr.length; i++) {
        colArr[i] = Array(grid.length).fill(0);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            colArr[j][i] = grid[i][j];
        }
        grid[i] = grid[i].join()
    }

    for (let i = 0; i < colArr.length; i++) {
        colArr[i] = colArr[i].join()
    }

    let count = 0;
    for (row of grid) {
        for (col of colArr) {
            if (row === col) count ++;
        }
    }
    return count;
};