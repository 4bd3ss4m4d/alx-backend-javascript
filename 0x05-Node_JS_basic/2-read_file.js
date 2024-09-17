// A function that reads a database file and prints the number of students and their fields

const fs = require('fs');

function countStudents(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const dbLines = fileContent.split('\n').filter((line) => line.trim() !== '');

    const headers = dbLines[0].split(',');
    const studentsData = dbLines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${studentsData.length}`);

    const fieldStatistics = {};

    studentsData.forEach((student) => {
      const studentFirstName = student[headers.indexOf('firstname')];
      const studentField = student[headers.indexOf('field')];

      if (!fieldStatistics[studentField]) {
        fieldStatistics[studentField] = { count: 0, students: [] };
      }

      fieldStatistics[studentField].count += 1;
      fieldStatistics[studentField].students.push(studentFirstName);
    });

    Object.entries(fieldStatistics).forEach(([field, { count, students }]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
