abstract class Persona 
{
    private _nombre:string;
    private _apellido:string;
    private _edad:number;

    constructor(nombre:string, apellido:string, edad:number)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    public get Nombre() : string {
        return this._nombre;
    }
    
    public set Nombre(v : string) {
        this._nombre = v;
    }
    
    public set Apellido(v : string) {
        this._apellido = v;
    }
    
    public get Apellido() : string {
        return this._apellido;
    }
    
    public set Edad(v : number) {
        this._edad = v;
    }
    
    public get Edad() : number {
        return this._edad;
    }

    protected presentarse():void
    {
        console.log(`Hola soy ${this._nombre} ${this._apellido}`);
    }
}

class Empleado extends Persona 
{
    private _sueldo:number;

    constructor(nombre:string, apellido:string, edad:number, sueldo:number) 
    {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
    }

    public presentarse():void
    {
        super.presentarse();
    }

    public toJson():string
    {
        return `{ "nombre": ${super.Nombre}, "apellido": ${super.Apellido}, "edad": ${super.Edad}, "sueldo": ${this._sueldo} }`;
    }
}

let p1 = new Persona("Juan", "Perez", 40);
let emp1 = new Empleado("Maria", "Lopez", 34, 24000);

p1.Nombre = "Ana";

p1.presentarse();
emp1.presentarse();