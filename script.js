
const APIKEY = 'api_key=aadab7b55997e452fe229067e700adf9';
const BASEURL = 'https://api.themoviedb.org/3/';
const APIURL = BASEURL + '/discover/movie?sort_by-popularity.desc'+APIKEY;

function showMovies(data){
    data.forEach(movie =>{
        const{title, poster_path, vote_average, overview} = movie;
        const movie1 = document.createElement('div')
        movie1.classList.add('movie');
        const htmlString = `<img src="${IMGURL+poster_path}" alt="${title}">` +
            `<div class="movie-info">` +
            `<h3>${title}</h3>` +
            `<span class="${getColor(vote_average)}">${vote_average}</span>` +
            `</div>` +
            `<div class="overview">` +
            `<h3>overview</h3>` +
            `${overview}` +
            `</div>`;
        movie1.innerHTML = htmlString;
    });
}

function getColor(vote){
    if(vote>=0){
        return 'green';
    }
    else if(vote>=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}


