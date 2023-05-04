/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const most = Math.max(...candies);
    
    const result = [];

    for (stash of candies) {
        result.push(stash + extraCandies >= most)
    }

    return result
};