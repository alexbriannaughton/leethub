/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    // nested loop solution
    // let count = 0;
    // for (let i = 0; i < words.length - 1; i++) {
    //     const curRev = words[i].split('').reverse().join('');
    //     for (let j = i + 1; j < words.length; j++) {
    //         if (curRev === words[j]) {
    //             count++;
    //             break;
    //         }
    //     }
    // }
    // return count;

    // hashmap solution
    let count = 0;
    const obj = {};
    for (let i = 0; i < words.length; i++) {
        if (obj[words[i]]) count++;
        const curRev = words[i].split('').reverse().join('');
        obj[curRev] = true;
    }
    return count;
};