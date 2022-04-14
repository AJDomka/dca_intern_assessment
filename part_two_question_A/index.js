const fs = require('fs');

const testFileName = './input/' + process.argv[2] + '.json';
const file = require(testFileName);

console.log(file);

for (i in file) {
  file[i].Roles = file[i].Roles.split(',');
}

fs.writeFile(
  './output/' + process.argv[3] + '.json',
  JSON.stringify(file, null, 2),
  'utf-8',
  function (err) {
    if (err) {
      console.log('An error has occured: ' + err);
    }

    console.log('File is finished.');
  }
);
