const { countWellFormedParenthesis } = require('./countParenthesis');
const { performance } = require('perf_hooks');

test('n = 1', () => {
    expect(countWellFormedParenthesis(1)).toBe(1);
});

test('n = 2', () => {
    expect(countWellFormedParenthesis(2)).toBe(2);
});

test('n = 3', () => {
    expect(countWellFormedParenthesis(3)).toBe(5);
});

test('n = 4', () => {
    expect(countWellFormedParenthesis(4)).toBe(14);
});

test('n = 5', () => {
    expect(countWellFormedParenthesis(5)).toBe(42);
});

test('n = 6', () => {
    expect(countWellFormedParenthesis(6)).toBe(132);
});


test('performance test n = 6', () => {
    const start = performance.now();
    const result = countWellFormedParenthesis(6);
    const end = performance.now();
    console.log(`n=6 => result = ${result}, time = ${(end - start).toFixed(2)}ms`);
    expect(result).toBe(132);
});
