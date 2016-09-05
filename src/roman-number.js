const MIN_RANGE = 1;
const MAX_RANGE = 3999;

const NUMBER_TO_ROMAN = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};
const ROMAN_TO_DECIMAL = reverseMap(NUMBER_TO_ROMAN);
const DECIMAL_NUMBERS = [1, 5, 10, 50, 100, 500, 1000];
const SUBTRACTABLE_ROMANS = ['I', 'X', 'C'];

function reverseMap(map) {
  var reversedMap = {};

  for (var key in map) {
    reversedMap[map[key]] = key;
  }

  return reversedMap;
}

function fromNumberToRomanAux(digit, one, five, ten) {
  if (digit < one) {
    return '';
  } else if (digit <= 3) {
    return one.repeat(digit);
  } else if (digit === 4 ) {
    return one + five;
  } else if (digit <= 8){
    return five + one.repeat(digit - 5);
  } else {
    return one + ten;
  }
}

function fromNumberToRoman(value) {
  const digits = String(value).split('').reverse();
  var result = '';

  digits.forEach((digit, i) => {
    digit = Number(digit);

    // We get the index * 2 of the array so we jump the 5/50/500, then we fetch the +1 and +2.
    // The next 5 value and the next 10 value.
    result = fromNumberToRomanAux(
      digit,
      NUMBER_TO_ROMAN[DECIMAL_NUMBERS[i * 2]],
      NUMBER_TO_ROMAN[DECIMAL_NUMBERS[i * 2 + 1]],
      NUMBER_TO_ROMAN[DECIMAL_NUMBERS[i * 2 + 2]]
    ) +  result;
  });

  return result;
}

function assertIsRomanSubtractable(roman) {
  if (SUBTRACTABLE_ROMANS.indexOf(roman) === -1) {
    throw new Error('invalid value');
  }
}

function fromRomanToNumber(value) {
  const romans = value.split('').reverse();
  var result = 0;
  var max = 0;
  var decimal;
  var previousAction = 0;

  romans.forEach((roman) => {
    decimal = Number(ROMAN_TO_DECIMAL[roman]);
    if (isNaN(decimal)) {
      throw new Error('invalid value');
    }

    max = Math.max(max, decimal);
    if (decimal < max) {
      assertIsRomanSubtractable(roman);
      // We can only subtract one value
      if (previousAction < 1) {
        throw new Error('invalid value');
      }

      result -= decimal;
      previousAction = decimal * -1;
    } else {
      result += decimal;
      previousAction = decimal;
    }
  });

  return result;
}

function RomanNumber(value) {
  if (value === undefined || value === null || value === '') {
    throw new Error('value required');
  }

  if (Number.isInteger(value)) {
    if (value < MIN_RANGE || value > MAX_RANGE) {
      throw new Error('invalid range');
    }

    this.numeric = value;
    this.roman = fromNumberToRoman(value);
  } else {
    this.roman = value;
    this.numeric = fromRomanToNumber(value);
  }
}

function toInt() {
  return this.numeric;
}

function toString() {
  return this.roman;
}

RomanNumber.prototype = {
  toInt,
  toString
};

module.exports = RomanNumber;
