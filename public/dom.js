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

const searchButton = document.getElementById('button');
searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    const ul = document.getElementById('ul');
    document.body.style.backgroundImage = 'none';
    const input = document.getElementById('input');
    const inputValue = input.value;
    if (inputValue.length === 0 || inputValue === /\S/) {
        alert('Please enter an artist name');
    } else {
        result(`/search?${inputValue}`, data => {
            const image = document.getElementById('bannerImg');
            image.setAttribute('src', data.bannerImg);

            for (
                let i = 0; i < data.arrayOfSongs.length && i < data.strTrack.length; i++
            ) {
                const list = document.createElement('LI');
                list.style.textAlign = "center";
                const songTitle = document.createElement('h1');
                songTitle.style.fontSize = "20px";
                songTitle.style.textAlign = "center";
                songTitle.style.marginBottom = "10px";

                var vid = document.createElement('iframe');

                const newUrl = data.arrayOfSongs[i].replace('watch', 'embed');

                vid.src = newUrl;
                songTitle.innerText = data.strTrack[i];

                list.appendChild(vid);

                ul.appendChild(list);
                ul.appendChild(songTitle);
            }
        });
        ul.innerHTML = '';
    }
});