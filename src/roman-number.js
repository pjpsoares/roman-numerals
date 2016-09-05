function RomanNumber(value) {
  if (value === undefined || value === null || value === '') {
    throw new Error('value required');
  }
}

module.exports = RomanNumber;
