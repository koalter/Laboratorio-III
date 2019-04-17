let objeto1 = {};
let objeto2 = { nombre: "Juan", apellido: "Perez", edad: 30};

objeto1.nombre = "Maria";

console.log(objeto1.nombre);
console.log(objeto2["nombre"]);

console.log("-----------------------------------");

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.MostrarNombre = function () {
        return this.nombre + " " + this.apellido;
    }
}

let persona1 = new Persona("Ana", "Gomez", 34);
let persona2 = new Persona("Laura", "Diaz", 20);

console.log(persona1.MostrarNombre());
console.log("-----------------------------------");

persona1.nacionalidad = "Argentina";
for (prop in persona1) {
    console.log(persona1[prop]);
}
console.log("-----------------------------------");

/*  Prototipos
*       Agrega una propiedad a un objeto con un valor predeterminado
*/
Persona.prototype.nacionalidad = "Paraguaya";
for (prop in persona2) {
    //console.log(persona2[prop]);
    console.log(typeof persona2[prop] == "function" ? persona2[prop]() : persona2[prop]);
}