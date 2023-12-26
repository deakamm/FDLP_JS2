class Persona {
    constructor(nombreCompleto, pesoKg, estaturaCm) {
      this.nombreCompleto = nombreCompleto;
      this.pesoKg = pesoKg;
      this.estaturaCm = estaturaCm;
      this.hobbies = [];
    }
  
    calcularIMC() {
      const estaturaMetros = this.estaturaCm / 100;
      return this.pesoKg / Math.pow(estaturaMetros, 2);
    }
  
    agregarHobbie(valor) {
      this.hobbies.push(valor);
    }
  
    toString() {
      return `Nombre: ${this.nombreCompleto}, Peso: ${this.pesoKg} kg, Estatura: ${this.estaturaCm} cm, IMC: ${this.calcularIMC().toFixed(2)}, Hobbies: ${this.hobbies.join("-")}`;
    }
  }
  
  const personas = [
    new Persona("Juan Pérez", 75, 175),
    new Persona("María López", 62, 160),
    new Persona("Carlos Gómez", 80, 180),
  ];
  

  function p2d() {
    alert(personas[1].toString());
  }
  
  personas[0].agregarHobbie("Pintura");
  personas[0].agregarHobbie("Atletismo");
  
  function p2e() {
    personas.forEach(persona => {
      console.log(persona.toString());
    });
  }
  