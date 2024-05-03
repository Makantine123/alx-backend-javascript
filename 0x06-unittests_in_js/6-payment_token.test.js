const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { it, describe } = require('mocha')
const getPaymentTokenFromAPI = require('./6-payment_token');

chai.use(chaiAsPromised);

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise', async function () {
    const res = await getPaymentTokenFromAPI(true);
    chai.assert.deepStrictEqual(res, { data: 'Successful response from the API' });
  });

  it('should return nothing', async function () {
    const response = await getPaymentTokenFromAPI(false);
    chai.assert.strictEqual(response, undefined);
    });
});
