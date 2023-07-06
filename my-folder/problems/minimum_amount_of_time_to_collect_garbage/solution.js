/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let mTruck = false;
    let pTruck = false;
    let gTruck = false;
    for (let i = 0; i < garbage.length; i++) {
        if (garbage[i].includes("M")) mTruck = i;
        if (garbage[i].includes("P")) pTruck = i;
        if (garbage[i].includes("G")) gTruck = i;
    }
    let mins = 0;
    for (let i = 0; i < garbage.length; i++) {
        const travelTime = i === 0 ? 0 : travel[i-1]
        if (mTruck !== false && mTruck >= i) {
            mins += travelTime
            mins += garbage[i].split("M").length - 1
        }
        if (pTruck !== false && pTruck >= i) {
            mins += travelTime
            mins += garbage[i].split("P").length - 1
        }
        if (gTruck !== false && gTruck >= i) {
            mins += travelTime
            mins += garbage[i].split("G").length - 1
        }
    }
    return mins
};