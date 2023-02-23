document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();
})

const filmes = {
    id: document.getElementById("idMovie"),
    title: document.getElementById("titleMovie"),
    director: document.getElementById("director"),
    dateMovie: document.getElementById("dateMovie"),
    actorMovie: document.getElementById("actorMovie"),
    imdbRating: document.getElementById("imdb"),
}

const { id, title, director, dateMovie, actorMovie, imdbRating, gender } = filmes;

function checkIMDB(imdb) {
    return /\b([0-9]|10)\b|\b\,\b/.test(imdb);
}

function checkDate(dateMovie) {
    return /\b([1-9]|[12][0-9]|3[01])\b[\/\-]\b([1-9]|1[0-2])\b[\/\-]\d{4}$/.test(dateMovie)

}

function limparCampos() {
    title.innerHTML = "";
    director.innerHTML = "";
    dateMovie.innerHTML = "";
    actorMovie.innerHTML = "";
    imdbRating.innerHTML = "";
}
