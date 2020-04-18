//lee cada uno de los botoones
document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        //en este caso la funcion del then devuelve una respuesta
        //al ver el proto de este vemos que tiene uno llamado text()
        .then((res) =>res.text()
            //en este primer then le decimos a fetch como queremos que nos de los datos
        )
        .then((empleados) => document.getElementById('resultado').innerHTML = empleados
            //en este segundo ya tenemos los datos
        )
        .catch((error) => console.log(error)
        );
}

function cargarJSON() {
    fetch('empleados.json')
        //en este casos los elementos estan en un json por eso se usa el metodo json() para extraer la info
        .then((res) =>res.json())
        .then((data) => {
            let html = '';
            data.forEach(function(empleado) {
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html
        })
        .catch((error) => {
            console.log(error);
        });
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then((res) => res.json())
        .then((imagenes) => {
            let html ='';

            imagenes.forEach(function(imagen) {
                    html += `
                        <li>
                            <a target="_blank" href="${imagen.post_url}">Ver Imagen</a>
                            ${imagen.author}
                        </li>
                    `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
}