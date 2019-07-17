const { homeHandler, publicHandler, searchHandler } = require('./handler');

const router = (request, response) => {
  if (request.url === '/') {
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end('<h1>hello</h1>');
    //isn`t? and above should be in handler , to load main hrml page
    homeHandler(request, response);
  } else if (request.url.includes('/search')) {
    const obj = {
      bannerImg: 'strArtistBanner',
      strStyle: 'strStyle',
      arrayOfSongs: 'arrayOfSongs',
      strTrack: 'strTrack'
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(obj));
    searchHandler(request, response, request.url);
  } else if (request.url.includes('public')) {
    publicHandler(request, response, request.url);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>Sorry, page not found</h1>');
  }
};

module.exports = router;
