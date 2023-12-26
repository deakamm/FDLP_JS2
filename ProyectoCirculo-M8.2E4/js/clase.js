class Punt{
    constructor(posicioX, posicioY){
        this.posicioX = posicioX;
        this.posicioY = posicioY;
    }
getPosicioX(){
    return this.posicioX;
}
getPosicioY(){
    return this.posicioY;
}

setPosicioX(posicioX){
    this.posicioX = posicioX;
}

setPosicioY(posicioY){
    this.posicioX = posicioY;
}

toString() {
    return `(${this.posicioX},${this.posicioY})`;
  }
}


class Circulo {
    constructor(centre, radi) {
        this.centre = centre; // centre es un objeto de la clase Punt
        this.radi = radi;
    }

    distanciaCentres(altreCercle) {
        let dx = this.centre.getPosicioX() - altreCercle.centre.getPosicioX();
        let dy = this.centre.getPosicioY() - altreCercle.centre.getPosicioY();
        let distanciaCentres = Math.sqrt(dx * dx + dy * dy).toFixed(2);
        console.log("La distancia del centro:",distanciaCentres);
        console.log("La distancia del centro",altreCercle);
        return distanciaCentres;
    }
    
    equals(altreCercle) {
        let equals = (
            this.centre.getPosicioX() === altreCercle.centre.getPosicioX() &&
            this.centre.getPosicioY() === altreCercle.centre.getPosicioY() &&
            this.radi === altreCercle.radi
        );
        console.log("Son eguales",equals);
        return equals;
    }
    
    sonConcentrics(altreCercle) {
        let sonConcentrics = (
            this.centre.getPosicioX() === altreCercle.centre.getPosicioX() &&
            this.centre.getPosicioY() === altreCercle.centre.getPosicioY()
        );
        console.log("Son concentrics",sonConcentrics);
        return sonConcentrics;
    }
    
    tenenIgualRadi(altreCercle) {
        let tenenIgualRadi = this.radi === altreCercle.radi;
        console.log("Tenen mismo radio",tenenIgualRadi);
        return tenenIgualRadi;
    }
    
    sonTangents(altreCercle) {
        let distancia = this.distanciaCentres(altreCercle) ;
        let sonTangents = distancia === this.radi + altreCercle.radi;
        console.log("Son tangents",sonTangents);
        return sonTangents;
    }
    
    sonSecants(altreCercle) {
        let distancia = this.distanciaCentres(altreCercle);
        let sonSecants = distancia < this.radi + altreCercle.radi;
        console.log("Son secants",sonSecants);
        return sonSecants;
    }
    
    noEsToquen(altreCercle) {
        let distancia = this.distanciaCentres(altreCercle);
        let noEsToquen = distancia > this.radi + altreCercle.radi;
        console.log("No se toquent",noEsToquen);
        return noEsToquen;
    }
    

    toString() {
        return `Centre: ${this.centre.toString()}, Radi: ${this.radi}`;
    }
}
