const RomanNumber = require('../src/roman-number');
const expect = require('chai').expect;

function assertValueRequiredError(value) {
  describe(`when we instantiate with ${value}`, () => {
    it('should throw a value required error', () => {
      expect(() => { new RomanNumber(value); })
        .to.throw('value required');
    });
  });
}

function assertInvalidRangeError(value) {
  describe(`when we instantiate with ${value}`, () => {
    it('should throw an invalid range error', () => {
      expect(() => { new RomanNumber(value); })
        .to.throw('invalid range');
    });
  });
}

describe('Roman Number', () => {

  assertValueRequiredError(null);
  assertValueRequiredError();
  assertValueRequiredError('');
  assertInvalidRangeError(0);
  assertInvalidRangeError(4000);
  assertInvalidRangeError(10000);
});
