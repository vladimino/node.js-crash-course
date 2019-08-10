const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.info('Folder already exists, nothing to do...');
      return;
    }

    throw err;
  }

  console.log('Folder created...');
});

const helloPath = path.join(__dirname, 'test', 'hello.txt');

// Create and write to file
fs.writeFile(helloPath, 'Hello World!', err => {
  if (err) throw err;
  console.log('File written to...');

  fs.appendFile(helloPath, ' Something in the end.', err => {
    if (err) throw err;
    console.log('File appended to...');
  });
});

// Read File
fs.readFile(helloPath, 'utf8', (err,data) => {
  if (err) throw err;
  console.log(data);
});
