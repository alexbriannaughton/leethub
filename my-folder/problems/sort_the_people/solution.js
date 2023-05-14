/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const ppl = {};

    for (let i = 0; i < names.length; i++) {
        ppl[heights[i]] = names[i]
    }

    heights.sort((a, b) => b - a)

    return heights.map((height) => ppl[height])
};