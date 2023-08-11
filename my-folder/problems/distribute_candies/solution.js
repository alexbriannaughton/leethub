/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    // const obj = {};
    // for (candy of candyType) {
    //     if (!obj[candy]) obj[candy] = true;
    // }
    // return Math.min(candyType.length / 2, Object.values(obj).length)
    
    return Math.min(candyType.length / 2, new Set(candyType).size);
};