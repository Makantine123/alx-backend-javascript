/* Script creates HTTP server using Nodes HHTP module */

const fs = require('fs');

function countStudents(param) {
  return new Promise((resolve, reject) => {
    fs.readFile(param, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      let lines = data.trim().split('\n');
      const numberStudents = lines.length - 1;

      const msg = [`Number of students: ${numberStudents}`];
      console.log(msg[0].trim());

      lines = lines.map((item) => item.split(','));
      const groupedLines = {};
      for (const i in lines) {
        if (i !== 0) {
          if (!groupedLines[lines[i][3]]) {
            groupedLines[lines[i][3]] = [];
          }
          groupedLines[lines[i][3]].push(lines[i][0]);
        }
      }
      delete groupedLines.field;

      for (const key in groupedLines) {
        if (key !== 0) {
          const firstnames = groupedLines[key].join(' ,').trim();
          const msg2 = `Number of students in ${key}: ${groupedLines[key].length}. List: ${firstnames}`;
          msg.push(msg2.trim());
          console.log(msg2);
        }
      }
      resolve(msg);
    });
  });
}

const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    const param = process.argv[2];
    countStudents(param);
    res.end();
  }
});

app.listen(1245);

module.exports = app;
