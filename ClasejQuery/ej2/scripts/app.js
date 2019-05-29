$(document).ready(function() {
    $("p").mouseover(function() {
        $(this).css("color", "yellow");
    });
    
    $("p").mouseout(function() {
        $("p").css("color", "black");
    });
    
    $("#btnSaludar").click(function() {
        alert("hola");
    });
});
