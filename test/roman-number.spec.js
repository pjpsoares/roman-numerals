const RomanNumber = require('../src/roman-number');
const expect = require('chai').expect;

function assertInvocationWithNewThrowError(value, error) {
  describe(`when we instantiate with ${value}`, () => {
    it('should throw a value required error', () => {
      expect(() => { new RomanNumber(value); })
        .to.throw(error);
    });
  });
}

function assertInvocationWithoutNewThrowError(value, error) {
  describe(`when we instantiate with ${value}`, () => {
    it('should throw a value required error', () => {
      expect(() => { new RomanNumber(value); })
        .to.throw(error);
    });
  });
}

function assertValueRequiredError(value) {
  assertInvocationWithNewThrowError(value, 'value required');
  assertInvocationWithoutNewThrowError(value, 'value required');
}

function assertInvalidRangeError(value) {
  assertInvocationWithNewThrowError(value, 'invalid range');
  assertInvocationWithoutNewThrowError(value, 'invalid range');
}

function assertInvalidValueError(value) {
  assertInvocationWithNewThrowError(value, 'invalid value');
  assertInvocationWithoutNewThrowError(value, 'invalid value');
}

function assertValueConversion(numericValue, romanValue) {
  describe(`when we instantiate with ${numericValue} using new`, () => {
    var romanNumberInstance;
    beforeEach(() => {
      romanNumberInstance = new RomanNumber(numericValue);
    });

    it(`should return the toInt as ${numericValue}`, () => {
      expect(romanNumberInstance.toInt()).to.equal(numericValue);
    });

    it(`should return the toString as ${romanValue}`, () => {
      expect(romanNumberInstance.toString()).to.equal(romanValue);
    });
  });

  describe(`when we instantiate with ${romanValue} using new`, () => {
    var romanNumberInstance;
    beforeEach(() => {
      romanNumberInstance = new RomanNumber(romanValue);
    });

    it(`should return the toInt as ${numericValue}`, () => {
      expect(romanNumberInstance.toInt()).to.equal(numericValue);
    });

    it(`should return the toString as ${romanValue}`, () => {
      expect(romanNumberInstance.toString()).to.equal(romanValue);
    });
  });

  describe(`when we instantiate with ${numericValue} not using new`, () => {
    var romanNumberInstance;
    beforeEach(() => {
      romanNumberInstance = RomanNumber(numericValue);
    });

    it(`should return the toInt as ${numericValue}`, () => {
      expect(romanNumberInstance.toInt()).to.equal(numericValue);
    });

    it(`should return the toString as ${romanValue}`, () => {
      expect(romanNumberInstance.toString()).to.equal(romanValue);
    });
  });

  describe(`when we instantiate with ${romanValue} not using new`, () => {
    var romanNumberInstance;
    beforeEach(() => {
      romanNumberInstance = new RomanNumber(romanValue);
    });

    it(`should return the toInt as ${numericValue}`, () => {
      expect(romanNumberInstance.toInt()).to.equal(numericValue);
    });

    it(`should return the toString as ${romanValue}`, () => {
      expect(romanNumberInstance.toString()).to.equal(romanValue);
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

  assertInvalidValueError('1473');
  assertInvalidValueError('CD1X');
  assertInvalidValueError('error');
  assertInvalidValueError('XIIX');
  assertInvalidValueError('VX');
  assertInvalidValueError('IC');
  assertInvalidValueError('IM');
  assertInvalidValueError('IL');
  assertInvalidValueError('IIII');
  assertInvalidValueError('VV');
  assertInvalidValueError('MMMMCMXCIX');
  assertInvalidValueError('MMMMDMXCIX');
  assertInvalidValueError('IXIV');

  assertValueConversion(1, 'I');
  assertValueConversion(3, 'III');
  assertValueConversion(4, 'IV');
  assertValueConversion(5, 'V');
  assertValueConversion(8, 'VIII');
  assertValueConversion(9, 'IX');
  assertValueConversion(10, 'X');
  assertValueConversion(14, 'XIV');
  assertValueConversion(19, 'XIX');
  assertValueConversion(1482, 'MCDLXXXII');
  assertValueConversion(1980, 'MCMLXXX');
  assertValueConversion(1968, 'MCMLXVIII');
  assertValueConversion(2999, 'MMCMXCIX');
  assertValueConversion(3000, 'MMM');
  assertValueConversion(3999, 'MMMCMXCIX');
});
