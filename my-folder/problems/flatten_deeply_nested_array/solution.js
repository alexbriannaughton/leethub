/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
function flat(arr, n, ans = [], level = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' || level === n) {
      ans.push(arr[i]);
    } else {
      flat(arr[i], n, ans, level + 1);
    }
  }

  return ans;
}