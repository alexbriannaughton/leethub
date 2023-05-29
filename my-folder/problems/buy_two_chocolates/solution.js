/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    const a = money - prices[0] - prices[1];
    return a < 0 ? money : a;
};