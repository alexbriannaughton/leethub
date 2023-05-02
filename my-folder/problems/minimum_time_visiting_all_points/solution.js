/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let [x, y] = points[0]
    let secs = 0
    for (let i = 1; i < points.length; i++) {
        const nextX = points[i][0]
        const nextY = points[i][1]
        const xTime = Math.abs(x - nextX)
        const yTime = Math.abs(y - nextY)
        secs += Math.max(xTime, yTime)
        x = nextX
        y = nextY
    }
    return secs
};