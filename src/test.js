const supertest = require('supertest');
const test = require('tape');
const router = require('./router');

test('Testing home endpoint', t => {
  supertest(router)
    .get('/')
    .expect(200)
    .end((error, response) => {
      t.equal(response.statusCode, 200, 'Should be 200');
      t.end();
    });
});

test('Testing search endpoint', t => {
  const obj = {
    bannerImg: 'strArtistBanner',
    strStyle: 'strStyle',
    arrayOfSongs: 'arrayOfSongs',
    strTrack: 'strTrack'
  };
  supertest(router)
    .get('/search?adele')
    .expect(200)
    .expect('Content-Type', '/json/')
    .end((error, response) => {
      t.equal(response.statusCode, 200, 'Status should be 200');
      t.end();
    });
});

test('Testing search invalid endpoints', t => {
  supertest(router)
    .get('/hi')
    .expect(404)
    .expect('Content-Type', '/html/')
    .end((error, response) => {
      t.equal(response.statusCode, 404, 'Should be 404');
      t.equal(
        response.text,
        '<h1>Sorry, page not found</h1>',
        'Should be page not found'
      );
      t.end();
    });
});
