window.addEventListener("load", main);

function main() {
    document.getElementById('p2').addEventListener('click', function(){
        this.innerHTML = "Cambie el texto";
    });
}