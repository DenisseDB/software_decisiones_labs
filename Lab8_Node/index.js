
const filesystem = require('fs');

//const http = require('http');

//const server = http.createServer( (request, response) => {
    
//});

//server.listen(3000);


// primera parte
function promedio(){
    const arreglo = [34, 75, 2, 45, 1, 75, 25, 91];
    let suma = 0;
    let i = 0;

    while(i < arreglo.length){
        suma += arreglo[i++];
    }

    let resultado = suma / arreglo.length;
    console.log("el promedio del arreglo [34,75,2,45,1,75,25,91] es " + resultado);
}

promedio();