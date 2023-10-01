/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // let output = ''
    // const sA = s.split(' ')
    // for (let i = 0; i < sA.length; i++) {
    //     const word = sA[i]
    //     for (let j = word.length - 1; j >= 0; j--) {
    //         output += word[j]
    //     }
    //     i === sA.length - 1 ? null : output += ' '
    // }
    // return output

    // return s.split(' ') // array of the words    
    //     .map(word => {
    //         return word.split('') // each word as an array of its own chars
    //             .reverse() // reverse that array of chars
    //             .join('') // join that array of chars into a word
    //     })
    //     // now we have an array of the words with their chars reversed.....
    //     .join(' ') // turn that array of words into a string with a space between each word

    // //aka..

    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};