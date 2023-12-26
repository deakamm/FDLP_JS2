class Hotel {
    constructor(nombre, numPlantas, numHabitaciones, superficieTotal) {
      this.nombre = nombre;
      this.numPlantas = numPlantas;
      this.numHabitaciones = numHabitaciones;
      this.superficieTotal = superficieTotal;
    }
  
    // Getters y Setters
    getNombre() {
      return this.nombre;
    }
  
    getNumPlantas() {
      return this.numPlantas;
    }

    getNumHabitaciones() {
      return this.numHabitaciones;
    }

    getSuperficieTotal() {
      return this.superficieTotal;
    }

    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setNumPlantas(numPlantas) {
      this.numPlantas = numPlantas;
    }
  
    setNumHabitaciones(numHabitaciones) {
      this.numHabitaciones = numHabitaciones;
    }
  
    setSuperficieTotal(superficieTotal) {
      this.superficieTotal = superficieTotal;
    }

    toJS() {
      return `Nombre: ${this.nombre} 
      tiene ${this.numPlantas} Plantas, 
      ${this.numHabitaciones} Habitaciones 
      y una superficie de : ${this.superficieTotal} m2`;
    }
  
    calcularMantenimiento() {
      let habitacionesPorPersona = 20;
      let costoPorPersona = 1500; // € al mes
  
      let personasNecesarias = Math.ceil(this.numHabitaciones / habitacionesPorPersona);
      let costoMantenimiento = personasNecesarias * costoPorPersona;
  
      return { personasNecesarias, costoMantenimiento };
    }

    toString() {
      return `Nombre: ${this.nombre}  
       tiene ${this.numPlantas} Plantas, 
       ${this.numHabitaciones} Habitaciones
      y una superficie de : ${this.superficieTotal} m2`;
    }

  }
  
  
  