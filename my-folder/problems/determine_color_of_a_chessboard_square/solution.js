/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const l = coordinates[0];
    const n = coordinates[1];

    if (l.charCodeAt(0) % 2 !== 0 && n % 2 !== 0) return false;
    if (l.charCodeAt(0) % 2 === 0 && n % 2 === 0) return false;

    return true;
};