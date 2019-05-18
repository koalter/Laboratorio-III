window.addEventListener('load', cargarTabla);

function cargarTabla() {
    let body = document.getElementsByTagName('body')[0];
    let i = 0;
    let j = 0;
    let objetoConMasClaves;
    
    // Sacamos el indice mayor
    for (let index in data) { //console.log(index);
        j = 0;
        
        for (let key in data[index]) //console.log(key);
        j++;
        
        if (j > i) {
            i = j;
            objetoConMasClaves = data[index];
        }
    }
    
    
    let tabla = document.createElement('table');
    let header = document.createElement('tr');
    
    // Generamos la cabecera de la tabla
    for (let key in objetoConMasClaves) {
        let fila = document.createElement('th');
        fila.innerText = key;
        header.appendChild(fila);
    }
    tabla.appendChild(header);

    // Generamos los registros
    for (let index in data) {
        let fila = document.createElement('tr');

        for (let key in objetoConMasClaves) {
            let registro = document.createElement('td');
            registro.innerText = data[index][key];
            fila.appendChild(registro);
        }
        
        tabla.appendChild(fila);
    }
    

    body.appendChild(tabla);
}