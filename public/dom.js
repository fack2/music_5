let request = (url, cb) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    });
};
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const inputValue = document.getElementById('inputOne').value;
  console.log(inputValue);
  request('/search?${inputValue}', searchedResult => {
    //what happened when search button clicked
    console.log(inputValue);
    console.log('hell');
  });
});
