const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !(a || b);

const one = (a, b) => (a || b) && !(a && b);

const truthiness = a => Boolean(a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => a % 2 === 1;

const isEven = a => a % 2 === 0;

const isSquare = a => Boolean(Math.sqrt(a) % 1 === 0);

const startsWith = (char, string) => string.charAt(0) === char;

const containsVowels = string => {
  return string
    .split("")
    .some(letter => ["a", "e", "i", "o", "u"].includes(letter.toLowerCase()));
};

const isLowerCase = string => string === string.toLowerCase();

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
