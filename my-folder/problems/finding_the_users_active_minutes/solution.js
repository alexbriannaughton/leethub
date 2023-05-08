/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let obj = {};
    for (let i = 0; i < logs.length; i++) {
        if (!obj[logs[i][0]]) {
            obj[logs[i][0]] = new Set([logs[i][1]])
        }
        else obj[logs[i][0]].add(logs[i][1])
    }

    let output = Array(k).fill(0)

    for (set in obj) {
        output[obj[set].size - 1]++
    }
    return output
};