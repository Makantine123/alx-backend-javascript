const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber sum feature', function () {
  const type = 'SUM';
  it('should return the sum of twon rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1.5, 3.7), 6);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 3), 4);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1.2, 0.7), 2);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 0), 1);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 0, 0), 0);
  });


  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, -1, -5.5), -6);
  });


  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 0), 1);
  });


  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, -1, 5.5), 5);
  });

});

describe('calculateNumber subtract feature', function () {
  const type = 'SUBTRACT';
  it('should return the subtraction of twon rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1.5, 3.7), -2);
  });

  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 3), -2);
  });

  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1.2, 0.7), 0);
  });

  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 3.7), -3);
  });

  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 0, 0), 0);
  });


  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, -1, -5.5), 4);
  });


  it('should return the subtraction of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, -5.5), 6);
  });

  it('should return the sub of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, -1, 5.5), -7);
  });

});

describe('calculateNumber divide feature', function () {
  const type = 'DIVIDE';
  it('should return the divide of twon rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1.5, 3.7), 0.5);
  });

  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 3), 0.3);
  });

  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1.2, 0.7), 1);
  });

  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, 3.7), 0.3);
  });

  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 0, 0), 'Error');
  });


  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, -1, -5.5), 0.2);
  });

  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, 1, -5.5), -0.2);
  });

  it('should return the divide of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(type, -1, 5.5), -0.2);
  });

});
