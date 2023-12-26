
function mostrar() {
    let vNombre = prompt("Introduce el nombre de la cuidad a mostrar", "");
    let indice = buscar(vNombre)

    if (indice >= 0) {
        posicion = indice;
        mostrarImagen();
    } else {
        alert("La imagen ( " + vNombre + " ) no se encuentro");
    }
}


function buscar(nombre) {
    let encuentrado = false;
    let indice = -1;
    let i = 0;
    let vueltas = imagenes.length;

    while (i < vueltas && !encuentrado) {
        if (nombre == imagenes[i].nombre) {
            indice = i;
            encuentrado = true
        }
        i++;
    }
    return indice;
}

function agregar() {
    let nuevoNombre = prompt("Introduce el nombre dea la cuidad", "Auckland");
    let indice = buscar(nuevoNombre)

    if (indice < 0) {
        let nuevoArchivo = prompt("Indicar nombre del archivo a agregar", "auckland.jpg");
        let nuevoTitle = prompt("Titulo de la imagen", "Capital de New Zelanda");
        let nuevoDescription = prompt("Añadir descripcion", "Auckland, asentada en torno a 2 grandes puertos, es una ciudad importante en el norte de la Isla Norte de Nueva Zelanda");

        let nuevaImagen = new Imagen(nuevoArchivo, nuevoTitle, nuevoNombre, nuevoDescription);
        imagenes.push(nuevaImagen);
        posicion = imagenes.length - 1;
        mostrarImagen();
    } else {
        alert("La imagen ya existe");
        posicion = indice;
        mostrarImagen();
    }
}

// function eliminar() {
//     let vNombre = prompt('Indica el nombre de la imagen que deseas eliminar:');
//     let indice = buscar(vNombre);

//     if (indice < 0) {
//         alert("La imagen que deseas eliminar no se encuentra registrada.");
//     } else {
//         let imagenAEliminar = imagenes[indice];
//         let mensaje = `¿Deseas eliminar esta imagen?\nNombre: ${imagenAEliminar.nombre}\nDescripción: ${imagenAEliminar.description}`;
//         let confirmaEliminar = confirm(mensaje);

//         if (confirmaEliminar) {
//             imagenes.splice(indice, 1);
//             mostrarImagen();
//             alert('Imagen eliminada');
//         } else {
//             alert('La imagen se mantiene registrada');
//         }

//         console.table(imagenes);
//     }
// }

function eliminar() {
    let vNombre = prompt('Indica el nombre de la imagen que desea eliminar:');
    let indice = buscar(vNombre);

    if (indice < 0) {
        alert("El nombre de la imagen que desea eliminar no se encuentra registrado.");
    } else {
        let mensaje = `¿Desea eliminar esta imagen?\nNombre: ${imagenes[indice].nombre}\nDescripción: 
                                                            ${imagenes[indice].description}`;
        let confirmaEliminar = confirm(mensaje);

        if (confirmaEliminar) {
            imagenes.splice(indice, 1);
            mostrarImagen();
            alert('Imagen eliminado');
        } else {
            alert('La imagen se mantiene registrado');
        }
        console.table(imagenes);
    }
}

// function eliminar() {
//     let varEliminar = prompt("Indicar el nombre de la imagen a eliminar:", "Auckland");
//     let indice = buscar(varEliminar);

//     if (indice >= 0) {
//         let imagenEliminada = imagenes.splice(indice, 1)[0];
//         alert("Imagen " + imagenEliminada.nombre + " ha sido eliminada.");

//         if (imagenes.length === 0) {
//             // Si no quedan imágenes, reinicia la posición y muestra una imagen vacía
//             posicion = 0;
//             mostrarImagen();
//         } else {
//             if (posicion >= imagenes.length) {
//                 // Si la posición actual es mayor o igual a la cantidad de imágenes, ajusta la posición
//                 posicion = imagenes.length - 1;
//             }
//             mostrarImagen();
//         }
//     } else {
//         alert("La imagen no se encontró en la lista.");
//     }
// }

function modificar() {
    let vNombre = prompt('Indica el nombre de la imagen que deseas modificar:');
    let indice = buscar(vNombre);

    if (indice < 0) {
        alert("La imagen que deseas modificar no se encuentra registrada.");
    } else {
        let imagenModificada = imagenes[indice];

        let nuevoTitle = prompt("Nuevo título de la imagen", imagenModificada.title);
        let nuevaDescripcion = prompt("Nueva descripción de la imagen", imagenModificada.description);

        // Actualizar propiedades de la imagen
        imagenModificada.title = nuevoTitle || imagenModificada.title;
        imagenModificada.description = nuevaDescripcion || imagenModificada.description;

        mostrarImagen();
        alert('Imagen modificada');

        console.table(imagenes);
    }
}
