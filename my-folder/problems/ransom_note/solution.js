/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false

    let obj = {}

    for (let letter in magazine) {
        obj[magazine[letter]] ? obj[magazine[letter]] += 1 : obj[magazine[letter]] = 1
    }

    for (let letter in ransomNote) {
        if (obj[ransomNote[letter]] > 0) {
            obj[ransomNote[letter]] -= 1
        } else return false
    }

    return true
};