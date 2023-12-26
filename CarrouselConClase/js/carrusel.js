let posicion = 0;

mostrarImagen()


function retroceder() {
  posicion--
  if (posicion < 0) {
    alert('Es la primera imagen del carrusel')
    posicion = imagenes.length
  }
  mostrarImagen()
}
function avanzar() {
  posicion++
  if (posicion >= imagenes.length) {
    alert('Es la ultima imagen del carrusel')
    posicion = 0
  }
  mostrarImagen()
}

function mostrarImagen() {
    let imagen = RUTA + imagenes[posicion].imagen;
    let nombre = imagenes[posicion].nombre;
    let title = imagenes[posicion].title;
    let desc = imagenes[posicion].description;
  
    document.getElementById('imagen').src = imagen;
    document.getElementById('imagen').title = title;
    document.getElementById('imagen').alt = imagenes[posicion].nombre;
  
    document.getElementById('nombreImagen').innerHTML =  nombre;
    document.getElementById('desc').innerHTML = desc;
  }
