/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const common = {};

    for (let list1Index = 0; list1Index < list1.length; list1Index++) {
        const currentWord = list1[list1Index];
        const list2Index = list2.indexOf(currentWord);

        if (list2Index !== -1) {
            const indexSum = list1Index + list2Index;

            common[indexSum] !== undefined
                ? common[indexSum].push(currentWord)
                : common[indexSum] = [currentWord];
        }

    }
    
    return Object.values(common)[0];
};