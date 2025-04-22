function countWellFormedParenthesis(n) {
    let count = 0;

    function generate(open, close) {
        if (open === n && close === n) {
            count++;
            return;
        }

        if (open < n) generate(open + 1, close);
        if (close < open) generate(open, close + 1);
    }

    generate(0, 0);
    return count;
}

module.exports = { countWellFormedParenthesis };