export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divode by 0');
  } else {
    return numerator / denominator;
  }
}
