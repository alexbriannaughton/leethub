/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0
    
    //rows
    for (let i = 0; i < grid.length; i++) {
        //columns
        for (let j = 0; j < grid[i].length; j++) {
            if (!grid[i][j]) continue
            
            count += 4
            
            if (grid[i][j-1]) count--
            if (grid[i][j+1]) count--
            if (i < grid.length - 1 && grid[i+1][j]) count--
            if (i > 0 && grid[i-1][j]) count--
        }
    }
    return count
};