const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function () {
  it('should return the sum of twon rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 0.7), 2);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(0, 1), 1);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(-1, -5.5), -6);
  });


  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });


  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(-1, 5.5), 5);
  });

});
