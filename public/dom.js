const result = (url, cb) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(data);
    })

    .catch(error => {
      console.log(error);
    });
};

const button = document.getElementById("button");
button.addEventListener("click", function() {
  const ul = document.getElementById("ul");
  document.body.style.backgroundImage = "none";
  const input = document.getElementById("input");
  const inputValue = input.value;
  if (inputValue.length === 0 || inputValue === /\S/) {
    alert("Please enter an artist name");
  } else {
    result(`/search?${inputValue}`, data => {
      // const banner = document.getElementById("banner");
      // const image = banner.gitElementBYTagName("IMG);
      // image.src = "";
      data.forEach(ele => {
        const li = ul.creatElement("LI");
        li.innerText = ele;
        ul.appendChild(li);
      });
    });
  }
});
