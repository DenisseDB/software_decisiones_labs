const animales_favoritos = [{nombre:"Koala"}, {nombre:"Perezoso"}, {nombre:"Ballena"}, {nombre:"Elefante"}];

// exporto una clase
module.exports = class Animal {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_animal) {
        this.nombre = nuevo_animal; // se ejectan sobre una instancia
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        animales_favoritos.push(this);
        // push a mi arreglo // se ejectan sobre una instancia
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return animales_favoritos;
    }
}