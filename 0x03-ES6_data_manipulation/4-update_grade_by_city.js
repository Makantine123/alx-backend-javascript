export default function updateStudentGradeByCity(students, city, newGrades) {
  const newStudents = new Map();
  newGrades.forEach((gradeElement) => {
    newStudents.set(gradeElement.studentId, gradeElement.grade);
  });
}
