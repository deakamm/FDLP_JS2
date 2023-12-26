const hoteles = [
  new Hotel('Hotel Hilton', 7, 222, 583),
  new Hotel('Hotel W', 9, 350, 700),
]

console.table(hoteles)

function buscar(valor) {
  let indice = -1
  let encontrado = false
  let i = 0
  let vueltas = hoteles.length
  while (i < vueltas && !encontrado) {
    if (hoteles[i].nombre == valor) {
      indice = i
      encontrado = true
    }
    i++
  }
  return indice
}

function crear() {
  let vNombre = prompt('Indica el nombre del nuevo hotel:', 'Hotel valenciana')
  let indice = buscar(vNombre)

  if (indice >= 0) {
    alert(
      'El hotel ya está registrado. Sus datos son:\n' + hoteles[indice].toJS(),
    )
  } else {
    let vNumPlantas = parseInt(
      prompt('Indica el número de plantas del nuevo hotel:', 9),
    )
    let vNumHabitaciones = parseInt(
      prompt('Indica el número de habitaciones del nuevo Hotel:', 65),
    )
    let vSuperficieTotal = parseFloat(
      prompt('Indica el superficie del nuevo Edificio:', 200),
    )

    let nuevoHotel = new Hotel(
      vNombre,
      vNumPlantas,
      vNumHabitaciones,
      vSuperficieTotal,
    )
    hoteles.push(nuevoHotel)
    let nuevoIndice = hoteles.length - 1
    alert('Hotel Registrado con éxito:\n' + hoteles[nuevoIndice].toJS())
    console.table(hoteles)
  }
}

function eliminar() {
  let vNombre = prompt('Indica el nombre del hotel que desea eliminar:')
  let indice = buscar(vNombre)

  if (indice < 0) {
    alert('El hotel que desea eliminar no se encuentra registrado.')
  } else {
    let mensaje = '¿Desea eliminar este hotel?\n' + hoteles[indice].toJS()
    let confirmaEliminar = confirm(mensaje)

    if (confirmaEliminar) {
      hoteles.splice(indice, 1)
      alert('Hotel eliminado')
    } else {
      alert('El hotel se mantiene registrado')
    }
    console.table(hoteles)
  }
}

function mostrar() {
  let vNombre = prompt('Indica el nombre del hotel a mostrar por pantalla:')
  let indice = buscar(vNombre)

  if (indice < 0) {
    alert('El hotel que desea mostrar no se encuentra registrado.')
  } else {
    let hotel = hoteles[indice]
    let mensaje = hotel.calcularMantenimiento()
    document.getElementById('datos').innerHTML =
      hotel.toString() +
      '<br>Mantenimiento: ' +
      mensaje.personasNecesarias +
      ' personas, Costo: ' +
      mensaje.costoMantenimiento +
      ' €'
  }
}

function modificar() {
  let vNombre = prompt('Indica el nombre del hotel que deseas modificar:')
  let indice = buscar(vNombre)

  if (indice < 0) {
    alert('El hotel que deseas modificar no se encuentra registrado.')
  } else {
    // Obtiene el hotel existente
    let hotel = hoteles[indice]

    // Permite al usuario ingresar los nuevos valores
    let vNumPlantas = parseInt(
      prompt(
        'Indica el nuevo número de plantas del hotel:',
        hotel.getNumPlantas(),
      ),
    )
    let vNumHabitaciones = parseInt(
      prompt(
        'Indica el nuevo número de habitaciones del hotel:',
        hotel.getNumHabitaciones(),
      ),
    )
    let vSuperficieTotal = parseFloat(
      prompt(
        'Indica la nueva superficie del hotel:',
        hotel.getSuperficieTotal(),
      ),
    )

    // Actualiza los valores del hotel
    hotel.setNumPlantas(vNumPlantas)
    hotel.setNumHabitaciones(vNumHabitaciones)
    hotel.setSuperficieTotal(vSuperficieTotal)

    alert('Hotel modificado con éxito:\n' + hotel.toJS())
    console.table(hoteles)
  }
}
