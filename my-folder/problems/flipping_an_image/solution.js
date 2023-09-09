/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (arr of image) {
        for (let p1 = 0; p1 < arr.length / 2; p1++) {
            const p2 = arr.length - 1 - p1
            const temp = arr[p1] ? 0 : 1
            arr[p1] = arr[p2] ? 0 : 1
            arr[p2] = temp
        }
    }
    return image
};