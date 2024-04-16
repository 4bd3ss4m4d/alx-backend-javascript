export default function getStudentIdsSum(studentsList) {
  const sumStudentIds = studentsList.reduce(
    (sum, student) => sum + student.id,
    0,
  );

  return sumStudentIds;
}
