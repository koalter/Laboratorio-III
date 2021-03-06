window.addEventListener("load", inicializarEventos);

function inicializarEventos() {
    document.getElementById("btnTabla").addEventListener("click", cargarTabla);
}

function cargarTabla() {
    // console.log(personas);
    let div = document.getElementById('info');
    let tabla = document.createElement('table');

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse: collapse');
    tabla.setAttribute('width', '700px');
    
    let cabecera = document.createElement('tr');

    for (let key in personas[0]) {
        let th = document.createElement('th');
        let texto = document.createTextNode(key);
        th.appendChild(texto);
        cabecera.appendChild(th);
    }

    tabla.appendChild(cabecera);

    for (let i in personas) {
        let fila = document.createElement('tr');
        
        for (let j in personas[i]) {
            let celda = document.createElement('td');
            celda.setAttribute('style', 'text-align: center');
            let dato = document.createTextNode(personas[i][j]);
            
            celda.appendChild(dato);
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    div.appendChild(tabla);

    let body = document.getElementsByTagName("body");
    let btnTabla = document.getElementById("btnTabla");
    body[0].removeChild(btnTabla);
}