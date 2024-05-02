/* This scriot contains calculateNumber function */

function calculateNumber (type, ar, br) {
  const a = Math.round(ar);
  const b = Math.round(br);
  let answer = 0;

  if (type === 'SUM') {
    answer = a + b;
    return answer;
  }

  if (type === 'SUBTRACT') {
    answer = a - b;
    return answer;
  }

  if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    answer = +(a / b).toFixed(1);
    return answer;
  }
}

module.exports = calculateNumber;
