const APILink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d14cb844b5cf645a5437fce3bf512e6e&page=6';
const Img_Path = 'http://image.tmdb.org/t/p/w1280';
const SearchAPI = "http://api.themoviedb.org/3/search/movie?&api_key=d14cb844b5cf645a5437fce3bf512e6e&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovie(APILink);
function returnMovie(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement("div");
                div_card.setAttribute('class', "card");

                const div_row = document.createElement("div");
                div_row.setAttribute('class', "row");

                const div_col = document.createElement("div");
                div_col.setAttribute('class', "column");

                const img = document.createElement("img");
                img.setAttribute('class', "thumbnail");
                img.setAttribute('id', "image");

                const title = document.createElement("h3");
                title.setAttribute("id", title);
                const center = document.createElement("center");

                title.innerHTML = `${element.title}`;
                img.src = Img_Path + element.poster_path;

                center.appendChild(img);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_col.appendChild(div_card);
                div_row.appendChild(div_col);

                main.appendChild(div_row);

               
            });
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';
    const searchItem = search.value;

    if (searchItem) {
        returnMovie(SearchAPI + searchItem);
        search.value = "";
    }
})