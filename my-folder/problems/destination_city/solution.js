/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let obj = {}
    for (let i = 0; i < paths.length; i++) {
        obj[paths[i][0]] = false
        if (obj[paths[i][1]] === undefined) obj[paths[i][1]] = true
        else obj[paths[i][1]] = false
    }
    for (destination in obj) {
        if (obj[destination]) return destination
    }
};