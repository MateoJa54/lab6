const math = require('./math');

test('el numero 6 es perfecto', () => {
    expect(math.isPerfect(6)).toBe(true);
});

test('el numero 10 no es perfecto', () => {
    expect(math.isPerfect(10)).toBe(false);
});

test('el numero 7 es primo', () => {
    expect(math.isPrime(7)).toBe(true);
});

test('el numero 8 no es primo', () => {
    expect(math.isPrime(8)).toBe(false);
});