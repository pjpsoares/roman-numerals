const MIN_RANGE = 1;
const MAX_RANGE = 3999;

const ROMAN_1 = 'I';

function fromNumberToRoman(value) {
  if (value < 4) {
    return ROMAN_1.repeat(value);
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
