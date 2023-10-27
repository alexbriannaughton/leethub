/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    // const iOfCh = word.indexOf(ch);
    // if (iOfCh === -1) return word;
    // let output = word.slice(iOfCh + 1);
    // let i = 0;
    // while (i <= iOfCh) {
    //     output = word[i] + output
    //     i++
    // }
    // return output

    const i = word.indexOf(ch);
    if (i === -1) return word;
    const a = word.slice(0, i + 1).split('').reverse().join('');
    const b = word.slice(i + 1)
    return a + b;

};