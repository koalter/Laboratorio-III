document.getElementById("p1").innerHTML = "Esto es un parrafo";
document.getElementById("miDiv").innerHTML = "<h2>Esto es un titulo h2</h2>";
console.log(typeof NaN);

function MostrarArgumentos(a, b, c) {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}

function Calcular(a, b, c) {
    return c(a, b);
}

console.log(Calcular(5, 6, function() { 
    let num = 1;
    for (let index = 0; index < arguments.length; index++) {
        num *= arguments[index];
    }
    return num;
}));
