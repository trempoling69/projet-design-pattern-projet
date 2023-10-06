const { add, multiplyArray, calculateFactorial } = require('./math');

describe('Add function', () => {
  it('should add numbers', () => {
    expect(add(5, 11)).toBe(16);
  });
  it('should add negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
  it('should add a ppositive and negative number', () => {
    expect(add(2, -3)).toBe(-1);
  });
});

describe('Multiplying an Array of Numbers Function', () => {
  it('should multiply an array of positive numbers', () => {
    const result = multiplyArray([2, 3, 4]);
    expect(result).toBe(24);
  });

  it('should return 0 when multiplying an empty array', () => {
    const result = multiplyArray([]);
    expect(result).toBe(0);
  });

  it('should handle negative numbers', () => {
    const result = multiplyArray([-2, 3, -4]);
    expect(result).toBe(24);
  });

  it('should handle decimal numbers', () => {
    const result = multiplyArray([0.5, 0.25, 2]);
    expect(result).toBe(0.25);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => multiplyArray(123)).toThrow('Argument must be an array of numbers');
  });
});

describe('Calculate factoriel', () => {
  it('should be a number', () => {
    expect(() => calculateFactorial('hip').toThrow('argument must be an number'));
  });
  it('should return 1 if n = 0', () => {
    expect(() => calculateFactorial(0).toBe(1));
  });
  it('Should throw an errror if negative number', () => {
    expect(() => calculateFactorial(-5).toThrow('Input must be a non-negative number'));
  });
  it('Should return the right factorial', () => {
    expect(calculateFactorial(2)).toBe(2);
    expect(calculateFactorial(4)).toBe(24);
    expect(calculateFactorial(8)).toBe(40320);
    expect(calculateFactorial(21)).not.toBe(42);
  });
});
