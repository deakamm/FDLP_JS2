class Cuenta {
  constructor(numCuenta) {
    this.numCuenta = numCuenta;
    this.saldo = 0;
  }

//para buscar el numero de la cuenta
  getNumCuenta(){
    return this.numCuenta;
  }
  
// para ingresar y retirar
  getSaldo(){
    return this.saldo;
  }

  ingresarDinero(cantidad) {
    let mensaje;
    this.saldo += cantidad;
    mensaje = "Se ha ingresado correctemente € " + cantidad;
    mensaje +=
      "\nNuevo Saldo en cuenta: €" + " Saldo actual " + this.saldo.toFixed(2);
    return mensaje;
  }

  retirarDinero(cantidad) {
    let mensaje;
    this.saldo -= cantidad;
    mensaje = "Se ha retirado de la cuenta €" + cantidad;
    mensaje +=
      "\nNuevo Saldo en cuenta: €" + " Saldo actual " + this.saldo.toFixed(2);
    return mensaje;
  }

  toString() {
    let resultado = "";
    resultado += this.numCuenta + " €" + this.saldo.toFixed(2);
    return resultado;
  }
}
