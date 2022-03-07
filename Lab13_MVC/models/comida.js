const comida_favorita = [{nombre:"Pokes"}, {nombre:"Paella"}, {nombre:"Rabioles"}];

// exporto una clase
module.exports = class Comida {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_platillo) {
        this.nombre = nuevo_platillo; // se ejectan sobre una instancia
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        comida_favorita.push(this);
        // push a mi arreglo // se ejectan sobre una instancia
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return comida_favorita;
    }
}