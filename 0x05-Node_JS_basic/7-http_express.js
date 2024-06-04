const express = require("express");
const fs = require("fs").promises;

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8")
      .then((data) => {
        const lns = data.split("\n");
        const hashT = {};
        let allStudents = -1;
        let res = "";
        for (const l of lns) {
          if (l.trim() !== "") {
            const cols = l.split(",");
            const fld = cols[3];
            const firstName = cols[0];
            if (allStudents >= 0) {
              if (!Object.hasOwnProperty.call(hashT, fld)) {
                hashT[fld] = [];
              }
              hashT[fld] = [...hashT[fld], firstName];
            }
            allStudents += 1;
          }
        }
        res += `Number of students: ${allStudents}\n`;
        for (const key in hashT) {
          if (Object.hasOwnProperty.call(hashT, key)) {
            res += `Number of students in ${key}: ${
              hashT[key].length
            }. List: ${hashT[key].join(", ")}\n`;
          }
        }
        resolve(res);
      })
      .catch(() => {
        reject(new Error("Cannot load the database"));
      });
  });
}

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res
        .status(500)
        .send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
