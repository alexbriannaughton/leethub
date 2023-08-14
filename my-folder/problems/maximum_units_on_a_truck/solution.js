/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;

    for (let i = 0; i < truckSize; i++) {
        if (!boxTypes[0]) break;
        totalUnits += boxTypes[0][1];
        if (--boxTypes[0][0] < 1) boxTypes.shift();
    }
    return totalUnits

    // for (let i = 0; i < boxTypes.length; i++) {
    //     const [boxesLeft, curUnits] = boxTypes[i];
    //     const boxesAdded = Math.min(boxesLeft, truckSize);
    //     truckSize -= boxesAdded;
    //     totalUnits += curUnits * boxesAdded;
    //     if (!truckSize) break;
    // }

    // return totalUnits
};