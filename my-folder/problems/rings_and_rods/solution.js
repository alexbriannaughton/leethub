/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const obj = {}
    for(let i = 0; i < rings.length; i += 2) {
        if (obj[rings[i + 1]]) {
            if (!obj[rings[i + 1]].includes(rings[i])) {
                obj[rings[i + 1]].push(rings[i])
            }
        } else {
            obj[rings[i + 1]] = [rings[i]]
        }
    }
    let answer = 0
    for (arr in obj) {
        if (obj[arr].length === 3) answer++
    }
    return answer
};