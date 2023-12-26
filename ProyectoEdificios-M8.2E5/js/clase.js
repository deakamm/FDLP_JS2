class Edificio {
  constructor(nombre, plantas, superficie) {
    this.nombre = nombre;
    this.plantas = plantas;
    this.superficie = superficie;
  }

  toJS() {
    let mostrar = "";
    mostrar += this.nombre.toUpperCase() + "\n";
    mostrar += "Numero de plantas: " + this.plantas + "\n";
    mostrar += "Costo servicio de limpieza: " + this.limpieda() + "\n";
    mostrar += "Número de superficie: " + this.superficie + "\n";
    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "<strong>" + this.nombre + "</strong><br>";
    mostrar += "Numero de plantas: " + this.plantas + " plantas" + "\n";
    mostrar += "Número de superficie: " + this.superficie + " m2" + "<br>";
    mostrar +=
      "<strong>Costo de servicio limpieza</strong>" +
      "<br>" +
      this.limpieda() +
      "<br>";
    return mostrar;
  }

  limpieda() {
    let resultado = "";
    let tiempoLiempiado = this.superficie / 5;
    tiempoLiempiado += (this.plantas - 1) * 0.5;
    let costoDiario = tiempoLiempiado;
    let CosteMensual = costoDiario * 30;

    // resultado = "Tiempo de limpieza: " + tiempoLiempiado + " minutos" + "\n";
    // resultado += "Costo diaro de limpieza: " + costoDiario + " Euros" + "\n";
    resultado += "Costo mensual de limpieza: " + CosteMensual + " Euros";
    console.log(CosteMensual);
    return resultado;
  }

  limpiar() {
    return "<hr><p><button onclick='limpiarPantalla()'>Limpiar Datos</button></p>";
  }
}

class Hospital extends Edificio {
  constructor(nombre, plantas, superficie, enfermos) {
    super(nombre, plantas, superficie);
    this.enfermos = enfermos;
  }

  repartirDinar() {
    let resultado = "";
    let raciones = Math.floor(this.enfermos * 3);
    resultado =
      "<strong>Reparticion diario de raciones de comida:</strong>" + "\n";
    resultado += "Estan repartido " + raciones + " raciones al dia";
    return resultado;
  }

  calcularCostVigilancia() {
    let resultado = "";
    let vigilantesNecesarios = Math.ceil(this.superficie / 1000); // 1 vigilante por cada 1000 m²
    let costoMensual = vigilantesNecesarios * 1300; // 1300 euros por vigilante al mes
    resultado = "<strong>Costo mensual de vigilancia es:</strong>" + "\n";
    resultado +=
      "El costo de vigilencia mensual es " + costoMensual + " Euros<br>";
    return resultado;
  }

  toJS() {
    let mostrar = "";
    mostrar += "Hospital:\n";
    mostrar += super.toJS();
    mostrar += "Enfermos: " + this.enfermos + "\n";
    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "Hospital <br>";
    mostrar += super.toString();
    mostrar += "Enfermos : " + this.enfermos + "<br>";
    return mostrar;
  }
}

class Cinema extends Edificio {
  constructor(nombre, plantas, superficie, afroment) {
    super(nombre, plantas, superficie);
    this.afroment = afroment;
  }

  projectarSessio(assistente, precioEntrada) {
    let resultado = "";
    if (assistente > this.afroment) {
      alert(
        "Tienes que rebajar o reducir el nombre de assistente en el afromente  "
      );
    } else {
      let reparticion = assistente * precioEntrada;
      resultado = "<strong>Projectar una session en Cinema:</strong>" + "<br>";
      resultado += "Estan repartido " + reparticion.toFixed(2) + "Euro";
    }
    return resultado;
  }

  toJS() {
    let mostrar = "";
    mostrar += "Cinema :\n";
    mostrar += super.toJS();
    mostrar += "Assistente Maxim: " + this.afroment + "\n";
    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "Cinema : <br>";
    mostrar += super.toString();
    mostrar += "Assitente Maxim : " + this.afroment + "<br>";

    return mostrar;
  }
}
class Hotel extends Edificio {
  constructor(nombre, plantas, superficie, habitaciones) {
    super(nombre, plantas, superficie);
    this.habitaciones = habitaciones;
  }

  toJS() {
    let mostrar = "";
    mostrar += "Hotel :\n";
    mostrar += super.toJS();
    mostrar += "Habitaciones: " + this.habitaciones + "\n";
    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "Hotel <br>";
    mostrar += super.toString();
    mostrar += "Habitaciones : " + this.habitaciones + "<br>";

    return mostrar;
  }

  servicioHabitaciones() {
    let resultado = "";
    let personalNecesario = Math.ceil(this.habitaciones / 20);
    let CosteMensual = personalNecesario * 1000;
    resultado = "<strong>Coste servicio de habitaciones: </strong>" + "\n";
    resultado +=
      "Personal necesario para el servicio de habitaciones: " +
      personalNecesario +
      "\n";
    resultado += "Coste Mensual " + CosteMensual + " Euros <br>";

    return resultado;
  }

  calcularCostVigilancia() {
    let resultado = "";
    let vigilantesNecesarios = Math.ceil(this.superficie / 1000); // 1 vigilante por cada 1000 m²
    let costoMensual = vigilantesNecesarios * 1300; // 1300 euros por vigilante al mes
    let costoTotal =
      this instanceof Hotel
        ? costoMensual + vigilantesNecesarios * 500
        : costoMensual; // Hotel tiene un plus de 500 euros
    resultado = "<strong>Costo de vigilancia mensual es : </strong>" + "\n";
    resultado +=
      "El coste mensual de un vigilante es " + costoTotal + " Euro<br>";
    return resultado;
  }
}
