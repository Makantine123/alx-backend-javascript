export default function getStudentsByLocation(students, city) {
  const myStudents = students.filter((students) => students.location === city);
  return myStudents;
}
