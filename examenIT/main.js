
function NumAleatorios() {
    let datosEntrada = [];
    for (let i = 0; i < 50; i++) {
      datosEntrada.push(Math.floor(Math.random() * 20) + 1);
    }
    return datosEntrada;
  }
  

  function NumUnicos(datosEntrada) {
    return Array.from(new Set(datosEntrada)).sort((a, b) => a - b);
  }
  
  function p1() {
 
    let datosEntrada = NumAleatorios();
    console.log(datosEntrada);
    let datosSalida = NumUnicos(datosEntrada);
    console.log(datosSalida);
  
    document.getElementById("entrada").innerHTML = datosEntrada.join("-");
    document.getElementById("salida").innerHTML = datosSalida.join("-");
  }
  