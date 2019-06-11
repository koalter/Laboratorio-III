let Persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23
};

Persona.altura = 176;

let Persona2:{edad:number, nombre:string,/*sabeNadar:bool*/ apellido:string} = {
    nombre: "John",
    apellido: "Smith",
    edad: 40,
    sabeNadar: true
};

let otro:{esFuncion:boolean, getNombre:()=>boolean} = {
    esFuncion: true,
    getNombre: function():boolean {
        return this.esFuncion;
    }
}