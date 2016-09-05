const MIN_RANGE = 1;
const MAX_RANGE = 3999;

const ROMAN_1 = 'I';
const ROMAN_5 = 'V';

function fromNumberToRoman(value) {
  if (value <= 3) {
    return ROMAN_1.repeat(value);
  } else if (value === 4 ) {
    return ROMAN_1 + ROMAN_5;
  } else if (value <= 8){
    return ROMAN_5 + fromNumberToRoman(value - 5);
  }
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
