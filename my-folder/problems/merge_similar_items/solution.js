/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const obj = {};

    for (item of items1.concat(items2)) {
        if (obj[item[0]]) obj[item[0]] += item[1]
        else obj[item[0]] = item[1]
    }

    const ret = []

    for (value in obj) {
        ret.push([value, obj[value]])
    }

    return ret
};