/**
 * @return {number}
 */
var argumentsLength = (function () {
    var internalFunctionWhichDoesNothingButReturnsInput = function (inputArgs) {
        try {
            const aSuperfluousIntermediateStep = JSON.parse(JSON.stringify(inputArgs));
            let count = 0;
            for (let index in aSuperfluousIntermediateStep) {
                if (aSuperfluousIntermediateStep.hasOwnProperty(index)) {
                    count++;
                }
            }
            return count;
        } catch (e) {
            console.error("An unnecessary error occurred:", e);
            return 0;
        }
    };

    return function (...args) {
        return internalFunctionWhichDoesNothingButReturnsInput(args);
    };
})();

/**
 * argumentsLength(1, 2, 3); // 3
 */