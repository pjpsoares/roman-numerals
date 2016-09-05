const MIN_RANGE = 1;
const MAX_RANGE = 3999;

const ROMAN_NUMBERS = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};
const DECIMAL_NUMBERS = [1, 5, 10, 50, 100, 500, 1000];

function fromNumberToRomanAux(digit, one, five, ten) {
  if (digit < one) {
    return '';
  } else if (digit <= 3) {
    return one.repeat(digit);
  } else if (digit === 4 ) {
    return one + five;
  } else if (digit <= 8){
    return five + fromNumberToRomanAux(digit - 5, one, five, ten);
  } else {
    return one + ten;
  }
}

function fromNumberToRoman(value) {
  const digits = String(value).split('').reverse();
  var result = '';

  for (var i = 0; i < digits.length; i++) {
    // We get the index * 2 of the array so we jump the 5/50/500, then we fetch the +1 and +2.
    // The next 5 value and the next 10 value.
    result = fromNumberToRomanAux(
      Number(digits[i]),
      ROMAN_NUMBERS[DECIMAL_NUMBERS[i * 2]],
      ROMAN_NUMBERS[DECIMAL_NUMBERS[i * 2 + 1]],
      ROMAN_NUMBERS[DECIMAL_NUMBERS[i * 2 + 2]]
    ) +  result;
  }

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
