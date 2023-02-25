/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr =  Array.from(String(num), Number)
    arr.sort()
    
    let num1 = parseInt(`${arr[0]}` + `${arr[2]}`) + parseInt(`${arr[1]}` + `${arr[3]}`)
    let num2 = parseInt(`${arr[0]}` + `${arr[3]}`) + parseInt(`${arr[1]}` + `${arr[2]}`)
    
    return num1 >= num2 ? num1 : num2
};