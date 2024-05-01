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
      const message = [];
      console.log(`Number of students: ${studentNumber}`);
      message.push(`Number of students: ${studentNumber}`);
      for (const key in grouplines) {
        if (key) {
          console.log(`Number of students in ${key}: ${grouplines[key].length}. List: ${grouplines[key].join(', ')}`);
          message.push(`Number of students in ${key}: ${grouplines[key].length}. List: ${grouplines[key].join(', ')}`);
        }
      }
      resolve(message);
    }
  });
});

const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((message) => {
        for (let k = 0; k < message.length; k += 1) {
          res.write(`${message[k]}`);
          if (k + 1 < message.length) {
            res.write('\n');
          }
        }
        res.end();
      })
      .catch((error) => {
        res.end(error instanceof Error ? error.message : error.toString());
      });
  }
});

app.listen(1245);

module.exports = app;
