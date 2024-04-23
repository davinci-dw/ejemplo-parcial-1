const id_ubicacion = +window.location.href.split('?id=')[1];

const URL_ENDPOINT = 'https://rickandmortyapi.com/api/';
const URL_UBICACION = URL_ENDPOINT + 'location/' + id_ubicacion;

const mostrarDetalle = (ubicacion) => {
    console.log(ubicacion)
    const contenedor = document.getElementById("contenedor")
    const div = document.createElement('div');

    const titulo = document.createElement('h3');
    titulo.innerText = ubicacion.name;
    div.appendChild(titulo);

    const descripcion = document.createElement('p');
    descripcion.innerText = ubicacion.dimension;
    div.appendChild(descripcion);

    const tipo = document.createElement('p');
    tipo.innerText = ubicacion.type;
    div.appendChild(tipo);


    contenedor.appendChild(div);
}

fetch(URL_UBICACION)
.then(data => data.json())
.then(result => {
    mostrarDetalle(result)    
})