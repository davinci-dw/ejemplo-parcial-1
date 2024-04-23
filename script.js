const URL_ENDPOINT = 'https://rickandmortyapi.com/api/';
const URL_UBICACIONES = URL_ENDPOINT + 'location';

fetch(URL_UBICACIONES)
.then(data => data.json())
.then(result => {
    const results = result.results;
    console.log("results", results)
})