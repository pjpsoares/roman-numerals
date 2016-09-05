const RomanNumber = require('../src/roman-number');
const expect = require('chai').expect;

function assertValueRequired(value) {
  describe(`when we instantiate with ${value}`, () => {
    it('should throw a value required error', () => {
      expect(() => { new RomanNumber(value); })
        .to.throw('value required');
    });
  });
}

describe('Roman Number', () => {

  assertValueRequired(null);
  assertValueRequired();
  assertValueRequired('');

});
