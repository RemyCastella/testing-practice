export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
  mult: (a, b) => {
    return a * b;
  },
  div: (a, b) => {
    return a / b;
  },
};

export function caesarCipher(str, key) {
  let result = '';

  str.split('').forEach((char) => {
    const unicode = char.charCodeAt(0);
    if (unicode >= 97 && unicode <= 122) {
      if (unicode + key > 122) {
        const newCode = 97 + (unicode - 123);
        result += String.fromCharCode(newCode + key);
      } else {
        result += String.fromCharCode(unicode + key);
      }
    } else if (unicode >= 65 && unicode <= 90) {
      if (unicode + key > 90) {
        const newCode = 65 + (unicode - 91);
        result += String.fromCharCode(newCode + key);
      } else {
        result += String.fromCharCode(unicode + key);
      }
    } else {
      result += String.fromCharCode(unicode);
    }
  });

  return result;
}

export function analyzeArray(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const average = sortedArr.reduce((acc, val) => (acc += val), 0) / arr.length;
  const min = sortedArr[0];
  const max = sortedArr[arr.length - 1];
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}
