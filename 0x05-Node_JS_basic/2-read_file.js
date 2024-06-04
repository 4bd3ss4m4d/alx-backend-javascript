const fs = require("fs");

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error("Cannot load the database");
  }

  const readData = fs.readFileSync(path, "utf8");
  const lns = readData.split("\n");
  const hashT = {};
  let allStudents = -1;
  for (const ln of lns) {
    if (ln.trim() !== "") {
      const col = ln.split(",");
      const fld = col[3];
      const firstName = col[0];
      if (allStudents >= 0) {
        if (!Object.hasOwnProperty.call(hashT, fld)) {
          hashT[fld] = [];
        }
        hashT[fld] = [...hashT[fld], firstName];
      }
      allStudents += 1;
    }
  }
  console.log(`Number of students: ${allStudents}`);
  for (const key in hashT) {
    if (Object.hasOwnProperty.call(hashT, key)) {
      console.log(
        `Number of students in ${key}: ${hashT[key].length}. List: ${hashT[
          key
        ].join(", ")}`
      );
    }
  }
}

module.exports = countStudents;
