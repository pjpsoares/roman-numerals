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

function assertValueConversion(numericValue, romanValue) {
  describe(`when we instantiate with ${numericValue}`, () => {
    var romanNumberInstnace;
    beforeEach(() => {
      romanNumberInstnace = new RomanNumber(numericValue);
    });

    it(`should return the toInt as ${numericValue}`, () => {
      expect(romanNumberInstnace.toInt()).to.equal(numericValue);
    });

    it(`should return the toString as ${romanValue}`, () => {
      expect(romanNumberInstnace.toString()).to.equal(romanValue);
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

  assertValueConversion(1, 'I');
  assertValueConversion(3, 'III');
  assertValueConversion(4, 'IV');
  assertValueConversion(5, 'V');
  assertValueConversion(8, 'VIII');
  assertValueConversion(9, 'IX');
  assertValueConversion(10, 'X');
  assertValueConversion(14, 'XIV');
  assertValueConversion(19, 'XIX');
  assertValueConversion(1968, 'MCMLXVIII');
  assertValueConversion(2999, 'MMCMXCIX');
  assertValueConversion(3000, 'MMM');
  assertValueConversion(3999, 'MMMCMXCIX');

});
