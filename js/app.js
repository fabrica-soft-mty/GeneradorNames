document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    // Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;



    let url = '';
    url += 'https://randomuser.me/api?';
    //si hay origen agregarlo a la URL
    if (origenSeleccionado !== '') {
        url += `nat=${origenSeleccionado}&`;
    }
    //si hay un genero agregarlo a la URL
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    //si hay una cantidad agregarlo a la URL
    if (cantidad !== '') {
        url += `results=${cantidad}&`;
    }

    // Código de FETCH API AQUI
    fetch(url)
        .then(res => res.json())
        .then(data => {

            const results = data.results;
            let htmlNames = '<ul class="lista">'
            results.forEach(result => {
                htmlNames += `
     <li>${result.name.first} ${result.name.last}</li>
   `;

            })
            htmlNames += '</ul>'
            resultado.innerHTML = htmlNames;
        })
        .catch(error => console.log('Error => ', error))
}