const db = require('../util/database'); // acceder a info de la base de datos
const bcrypt = require('bcryptjs'); // encriptar contraseñas

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nuevo_username, nuevo_password) {
        this.nombre = nuevo_nombre;
        this.username = nuevo_username;
        this.password = nuevo_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        // encriptar la contraseña de la tabla usuarios
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado)=>{
            return db.execute(
                'INSERT INTO usuarios(nombre, username, password) VALUES(?,?,?)',
                [this.nombre, this.username, password_cifrado]);
        }).catch((error)=>{
            console.log(error);
        }); 
    }
    
    static findOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username=?',[username]);
    }

}