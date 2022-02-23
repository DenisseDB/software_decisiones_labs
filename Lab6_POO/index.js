const contrasena1=document.getElementById("contra1");
const contrasena2=document.getElementById("contra2");
const botonVerificar=document.getElementById("verificador");
const total=document.getElementById("total");

let state  = {
    fanta: {
        precio: 12, cantidad: 0,
    },
    coca: {
        precio: 15, cantidad: 0,
    },
    pepsi: {
        precio: 10, cantidad: 0,
    },
    total: 0,
    iva: 0,
}

function validador(){
    if(contrasena1.value==contrasena2.value){
        alert("las contransenas coinciden");
    } else{
        alert("las contrasenas no coinciden")
    }
}

// boton para verificar, click es el tipo 
botonVerificar.addEventListener("click",validador);

function anadirCarrito(event){
    state[event.target.dataset.name].cantidad=event.target.value;
    state.total = (state.fanta.precio * state.fanta.cantidad) + (state.coca.precio * state.coca.cantidad) + (state.pepsi.precio * state.pepsi.cantidad);
    state.iva = state.total * 0.1;
    console.log(state);

    total.innerHTML = `Total: $${state.total} IVA: $${state.iva} FINAL: ${state.total + state.iva}`;
}

document.querySelectorAll("#agregar").forEach(agregar => agregar.addEventListener("click",anadirCarrito))

