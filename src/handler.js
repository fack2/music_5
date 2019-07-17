const fs = require('fs');
const path = require('path');
const request = require('request');

const homeHandler = (req, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
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

const publicHandler = (req, response, url) => {
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpg',
    png: 'image/png',
    ico: 'image/x-icon'
  };
  const filePath = path.join(__dirname, '..', url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>this is error message should be</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extensionType[extension] });
      response.end(file);
    }
  });
};
const searchHandler = (req, response, url) => {
  const value = url.split('?')[1];
  request(
    `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${value}`,
    (error, res) => {
      let id = res.artists[0].idArtist;
      console.log('id', id);
    }
  );
};

module.exports = { homeHandler, publicHandler, searchHandler };
