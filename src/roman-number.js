const MIN_RANGE = 1;
const MAX_RANGE = 3999;

function RomanNumber(value) {
  if (value === undefined || value === null || value === '') {
    throw new Error('value required');
  }

  if (Number.isInteger(value)) {
    if (value < MIN_RANGE || value > MAX_RANGE) {
      throw new Error('invalid range');
    }
  }
}

module.exports = RomanNumber;
