const assert = require('assert');
const request = require('request');
const { app, server } = require('./api.js');

const baseURL = 'http://localhost:7865';

describe('Index page', () => {
  // Testing correct status code
  it('Correct status code?', (done) => {
    request.get(baseURL, (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });

  // Testing correct result
  it('Correct result?', (done) => {
    request.get(baseURL, (error, response, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });

  // Other tests can be added here

  // Testing if the server is running
  it('Server', () => {
    assert.strictEqual(server.listening, true);
  });

  after(() => {
    server.close();
  });
});
