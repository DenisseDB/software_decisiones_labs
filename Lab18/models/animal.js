const animales_fav = [{nombre:"Koala"}, {nombre:"Perezoso"}, {nombre:"Elefante"}];

// exporto una clase
module.exports = class Animal {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_animal) {
        this.nombre = nuevo_animal; // se ejectan sobre una instancia
    } 

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        animales_fav.push(this);
        // push a mi arreglo // se ejectan sobre una instancia
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return animales_fav;
    }
}




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