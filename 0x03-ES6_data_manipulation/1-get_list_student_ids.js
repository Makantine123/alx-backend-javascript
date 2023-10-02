export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const mylist = arr.map((arr) => arr.id);
  return mylist;
}
