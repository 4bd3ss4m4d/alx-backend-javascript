export default function getListStudentIds(objsArr) {
  if (!Array.isArray(objsArr)) {
    return [];
  }

  const studentsIds = objsArr.map((obj) => obj.id);

  return studentsIds;
}
