const { countWellFormedParenthesis } = require('../src/countParenthesis');
const { performance } = require('perf_hooks');

describe('Performance tests', () => {
    test('performance test n = 6', () => {
        const start = performance.now();
        const result = countWellFormedParenthesis(6);
        const end = performance.now();
        const duration = end - start;

        console.log(`n=6 => result = ${result}, time = ${duration.toFixed(2)}ms`);

        const expectedMaxTimeMs = 1000; // 1 секунда
        expect(duration).toBeLessThan(expectedMaxTimeMs);
        expect(result).toBe(132);
    });
});