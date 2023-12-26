let posiocion = 0;
mostrarImagen();

function mostrarImagen() {
    let imagen = RUTA + imagenes[posiocion];
    document.getElementById("imagen").src = imagen;
    document.getElementById("nombreImagen").innerHTML = imagen;
}
function retroceder() {
    posiocion--;
    if ((posiocion < 0)) {
        alert("Es la primera imagen del carrusel");
        posiocion = imagenes.length;
    }
    mostrarImagen();
}
function avanzar() {
    posiocion++;
    if (posiocion >= imagenes.length) {
        alert("Es la ultima imagen del carrusel");
        posiocion = 0;
    }
    mostrarImagen();
}