/* Class name StudentsController */

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.status = 200;
    response.send('This is the list of our students');

    readDatabase(process.argv[2].toString())
      .then((grouplines) => {
        grouplines.sort();
        for (let k = 1; k < grouplines.length; k += 1) {
          response.send(`Number of students is ${grouplines[k]}: ${grouplines[k].length}. List: ${grouplines[k].join(', ')}`);
          if (k + 1 < grouplines.length) {
            response.send('\n');
          }
        }
        response.end();
      })
      .catch((error) => {
        response.status = 500;
        response.send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.status = 200;

    // Extracts the 'major' parameter from the query string of the HTTP request.
    // @type {string} The value of the 'major' parameter.
    const { major } = request.query;

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      response.status = 500;
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2].toString())
      .then((grouplines) => {
        const firstnames = grouplines[major];
        if (firstnames) {
          response.send(`List: ${firstnames.join(', ')}`);
          // response.write('\n');
        }
        response.end();
      })
      .catch((error) => {
        response.status = 500;
        response.send(error instanceof Error ? error.message : error.toString());
      });
  }
}

module.exports = StudentsController;
