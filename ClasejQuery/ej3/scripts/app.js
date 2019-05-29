$(document).ready(function() {
    console.log($("textos").html());

    console.log($("#p1").text());

    console.log($("#txtNombre").val());

    $("textos").html($("textos").html() + "<br><button onclick='insertar()'>Modificar</button>");
});

function insertar() {
    alert("insertar()");
}