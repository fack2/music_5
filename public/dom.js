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

const searchButton = document.getElementById("button");
searchButton.addEventListener("click", function(e) {
	e.preventDefault();
	const ul = document.getElementById("ul");
	document.body.style.backgroundImage = "none";
	const input = document.getElementById("input");
	const inputValue = input.value;
	if (inputValue.length === 0 || inputValue === /\S/) {
		alert("Please enter an artist name");
	} else {
		result(`/search?${inputValue}`, data => {
			const image = document.getElementById("bannerImg");
			image.setAttribute("src", data.bannerImg);
			// const strStyle = document.createElement("h3");
			// strStyle.innerHTML = data.strStyle;

			for (
				let i = 0;
				i < data.arrayOfSongs.length && i < data.strTrack.length;
				i++
			) {
				const list = document.createElement("LI");
				const songTitle = document.createElement("h1");
				list.innerText = data.arrayOfSongs[i];
				songTitle.innerText = data.strTrack[i];
				ul.appendChild(list);
				ul.appendChild(songTitle);
			}
		});
	}
});
