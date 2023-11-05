/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const a = s.split('').splice(s.length/2);
    const b = s;
    const vowels = 'a,e,i,o,u,A,E,I,O,U';
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i < s.length/2; i++) {
        if (vowels.includes(a[i])) aCount++;
        if (vowels.includes(b[i])) bCount++;
    }
    return aCount === bCount;
};