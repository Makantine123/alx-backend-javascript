const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function () {
  it('should return the sum of twon rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 0.7), 2);
    assert.strictEqual(calculateNumber(1, 5.5), 7);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
