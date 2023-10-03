export default function createIntTypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);

  int8view[position] = value;
  return new DataView(buffer);
}
