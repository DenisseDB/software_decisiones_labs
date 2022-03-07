const colores_favoritos = [{nombre:"Amarillo"}, {nombre:"Morado"}, {nombre:"Azul"}];

// exporto una clase
module.exports = class Color {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_color) {
        this.nombre = nuevo_color; // se ejectan sobre una instancia
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        colores_favoritos.push(this);
        // push a mi arreglo // se ejectan sobre una instancia
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return colores_favoritos;
    }
}
