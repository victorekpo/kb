const checkInt = require('./isInteger');

describe('Integer function', () => {
    const integers = [1, -1, 2,3, 4, -4]
    it.each(integers)('Shuld make sure the value is an integer', (num) => {
        expect(checkInt(num)).toBe(true);
    })
})