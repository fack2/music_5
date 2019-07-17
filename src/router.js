const { homeHandler, publicHandler, searchHandler } = require('./handler');

const router = (request, response) => {
  if (request.url === '/') {
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end('<h1>hello</h1>');
    //isn`t? and above should be in handler , to load main hrml page
    homeHandler(request, response);
  } else if (request.url === '/search?${inputValue}') {
    // const arr = [1, 2, 3];
    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.end(JSON.stringify(arr));
    console.log('im in search handler router');
    searchHandler(request, response, request.url);
  } else if (request.url.includes('public')) {
    console.log('im in public handler router');
    publicHandler(request, response, request.url);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>Sorry, page not found</h1>');
  }
};

module.exports = router;
