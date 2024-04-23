const URL_ENDPOINT = 'https://rickandmortyapi.com/api/';
const URL_UBICACIONES = URL_ENDPOINT + 'location';

const mostrarTarjeta = (ubicacion) => {
    const contenedor = document.getElementById("contenedor")
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        mostrarDetalle(ubicacion.id)
    })

    const titulo = document.createElement('h3');
    titulo.innerText = ubicacion.name;
    li.appendChild(titulo);

    const descripcion = document.createElement('p');
    descripcion.innerText = ubicacion.dimension;
    li.appendChild(descripcion);

    contenedor.appendChild(li);
}

const mostrarDetalle = (id) => {
    window.location.href = "http://127.0.0.1:5500/detalles.html?id=" + id
}

fetch(URL_UBICACIONES)
.then(data => data.json())
.then(result => {
    const results = result.results.slice(0,15);
    results.forEach(element => {
        mostrarTarjeta(element);
    });
})