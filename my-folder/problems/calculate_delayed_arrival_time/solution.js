/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    const ans = arrivalTime + delayedTime;

    return ans > 23 ? ans - 24 : ans
};