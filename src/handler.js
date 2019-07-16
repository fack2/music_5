const fs = require('fs');
const path = require('path');

// i just add home handler is to show basic pageXOffset,,,it works
const homeHandler = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  console.log('helling');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>server Error</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

// const searchHandler = (request, response) => {};
// module.exports(homeHandler, searchHandler);
module.exports = { homeHandler };
