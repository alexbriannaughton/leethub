/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
        const p1 = numberize(pattern);
    const s1 = numberize(s.split(" "));
    
    function numberize(word) {
        let counter = 1;
        const obj = {};
        let nOfPattern = "";
        for (let i = 0; i < word.length; i++) {
            let cur = word[i];
            if (cur === 'constructor') cur = '_constructor_'
            if (!obj[cur]) {
                obj[cur] = counter;
                counter++;
            }
            nOfPattern += obj[cur];
        }
        return nOfPattern;
    }
    
    return p1 === s1;
};