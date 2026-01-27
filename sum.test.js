const sum = require('./sum');

Test('suma de 3 +4 debe ser 7', () => {
    expect(sum(3, 4)).toBe(7);
});