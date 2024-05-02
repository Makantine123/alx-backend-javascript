/* Class name StudentsController */

const {RedisSearchLanguages} = require('redis');
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.status = 200;

    response.write('This is the list of our students\n');
    readDatabase(process.argv[2].toString())
      .then((grouplines) => {
        const keys = Object.keys(grouplines).sort();
        for (let k = 0; k < keys.length; k += 1) {
          response.write(`Number of students in ${keys[k]}: ${grouplines[keys[k]].length}. List: ${grouplines[keys[k]].join(', ')}`);
          if (k + 1 < keys.length) {
            response.write('\n');
          }
        }
        response.end();
      })
      .catch((error) => {
        response.end(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    // Extracts the 'major' parameter from the query string of the HTTP request.
    // @type {string} The value of the 'major' parameter.
    const major = request.params.major;
    readDatabase(process.argv[2].toString())
      .then((grouplines) => {
        if (!(major in grouplines)) {
          response.status(500).send('Major parameter must be CS or SWE');
        } else {
          response.status(200);
          response.send(`List: ${grouplines[major].join(', ')}`);
        }
      })
      .catch((error) => {
        response.status(500);
        response.end(error instanceof Error ? error.message : error.toString());
      });
  }
}

module.exports = StudentsController;
