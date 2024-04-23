const URL_ENDPOINT = 'https://rickandmortyapi.com/api/';
const URL_UBICACIONES = URL_ENDPOINT + 'location';

const mostrarTarjeta = (ubicacion) => {
    console.log(ubicacion);
    const contenedor = document.getElementById("contenedor")
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        mostrarDetalle(ubicacion)
    })

    const titulo = document.createElement('h3');
    titulo.innerText = ubicacion.name;
    li.appendChild(titulo);

    const descripcion = document.createElement('p');
    descripcion.innerText = ubicacion.dimension;
    li.appendChild(descripcion);

    contenedor.appendChild(li);
}

const mostrarDetalle = (ubicacion) => {
    window.location.href = "http://127.0.0.1:5500/detalles.html"
}

fetch(URL_UBICACIONES)
.then(data => data.json())
.then(result => {
    const results = result.results;
    const primerResultado = results[0];
    mostrarTarjeta(primerResultado);
})