import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './functions';

describe('Capitalize', () => {
  test('function exists', () => {
    expect(capitalize('test')).toBeDefined();
  });

  test('capitalizes words', () => {
    const testCases = [
      {
        word: 'test',
        expected: 'Test',
      },
      {
        word: 'word',
        expected: 'Word',
      },
      {
        word: 'remy',
        expected: 'Remy',
      },
    ];

    testCases.forEach((c) => {
      const result = capitalize(c.word);
      expect(result).toBe(c.expected);
    });
  });
});

describe('Reverse string', () => {
  test('function exists', () => {
    expect(reverseString('test')).toBeTruthy();
  });

  test('reverses strings', () => {
    const testCases = [
      {
        word: 'test',
        expected: 'tset',
      },
      {
        word: 'word',
        expected: 'drow',
      },
      {
        word: 'skjhsldfgsljdkfh',
        expected: 'hfkdjlsgfdlshjks',
      },
    ];

    testCases.forEach((c) => {
      const result = reverseString(c.word);
      expect(result).toBe(c.expected);
    });
  });
});

describe('Calculator', () => {
  test('object exists', () => {
    expect(calculator).toBeDefined();
  });

  test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtract two numbers', () => {
    expect(calculator.sub(10, 2)).toBe(8);
  });

  test('multiply two numbers', () => {
    expect(calculator.mult(6, 12)).toBe(72);
  });

  test('divide two numbers', () => {
    expect(calculator.div(120, 2)).toBe(60);
  });
});

describe('Caesar Cipher', () => {
  test('function exists', () => {
    expect(caesarCipher).toBeDefined();
  });

  test('basic test', () => {
    expect(caesarCipher('test', 3)).toBe('whvw');
  });

  test('has wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

describe('Analyse Array', () => {
  test('function exists', () => {
    expect(analyzeArray).toBeDefined();
  });

  test('returns object with average, min, max, length keys', () => {
    const keys = ['average', 'min', 'max', 'length'];
    keys.forEach((key) => {
      expect(analyzeArray([])).toHaveProperty(key);
    });
  });

  test('returns correct average', () => {
    expect(analyzeArray([1, 2, 3, 4]).average).toBeCloseTo(2.5);
  });

  test('returns correct minimum', () => {
    expect(analyzeArray([10, 2, 6, 4]).min).toBe(2);
  });

  test('returns correct maximum', () => {
    expect(analyzeArray([11234, 2423, 352, 4122]).max).toBe(11234);
  });

  test('returns correct length', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]).length).toBe(7);
  });
});
