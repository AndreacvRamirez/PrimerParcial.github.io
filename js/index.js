const Mocknoticias = "http://demo6497253.mockable.io/noticias";
const noticias = document.querySelector(".noticias");
const Mockdeportes = "http://demo6497253.mockable.io/categoria/deporte";
const deporte = document.querySelector(".noticias");


function getData(url){
    return fetch(url)
    .then(response => response.json())
    .then(json => json)
}