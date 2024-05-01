/* Script counts students in database.csv asynchronously */

const fs = require('fs');

const countStudents = (param) => new Promise((resolve, reject) => {
  fs.readFile(param, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.toString('utf-8').trim().split('\n');
      const studentNumber = lines.length - 1;
      const grouplines = {};

      for (let i = 1; i <= studentNumber; i += 1) {
        const studentRecord = lines[i].split(',');
        if (!grouplines[studentRecord[3]]) {
          grouplines[studentRecord[3]] = [];
        }
        grouplines[studentRecord[3]].push(studentRecord[0]);
      }
      console.log(`Number of students: ${studentNumber}`);
      for (const key in grouplines) {
        if (key) {
          console.log(`Number of students in ${key}: ${grouplines[key].length}. List: ${grouplines[key].join(', ')}`);
        }
      }
      resolve();
    }
  });
});

module.exports = countStudents;
