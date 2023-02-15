/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let record = []

    for (let i = 0; i < operations.length; i++) {
        let val
        if (operations[i] === "+") {
            val = parseInt(record[record.length - 1]) + parseInt(record[record.length - 2])
            record.push(val)
        }
        else if (operations[i] === "D") {
            val = record[record.length - 1] * 2
            record.push(val)
        }
        else if (operations[i] === "C") {
            record.pop()
        }
        else {
            record.push(parseInt(operations[i]))
        }

    }

    if (record.length) {
        return record.reduce((a, b) => a + b)
    }

    else return 0
};