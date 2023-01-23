/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let aArray= [];
    let bArray= [];
    if (n === 1) return 1
   trust.forEach((arr) => {
       aArray.push(arr[0])
       bArray.push(arr[1])
   })
   
   const counts = {}
   for (const num of bArray) {
       counts[num] = counts[num] ? counts[num] + 1 : 1
   }
   
   let possJudge = -1
   for (const key in counts) {
       if (counts[key] === n - 1){
           possJudge = parseInt(key)
       }
   }
   
   if (aArray.includes(possJudge)) {
       possJudge = -1
   } 
   return possJudge
 
};