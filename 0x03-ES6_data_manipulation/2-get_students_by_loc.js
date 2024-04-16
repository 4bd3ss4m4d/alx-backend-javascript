export default function getStudentsByLocation(studentsList, city) {
  const studentsByLocationList = studentsList.filter(
    (student) => student.location === city,
  );

  return studentsByLocationList;
}
