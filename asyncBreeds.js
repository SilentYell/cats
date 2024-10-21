const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (err, data) => {
    if (err) {
      return callback(null);
    }
    console.log("In readFile's Callback: it has the data.");
    callback(data);
  });
};

breedDetailsFromFile('Bombay', (data) => {
  console.log('Return Value:', data);
});