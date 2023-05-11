/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    nums1 = [ -1 ].concat(nums1);
    nums2 = [ -1 ].concat(nums2);

    let [h, w] = [ nums1.length, nums2.length ];
    
    dp = new Array( h ).fill( 0 ).map( () => new Array( w ).fill(0) );

    for (let i = 1; i < h; i++) {
        for (let j = 1; j < w; j++) {
            if (nums1[i] === nums2[j]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[h-1][w-1]
};