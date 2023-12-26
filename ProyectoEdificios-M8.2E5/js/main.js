let edificios = [
    new Hospital("Hospital de Vilafranca",2,1950, 26),
    new Cinema("Cinema Montecarlo",1, 3180, 200),
    new Hotel("Hotel Hilton",22, 73858, 583),
  ]
  console.table(edificios);
  
  
  function buscar(valor) {
    let indice = -1;
    let encontrado = false;
    let i=0;
    let vueltas = edificios.length;
    while (i<vueltas && !encontrado) {
      if (edificios[i].nombre == valor) {
        indice=i;
        encontrado=true;
      }
      i++
    }
    return indice;
  }
  
  
  function crear(){
  
    let indice, vNombre, vTipo, vPlantas, vSuperficie, vHabitaciones, vEnfermos,  vAfroment, mensaje;
    let nuevoEdificio;
  
    vNombre = prompt('Indica el nombre del nuevo Edificio: ','Hospital Guinardo');
    indice = buscar(vNombre);
    if (indice >=0) {
      mensaje = "El edificio ya está registrado. Sus datos son:\n";
      mensaje += edificios[indice].toJS()
      alert(mensaje);
  
    } else {
      do {
        vTipo = prompt('Indica el tipo del nuevo edificio: H=Hospital, C=Cinema, M=en Hotel', 'H').toUpperCase();
      } while (!('HCM'.includes(vTipo))); //para validar el tipo
  
      vPlantas = parseInt(prompt('Indicame el numero de planta del nuevo Edificio',2));
      vSuperficie = parseFloat(prompt('Indicame el superficie  del nuevo Edificio',200));

      if (vTipo =='M') {
        vHabitaciones = parseInt(prompt('Introduce el numero de habitaciones', 20));
        nuevoEdificio = new Hotel( vNombre, vPlantas, vSuperficie, vHabitaciones);
      } else if (vTipo =='H') {
        vEnfermos = parseInt(prompt('Introduce el numero de pacientes:', 45));
        nuevoEdificio = new Hospital(vNombre, vPlantas, vSuperficie, vEnfermos);
      } else {
        vAfroment = parseInt(prompt('Introduce el aforo disponible:', 400));
        nuevoEdificio = new Cinema(vNombre, vPlantas, vSuperficie, vAfroment);      
      }    
      
      edificios.push(nuevoEdificio);    
      indice = edificios.length-1;
  
      alert("Edificio Registrado con éxito:\n" + edificios[indice].toJS());
      console.table(edificios);
  
    }
  
  }
  
  function eliminar() {
  
      let indice, vDni, mensaje, confirmaEliminar;
    
      vDni = prompt('Indica el numero del Edificio que desea eliminar: ','Hospital Guinardo');
      indice = buscar(vDni);
  
      if (indice<0) {
        alert("El edificio que desea no se encuentra registrado.");
  
      } else {
  
        mensaje = '¿Desea eliminar este edificio?\n' + edificios[indice].toJS();
  
        confirmaEliminar = confirm(mensaje);
        if (confirmaEliminar) {
          edificios.splice(indice, 1);
          alert('Edificio eliminado');
        } else {
          alert('El edificio se mantiene registrado');
        }
        console.table(edificios);
      }
  }
  
  function mostrar() {
  
    let indice, vNombre,assistente,precioEntrada,CosteMensual;
    
    vNombre = prompt('Indica el nombre del Edificio a mostrar por pantalla: ','Hospital Guinardo');
    indice = buscar(vNombre);
  
    if (indice < 0) {
      alert("El edificio que desea no se encuentra registrado.");
    } else {
        const edificio = edificios[indice];

        if(edificio instanceof Hospital){
            let limpieza = edificio.limpiar();
            let servicioDinar = edificio.repartirDinar(); 
            CosteMensual = edificio.calcularCostVigilancia();
            document.getElementById("datos").innerHTML = edificio.toString() + limpieza + CosteMensual + servicioDinar;
        }else if(edificio instanceof Hotel){
            let limpieza = edificio.limpiar();
            CosteMensual = edificio.calcularCostVigilancia();
            let servicioHabitaciones = edificio.servicioHabitaciones()
            document.getElementById("datos").innerHTML = edificio.toString() + limpieza + CosteMensual + servicioHabitaciones;
        }else if(edificio instanceof Cinema){
            let limpieza = edificio.limpiar();
            assistente = parseInt(prompt("Introduce el numero de assistentes:"));
            precioEntrada = parseFloat(prompt("Introduce el precio de la entrada de la session: "));
            let cinema = edificio.projectarSessio(assistente, precioEntrada);
            document.getElementById("datos").innerHTML = edificio.toString() + cinema + limpieza;
        }
    }
  
  }
  
  function limpiarPantalla() {
    document.getElementById("datos").innerHTML ="";
  }