/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    if (s.length > 13 || s.length < 4) {
        return []
    }

    let allCombos = [];
    let iP1, iP2, iP3, iP4;

    for (let i = 1; i < 4; i++) {
        iP1 = s.slice(0, i)
        let remainder1 = s.slice(i)

        for (let j = 1; j < 4; j++) {
            iP2 = remainder1.slice(0, j)
            let remainder2 = remainder1.slice(j)

            for (let k = 1; k < 4; k++) {
                iP3 = remainder2.slice(0, k)
                let remainder3 = remainder2.slice(k)

                for (let l = 1; l < 4; l++) {
                    iP4 = remainder3.slice(0, l)
                    let remainder4 = remainder3.slice(l)

                    if (!remainder4) {
                        if (iP4 !== "") {
                            if (iP1 < 256 && iP2 < 256 && iP3 < 256 && iP4 < 256) {
                                if ((iP1.length === 1 || iP1[0] !== "0") &&
                                    (iP2.length === 1 || iP2[0] !== "0") &&
                                    (iP3.length === 1 || iP3[0] !== "0") &&
                                    (iP4.length === 1 || iP4[0] !== "0")) {
                                    const fullAdd = [iP1, iP2, iP3, iP4].join(".")
                                    if (!allCombos.includes(fullAdd)) {
                                        allCombos.push(fullAdd)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return allCombos
};