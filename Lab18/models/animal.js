const db = require('../util/database');

// exporto una clase
module.exports = class Animal {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen) { // que es lo que vamos a usar de la bd
        this.nombre = nuevo_nombre; 
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO id (nombre, descripcion, imagen) VALUES (?, ?, ?)',  //insertar en la bd, los ? evitar ataques
            [this.nombre, this.descripcion, this.imagen]); // esto es lo que vamos a instertar
        // push a mi arreglo // se ejectan sobre una instancia
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
       // return animales_fav;
        return db.execute('SELECT * FROM id'); //id si es el nombre de la tabla?
    }
}



// string obj 


/*
module.exports = class Animal {

//Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO capybaras (nombre, descripcion, imagen) VALUES (?, ?, ?)', 
            [this.nombre, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM capybaras');
    }

    static fetchOne(capybara_id) {
        return db.execute('SELECT * FROM capybaras WHERE id=?', [capybara_id]);
    }

}
*/