/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []

    function dfs(i, curArr, total) {
        if (total === target) {
            result.push([...curArr])
            return
        }
        
        if (total > target || i > candidates.length - 1) return

        curArr.push(candidates[i])
        dfs(i, curArr, total + candidates[i])
        curArr.pop()
        dfs(i+1, curArr, total)
    }

    dfs(0, [], 0)

    return result
};