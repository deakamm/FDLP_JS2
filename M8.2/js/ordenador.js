class Ordinador {
    constructor(marca, model, processador, ram, discDur) {
        this.marca = marca;
        this.model = model;
        this.processador = processador;
        this.ram = ram;
        this.discDur = discDur;
    }

    getMarca() {
        return this.marca;
    }

    getModel() {
        return this.model;
    }

    getProcessador() {
        return this.processador;
    }

    getRam() {
        return this.ram;
    }

    getDiscDur() {
        return this.discDur;
    }

    setProcessador(nuevoProcessador) {
        this.processador = nuevoProcessador;
    }

    setRam(nuevaRam) {
        this.ram = nuevaRam;
    }

    setDiscDur(nuevaCapacidad) {
        this.discDur = nuevaCapacidad;
    }

    toString() {
        return `Marca: ${this.marca}
        Model: ${this.model}
        Processador: ${this.processador}
        RAM: ${this.ram} GB 
        Disc Dur: ${this.discDur} GB`;
    }

    programaEnExecucion(programa) {
        return `En aquests moments s'està executant: ${programa}`;
    }
}

