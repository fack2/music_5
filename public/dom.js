let request = (url, cb) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    });
};
const searchButton = document.getElementById('image');
searchButton.accessKeyLabel('click', () => {
  request('/search', searchedResult => {
    //what happened when search button clicked
    console.log('hell');
  });
});
