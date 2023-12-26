let listaClientes = [
  new Cliente("A0123456E", "Sandra", "Andreson"), //0
  new Cliente("B6543210C", "Moise", "Ferran"), //1
  new Cliente("C0123456R", "Abdou", "Guisse"), //2
  new Cliente("D6543210S", "Jerry", "Colblack"), //3
]

console.table(listaClientes);

listaClientes[0].addCuenta(new Cuenta("123"));
console.log(listaClientes[0].toJS());

listaClientes[1].addCuenta(new Cuenta("112"));
console.log(listaClientes[1].toJS());

listaClientes[2].addCuenta(new Cuenta("314"));
listaClientes[2].addCuenta(new Cuenta("325" ));
listaClientes[2].addCuenta(new Cuenta("336"));
console.log(listaClientes[2].toJS());

listaClientes[3].addCuenta(new Cuenta("417"));
console.log(listaClientes[3].toJS());

function buscar(valor) {
  let indice = -1;
  let encontrado = false;
  let i = 0;
  let vueltas = listaClientes.length;
  while (i < vueltas && !encontrado) {
    if (listaClientes[i].dni == valor) {
      indice = i;
      encontrado = true;
    }
    i++
  }
  return indice;
}


function crearCliente() {

  let indice, vDni, vNombre, vApellido, mensaje;
  let nuevoCliente;

  vDni = prompt('Indica el número de DNI del nuevo cliente: ', 'B3456782E');
  indice = buscar(vDni);

  if (indice >= 0) {
    mensaje = "El cliente ya está registrado. Sus datos son:\n";
    mensaje += listaClientes[indice].toJS()
    alert(mensaje);

  } else {
    vNombre = prompt('Nombre del nuevo cliente', 'Jasmine');
    vApellido = prompt('Apellido del nuevo cliente', 'Aladdin');

    nuevoCliente = new Cliente(vDni, vNombre, vApellido);

    listaClientes.push(nuevoCliente);
    indice = listaClientes.length - 1;

    alert("Cliente Registrado con éxito:\n" + listaClientes[indice].toJS());
    console.table(listaClientes);

  }

}

function borrarCliente() {

  let indice, vDni, mensaje, confirmaEliminar;

  vDni = prompt('Indica el DNI del cliente que desea eliminar: ', 'A0123456E');
  indice = buscar(vDni);

  if (indice < 0) {
    alert("El cliente que desea no se encuentra registrado.");

  } else {

    mensaje = '¿Desea eliminar este cliente?\n' + listaClientes[indice].toJS();

    confirmaEliminar = confirm(mensaje);
    if (confirmaEliminar) {
      listaClientes.splice(indice, 1);
      alert('cliente eliminado');
    } else {
      alert('El cliente se mantiene registrado');
    }
    console.table(listaClientes);
  }
}

function mostrarCliente() {

  let indice, vDni;

  vDni = prompt('Indica el DNI del cliente a mostrar por pantalla: ', 'A0123456E');
  indice = buscar(vDni);

  if (indice < 0) {
    alert("El cliente que desea no se encuentra registrado.");
  } else {
    document.getElementById("datos").innerHTML = listaClientes[indice];
  }

}

function limpiarPantalla() {
  document.getElementById("datos").innerHTML = "";
}

function buscarCuenta(numCuenta) {
  let indice = -1;
  let indiceCuenta = -1;
  let encontrado = false;
  let i = 0;

  let vueltas = listaClientes.length;
  while (i < vueltas && !encontrado) {
    indiceCuenta = listaClientes[i].buscarCuenta(numCuenta);
    if (indiceCuenta >= 0) {
      indice = i;
      encontrado = true;
    }
    i++
  }
  
  return [indice, indiceCuenta];

}



function crearCuenta() {
  let indice, indicesCuenta, vDni, numCuenta, mensaje;
  let nuevaCuenta;

  vDni = prompt('Indica el número de DNI del cliente responsable de la cuenta: ', 'A0123456E');
  indice = buscar(vDni);

  if (indice < 0) {
    mensaje = "El cliente no está registrado. Agréguelo y luego registre la cuenta.";

  } else {

    numCuenta = prompt('Indica el número de cuenta a registrar: ', '888888');
    indicesCuenta = buscarCuenta(numCuenta);
    if (indicesCuenta[1] >= 0) {
      mensaje = "El numero de la cuenta está registrado. Datos del cliente y cuenta:\n" + listaClientes[indicesCuenta[0]].toJS();
      alert(mensaje);
    } else {
      let titularCuenta = listaClientes[indice].toJS();
      nuevaCuenta = new Cuenta(numCuenta, titularCuenta);
      listaClientes[indice].addCuenta(nuevaCuenta);

      console.log(nuevaCuenta.ingresarDinero(100));
      console.log(nuevaCuenta.retirarDinero(50));
      console.log(nuevaCuenta.toString());

      mensaje = "La nueva cuenta se ha registrada " + nuevaCuenta;
      alert(mensaje);
    }
  }

}

function ingresarDinero() {
  let indicesCuenta, numCuenta, saldo;
  let cantidad;

  numCuenta = prompt('Indica el número de cuenta del cliente a ingresar dinero: ', '888888');
  indicesCuenta = buscarCuenta(numCuenta);

  if (indicesCuenta[1] < 0) {
      alert("El número de cuenta solicitado no se encuentra registrado");
  } else {
      cantidad = listaClientes[indicesCuenta[0]].cuentas[indicesCuenta[1]];

      console.log("Cuenta a ingresar: " + cantidad.getNumCuenta() + "\n" +
          "Titular: " + "\n" + listaClientes[indicesCuenta[0]].toJS());

      let saldo0 = parseFloat(prompt("Introduce el importe a ingresar", "150.99"));
      saldo = saldo0.toFixed(2);

      if (!isNaN(saldo) && saldo > 0) {
          cantidad.ingresarDinero(parseFloat(saldo)); // Llama al método ingresarDinero
          const saldoActual = cantidad.getSaldo();
          console.log(saldoActual);
          alert(`Se ingresaron ${saldo} en la cuenta. Saldo actual: ${saldoActual.toFixed(2)}`);
      } else {
          alert("El importe ingresado no es válido.");
      }
  }
}

function retirarDinero() {
  let indicesCuenta, numCuenta;
  let cuentaRetirada;
  numCuenta = prompt('Indica el número de la cuenta del cliente a retirar: ', '888888');
  indicesCuenta = buscarCuenta(numCuenta);

  if (indicesCuenta[1] < 0) {
      alert("El número de cuenta solicitado no se encuentra registrado");
  } else {
      cuentaRetirada = listaClientes[indicesCuenta[0]].cuentas[indicesCuenta[1]];
      console.log("Datos de la cuenta a retirar dinero: ", cuentaRetirada);

      let cantidadRetirar = parseFloat(prompt("Introduce el importe a retirar", "50.00"));
      cuentaRetirada.retirarDinero(cantidadRetirar);

      const saldoActual = cuentaRetirada.getSaldo();
      alert(`Se retiraron ${cantidadRetirar} de la cuenta. Saldo actual: ${saldoActual.toFixed(2)}`);
  }
}
