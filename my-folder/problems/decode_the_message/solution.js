/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const keyObj = {};
    let count = 97;
    keyObj[" "] = " ";

    for (let i = 0; i < key.length; i++) {
        if (!keyObj[key[i]]) {
            keyObj[key[i]] = String.fromCharCode(count)
            count++
        }
    }

    let answer = "";
    for (let i = 0; i < message.length; i++) {
        answer += keyObj[message[i]]
    }

    return answer
};