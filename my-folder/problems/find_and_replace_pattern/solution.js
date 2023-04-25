/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let obj = {}
    let n = 1
    let pat = pattern.split("").map((letter) => {
        if (!obj[letter]) {
            obj[letter] = n
            n++
        }
        return obj[letter]
    })

    let answer = []
    for (let i = 0; i < words.length; i++) {
        const obj2 = {}
        n = 1
        const localPat = words[i].split("").map((letter) => {
            if (!obj2[letter]) {
                obj2[letter] = n
                n++
            }
            return obj2[letter]
        })
        let same = true
        for (let j = 0; j < localPat.length; j++) {
            if (localPat[j] !== pat[j]) {
                same = false
                break
            }
        }
        if (same) answer.push(words[i])
    }
    return answer
};