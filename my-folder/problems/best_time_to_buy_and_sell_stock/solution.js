/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    // let result = 0

    // for (let i = 0; i < prices.length; i++) {

    //    for (let j = i+1; j < prices.length; j++) {
    //        if (prices[i] >= prices[j]) {
    //            continue
    //        } else {
    //            if (prices[j] - prices[i] > result) {
    //                result = prices[j] - prices[i]
    //            }
    //        }
    //    }
    // }

    // return result




    // let obj = {}

    // for (let i = 0; i < prices.length; i++) {
    //     if (!obj[prices[i]]) {
    //         obj[prices[i]] = 0
    //     }

    //     const lowerPrices = Object.keys(obj).filter(price => price < prices[i])

    //     for (let j = 0; j < lowerPrices.length; j++) {

    //         if (prices[i] - lowerPrices[j] > obj[lowerPrices[j]]) {
    //             obj[lowerPrices[j]] = prices[i] - lowerPrices[j]
    //         }

    //     }
    // }

    // return Math.max(...Object.values(obj))




    let maxProfit = 0
    
    let k = 0
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[k]) {
            let profit = prices[i] - prices[k]
            maxProfit = Math.max(profit, maxProfit)
        } else k = i
    }
    return maxProfit
};
