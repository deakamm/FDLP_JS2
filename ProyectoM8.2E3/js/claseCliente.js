class Cliente {
    constructor(dni, nombre, apellidos) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cuentas = [];
    }

    // Ya vosotros sabéis hacer getters y setters

    getDni() {
        return this.dni;
    }
    getNombre() {
        return this.nombre;
    }
    getApellidos() {
        return this.apellidos;
    }

    setDni() {
        this.dni;
    }
    setNombre() {
        this.nombre;
    }
    setApellidos() {
        this.apellidos;
    }


    addCuenta(cuenta) {
        let mensaje;
        this.cuentas.push(cuenta);
        mensaje = "La cuenta " + cuenta.numCuenta + " ha sido registrado con  exito";
        return mensaje; 
    }

    buscarCuenta(numCuenta) {
        let indice = -1;
        let encontrado = false;
        let i = 0;
        let vueltas = this.cuentas.length;
        while (i < vueltas && !encontrado) {
            if (this.cuentas[i].getNumCuenta() == numCuenta) {
                indice = i;
                encontrado = true;
            }
            i++
        }
        return indice;
    }


    toJS() {
        let mostrar = "\n";
        mostrar += (this.nombre + " " + this.apellidos).toUpperCase() + "\n";
        mostrar += "DNI Número: " + this.dni + "\n";

        if (this.cuentas.length == 0) {
            mostrar += "Aún no se le han agregado cuentas";
        } else {
            mostrar += "CUENTAS:\n"
            mostrar += this.cuentas.join("\n");
        }
        return mostrar;
    }

    toString() {
        let mostrar = "<h2>DATOS DEL CLIENTE</h2>";
        mostrar += "<strong>" + (this.nombre + " " + this.apellidos).toUpperCase() + "</strong><br>";
        mostrar += "DNI Número: " + this.dni + "<br>";
        
        if (this.cuentas.length == 0) {
            mostrar += "Aún no se le han agregado cuentas";
        } else {
            mostrar += "CUENTAS:<br>"
            mostrar += this.cuentas.join("<br>");
        }
        mostrar += "<p><button onclick='limpiarPantalla()'>continuar</button></p>"
        return mostrar;
    }

}





// class Cliente {
//     constructor(dni, nombre, apellido){
//         this.dni = dni;
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.cuentas = [];
//     }

//     getDni(){
//         return this.dni;
//     }
//     getNombre(){
//         return this.nombre;
//     }
//     getApellido(){
//         return this.apellido;
//     }

//     setDni(){
//         this.dni;
//     }
//     setNombre(){
//         this.nombre;
//     }
//     setApellido(){
//         this.apellido;
//     }

//     toString(){
//         let mostrar = "";
//         mostrar+= "DNI: " + this.dni + "<br>";
//         mostrar+= "Nombre: " + this.nombre + "<br>";
//         mostrar+= "Apellido: " + this.apellido + "<br>";

//         return mostrar;
//     }
// }