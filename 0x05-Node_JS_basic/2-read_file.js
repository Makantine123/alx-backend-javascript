// Count students function

const fs = require('fs');

function countStudents(param) {
  let data;
  try {
    data = fs.readFileSync(param, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  let lines = data.trim().split('\n');
  const total = lines.length - 1;
  console.log(`Number of studenst ${total}`);

  const grouplines = {};
  lines = lines.map((item) => item.split(','));
  for (const i in lines) {
    if (i !== 0) {
      /* Check if the key is already in grouplines */
      if (!grouplines[lines[i][3]]) {
        /* Create the key with empy array as value */
        grouplines[lines[i][3]] = [];
      }
      /* Push Student name in to key array */
      grouplines[lines[i][3]].push(lines[i][0]);
    }
  }
  /* Remove the header */
  delete grouplines.field;

  /* Loop through keys */
  for (const k in grouplines) {
    /* Calculate number of students for each key */
    const numberingroup = grouplines[k].length;
    /* Create string of named stored for each key */
    const firstnames = grouplines[k].join(', ');
    /* Log Statement */
    console.log(`Number of students in ${k}: ${numberingroup}. List: ${firstnames}`);
  }
}

module.exports = countStudents;
