/* Script contains getPaymentTokenFromAPI function */

const getPaymentTokenFromAPI = ((success) => {
  if (success === true) {
    return Promise.resolve({data: 'Successful response from the API' });
  }
});

module.exports = getPaymentTokenFromAPI;
