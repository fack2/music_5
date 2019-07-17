const { homeHandler } = require('./handler');

const router = (request, response) => {
  if (request.url === '/') {
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end('<h1>hello</h1>');
    //isn`t? and above should be in handler , to load main hrml page
    homeHandler(request, response);
  } else if (request.url === '/search') {
    const arr = [1, 2, 3];
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(arr));
    //don`t understand why use that!!!!!
    //should go to handler :
    // searchHandler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>Sorry, page not found</h1>');
  }
};

module.exports = router;
