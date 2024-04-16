export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrade = newGrades.find((g) => g.studentId === student.id);

      return {
        ...student,
        grade: updatedGrade ? updatedGrade.grade : 'N/A',
      };
    });
}
