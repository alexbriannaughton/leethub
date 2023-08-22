/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a)
    let output = [deck.shift()];

    for (curCard of deck) {
        output.unshift(curCard, output.pop());
    }
    return output;
};