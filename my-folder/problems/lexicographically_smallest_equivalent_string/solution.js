/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const obj = {};

  for (let i = 0; i < s1.length; i++) {
    const curr = [s1[i], s2[i]]
    if (!obj[s1[i]]) {
      obj[s1[i]] = new Set(curr)
    } else {
      obj[s1[i]].add(s1[i])
      obj[s1[i]].add(s2[i])
    }
    if (!obj[s2[i]]) {
      obj[s2[i]] = new Set(curr)
    } else {
      obj[s2[i]].add(s2[i])
      obj[s2[i]].add(s1[i])
    }
  }
  
  for (key in obj) {
    if (obj[key].size === 2) {
      continue
    }

    const array = Array.from(obj[key])
    obj[key].forEach((letter) => {
      for (n of array) {
        obj[letter].add(n)
      }
    })
  }

  for (key in obj) {
    obj[key] = Array.from(obj[key]).sort()
  }

  let str = ""

  for (let i = 0; i < baseStr.length; i++) {
    if (obj[baseStr[i]]) {
      str += obj[baseStr[i]][0]
    } else str += baseStr[i]
  }

  return str
};