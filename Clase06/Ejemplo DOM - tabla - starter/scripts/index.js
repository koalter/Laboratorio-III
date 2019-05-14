var xhr;
window.addEventListener('load', traerObjeto);

function traerObjeto() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesar;
    let cadena = 'http://localhost:3000/traer?collection=objeto';
    xhr.open('GET', cadena, true);
    xhr.send();
}

function procesar() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    }
}