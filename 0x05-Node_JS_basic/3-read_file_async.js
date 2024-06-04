const fs = require("fs").promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8")
      .then((data) => {
        const ln = data.split("\n");
        const hashT = {};
        let allStudents = -1;
        for (const l of ln) {
          if (l.trim() !== "") {
            const col = l.split(",");
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
              `Number of students in ${key}: ${
                hashT[key].length
              }. List: ${hashT[key].join(", ")}`
            );
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error("Cannot load the database"));
      });
  });
}

module.exports = countStudents;
