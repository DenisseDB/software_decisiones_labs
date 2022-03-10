const db = require('../util/database'); // CON ESSTA INSTANCIA HACEMOS CONUSLTA

const colores_favoritos = [{nombre:"Amarillo"}, {nombre:"Morado"}, {nombre:"Azul"}];

// exporto una clase
module.exports = class Color {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_color) {
        this.nombre = nuevo_color; // se ejectan sobre una instancia
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO capybaras (nombre, descripcion, imagen) VALUES (?, ?, ?)', // tenemos que tener el mismo numero de ? que de this.
            [this.color, this.descripcion, this.imagen]
        );
    
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM capybaras'); // ¡¡¡¡¡¡ cambiar capybaras por colores en base de datos !!!!!!!    
    }
}

// en rows se encuentra todo el registro de la consulta 
