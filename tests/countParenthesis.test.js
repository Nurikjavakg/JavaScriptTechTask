const { countWellFormedParenthesis } = require('../src/countParenthesis');

describe('Count Well Formed Parentheses', () => {
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
});