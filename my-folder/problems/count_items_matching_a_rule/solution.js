/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let itemIdx
    if (ruleKey === "color") itemIdx = 1
    if (ruleKey === "type") itemIdx = 0
    if (ruleKey === "name") itemIdx = 2
    let count = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i][itemIdx] === ruleValue) count++
    }
    return count
};