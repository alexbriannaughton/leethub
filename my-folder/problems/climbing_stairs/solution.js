/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // const dp = Array(n - 1).fill(0)
    // dp.push(1, 1);
    // let i = n - 2;
    // while (i >= 0) {
    //     dp[i] = dp[i + 1] + dp[i + 2];
    //     i--;
    // }
    // return dp[0];

    let one = 1;
    let two = 1;
    let i = 0;
    while (i < n - 1) {
        const temp = one;
        one += two;
        two = temp;
        i++;
    }
    return one
};