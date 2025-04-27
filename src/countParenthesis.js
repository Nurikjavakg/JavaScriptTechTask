function countWellFormedParenthesis(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = (result * 2 * (2 * i + 1)) / (i + 2);
    }
    return Math.floor(result);
}

module.exports = { countWellFormedParenthesis };