/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const res = {};
    for (let i = 0; i < arr1.length; i++) {
        res[arr1[i].id] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        const curObj = arr2[i];
        const curId = curObj.id
        if (res[curId]) {
            for (key in curObj) {
               res[curId][key] = curObj[key]; 
            }
        }
        else res[curId] = curObj;
    }
    return Object.values(res)
};