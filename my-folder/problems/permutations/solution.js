/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const output = []
    dfs([], nums)
    return output

    function dfs(cur, remaining) {
        if (remaining.length === 0) {
            output.push(cur)
            return
        }

        for (let i = 0; i < remaining.length; i++) {
            dfs(
                [...cur, remaining[i]],
                [...remaining.slice(0, i), ...remaining.slice(i + 1)]
            )
        }

    }
};