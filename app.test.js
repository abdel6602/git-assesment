const {add, subtract} = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts', () => {
    expect(subtract(3, 2)).toBe(1)
})
