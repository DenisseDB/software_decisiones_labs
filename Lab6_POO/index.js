document.getElementById("contraseña").onkeyup = () => {
    document.getElementById("respuesta_contraseña").innerHTML = "Acompaña tu " + document.getElementById("contraseña").value + " con una manzana";
}