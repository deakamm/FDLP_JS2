class Imagen {
    constructor(imagen, title, nombre, description){
        this.imagen = imagen;
        this.title = title;
        this.nombre = nombre.toUpperCase();
        this.description = description;
    }
    toString(){
        let mostrar = `Imagen de ${this.nombre}
            ${this.description}guardado en el archivo
            ${this.imagen}`;
        return mostrar;
    }
    inicialNombre(){
        return this.nombre.charAt(0);
    }
}