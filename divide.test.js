const divide = require('./divide')

test('divide 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
}); 

test('divide 2 / 0 to equal Infinity', () => {
    expect(divide(2, 0)).toBe(Infinity);
});