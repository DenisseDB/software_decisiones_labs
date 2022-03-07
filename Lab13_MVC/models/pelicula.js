const pleiculas_favoritas = [{nombre:"Luca"}, {nombre:"Greatest Showman"}, {nombre:"Bourlesque"}];

// exporto una clase
module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_pelicula) {
        this.nombre = nueva_pelicula; // se ejectan sobre una instancia
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        pleiculas_favoritas.push(this);
        // push a mi arreglo // se ejectan sobre una instancia
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return pleiculas_favoritas;
    }
}