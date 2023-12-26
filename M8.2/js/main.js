let posicion = 0;
const Ordinadores = [];

function agregar() {
    let nuevaMarca = "";
    let nuevoModel = "";
    let nuevoProcessador = "";
    let nuevaRam = "";
    let nuevoDiscDuro = "";
    let nuevoOrdenador = "";

    if (Ordinadores.length == 2) {
        alert("Los Ordinadores ya estan creados");
    } else {
        for (let i = 1; i <= 2; i++) {
    nuevaMarca = prompt("Indicar la marca del ordenador a agregar","Hp");
    nuevoModel = prompt("Introduce el modelo del ordenador","P50");
    nuevoProcessador= prompt("Introduce el processador del ordenador","Intel");
    nuevaRam = prompt("Introduce la capacidad de la rama del ordenador(en GB)","32");
    nuevoDiscDuro = prompt("Introduce la capacidad del disco duro del ordenador(en GB)","1000");
    nuevoOrdenador = new Ordinador(nuevaMarca,nuevoModel, nuevoProcessador,nuevaRam, nuevoDiscDuro);
    Ordinadores.push(nuevoOrdenador);
    posicion = Ordinadores.length -1;
    mostrar();
    console.log(nuevoOrdenador);
        }
     }
    document.getElementById("consultar").innerHTML = "Tenemos " + Ordinadores.length + " ordenadores";
 }

function modificar() {
    let capacidad = prompt("Indica el elemento a modificar (processador, ram, discDur):");
    let nuevoValor = prompt(`Introduce el nuevo valor para ${capacidad}:`);
    
    if (posicion >= 0 && posicion < Ordinadores.length[0]) {
        switch (capacidad) {
            case 'processador':
                Ordinadores[posicion].setProcessador(nuevoValor);
                break;
            case 'ram':
                Ordinadores[posicion].setRam(nuevoValor);
                break;
            case 'discDur':
                Ordinadores[posicion].setDiscDur(nuevoValor);
                break;
            default:
                alert('Campo no válido');
        }
        mostrar();
    } else {
        alert('Posición de ordenador no válida');
    }
}

let programaEnEjecucion = prompt("¿Qué programa se está ejecutando en estos momentos?");
console.log(programaEnEjecucion);
for (let ordenador of Ordinadores) {
    document.getElementById("mostrar").innerHTML = ordenador.programaEnEjecucion;
}

function mostrar() {
    document.getElementById("consultar").innerHTML = "";
    for (let i = 0; i < Ordinadores.length; i++) {
        let ordenador = Ordinadores[i];
        document.getElementById("consultar").innerHTML +=
            "Ordenador " + (i + 1) + ": " + ordenador.toString() + 
            " el programa es: " + programaEnEjecucion + "<br>";
    }

}
