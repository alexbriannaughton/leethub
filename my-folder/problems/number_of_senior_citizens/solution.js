/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        if (details[i].slice(11, 13) > 60) count++;
    }
    return count;

    // return details.reduce((acc, item) => {
    //     const age = item.slice(11, 13);
    //     if (age > 60) {
    //         return acc + 1;
    //     }
    //     return acc;
    // }, 0)
};