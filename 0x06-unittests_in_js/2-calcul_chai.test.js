const { expect } = require('chai');
const { it, describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber sum feature', function () {
  const type = 'SUM';
  it('should return the sum of twon rounded numbers', () => {
    expect(calculateNumber(type, 1.5, 3.7)).to.equal(6);
  });

  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 3)).to.equal(4);
  });

  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, 1.2, 0.7)).to.equal(2);
  });

  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 0)).to.equal(1);
  });

  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, 0, 0)).to.equal(0);
  });


  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, -1, -5.5)).to.equal(-6);
  });


  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 0)).to.equal(1);
  });


  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(type, -1, 5.5)).to.equal(5);
  });

});

describe('calculateNumber subtract feature', function () {
  const type = 'SUBTRACT';
  it('should return the subtraction of twon rounded numbers', () => {
    expect(calculateNumber(type, 1.5, 3.7)).to.equal(-2);
  });

  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 3)).to.equal(-2);
  });

  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber(type, 1.2, 0.7)).to.equal(0);
  });

  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 3.7)).to.equal(-3);
  });

  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber(type, 0, 0)).to.equal(0);
  });


  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber(type, -1, -5.5)).to.equal(4);
  });


  it('should return the subtraction of two rounded numbers', () => {
    expect(calculateNumber(type, 1, -5.5)).to.equal(6);
  });

  it('should return the sub of two rounded numbers', () => {
    expect(calculateNumber(type, -1, 5.5)).to.equal(-7);
  });

});

describe('calculateNumber divide feature', function () {
  const type = 'DIVIDE';
  it('should return the divide of twon rounded numbers', () => {
    expect(calculateNumber(type, 1.5, 3.7)).to.equal(0.5);
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 3)).to.equal(0.3);
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, 1.2, 0.7)).to.equal(1);
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, 1, 3.7)).to.equal(0.3);
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, 0, 0)).to.be.a('string');
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, 0, 0)).to.equal('Error');
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, -1, -5.5)).to.equal(0.2);
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, 1, -5.5)).to.equal(-0.2);
  });

  it('should return the divide of two rounded numbers', () => {
    expect(calculateNumber(type, -1, 5.5)).to.equal(-0.2);
  });

});
