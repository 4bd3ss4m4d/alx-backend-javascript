const http = require("http");
const fs = require("fs").promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8")
      .then((data) => {
        const lns = data.split("\n");
        const hashT = {};
        let allStudents = -1;
        let finalResult = "";
        for (const line of lns) {
          if (line.trim() !== "") {
            const cols = line.split(",");
            const fld = cols[3];
            const firstName = cols[0];
            if (allStudents >= 0) {
              if (!Object.hasOwnProperty.call(hashtable, fld)) {
                hashtable[fld] = [];
              }
              hashtable[fld] = [...hashtable[fld], firstName];
            }
            allStudents += 1;
          }
        }
        finalResult += `Number of students: ${allStudents}\n`;
        for (const key in hashtable) {
          if (Object.hasOwnProperty.call(hashtable, key)) {
            finalResult += `Number of students in ${key}: ${
              hashtable[key].length
            }. List: ${hashtable[key].join(", ")}\n`;
          }
        }
        resolve(finalResult);
      })
      .catch(() => {
        reject(new Error("Cannot load the database"));
      });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404);
    res.end("Not foundx");
  }
});

app.listen(1245);

module.exports = app;
