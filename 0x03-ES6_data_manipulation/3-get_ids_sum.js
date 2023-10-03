export default function getStudentIdsSum(arr) {
  const initialValue = 0;
  const sum = arr
    .reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);
  return sum;
}
