/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    const min = Math.min(s1.length, s2.length, s3.length)
    let i;
    for (i = 0; i < min; i++) {
        const curS1 = s1[i];
        const curS2 = s2[i];
        const curS3 = s3[i];
        if (curS1 !== curS2 || curS2 !== curS3) break;

    }
    if (i === 0) return -1;
    return (s1.length - i) + (s2.length - i) + (s3.length - i);
};