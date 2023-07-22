/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    const visited = ["0,0"];
    const cur = [0, 0]
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "N") cur[0] += 1;
        else if (path[i] === "E") cur[1] += 1;
        else if (path[i] === "S") cur[0] -= 1;
        else if (path[i] === "W") cur[1] -= 1;
        const curStr = cur.join(",");
        if (visited.includes(curStr)) return true;
        visited.push(curStr);
    }
    return false;
};