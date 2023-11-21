// Displays message followed by new line

const greeting = 'Welcome to Holberton School, what is your name?\n';

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(greeting, (callback) => {
  console.log(`Your name is: ${callback}`);
  r1.close();
});
