/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    //  can go 10 km per liter

    // after mainTank - 5
        // if (additionalTank > 1) additionalTank - 1
        // mainTank + 1
    let maxDist = 0
    while (mainTank > 0) {
        if (mainTank >= 5) {
            mainTank -= 5
            maxDist += 50
            if (additionalTank > 0) {
                additionalTank--
                mainTank++
            }
        }
        else {
            mainTank--
            maxDist += 10
        }
    }
    return maxDist
};