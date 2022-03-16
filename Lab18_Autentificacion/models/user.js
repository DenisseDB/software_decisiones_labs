const usuarios = [];
const bcrypt = require('bcryptjs'); // cifrar contraseña

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nuevo_username, nuevo_password) {
        this.nombre = nuevo_nombre;
        this.username = nuevo_username;
        this.password = nuevo_password;
    }

    // guardar de manera persistente el nuevo objeto
    save(){
        // con los ? evitamos ataques de insertion a sql
        return bcrypt.hash(this.password, 12)
        .then // TERMINAR
        return debug.execute('INSERT INTO usuarios(nombre, username, password) VALUES (?,?,?)',
        [this.nombre, this.username, this.password]) 
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        // cifrar contraseña
        usuarios.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static login(username, password) {
        return true;
    }



}