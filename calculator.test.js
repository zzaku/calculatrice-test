import Calculator from './calculator';

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('add(5, 3) should return 8', () => {
        expect(calc.add(5, 3)).toBe(8);
    });

    test('sub(5, 3) should return 2', () => {
        expect(calc.sub(5, 3)).toBe(2);
    });

    test('mul(5, 3) should return 15', () => {
        expect(calc.mul(5, 3)).toBe(15);
    });

    test('div(6, 3) should return 2', () => {
        expect(calc.div(6, 3)).toBe(2);
    });

    test('div by zero should throw an error', () => {
        expect(() => calc.div(6, 0)).toThrow('Division by zero is not allowed');
    });
});