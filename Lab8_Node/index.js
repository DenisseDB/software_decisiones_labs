
//const http = require('http');

//const server = http.createServer( (request, response) => {
    
//});

//server.listen(3000);


// recibir un arreglo y calcular su promedio
function promedio(){
    const arreglo = [34, 75, 2, 45, 1, 75, 25, 91];
    let suma = 0;
    let i = 0;

    while(i < arreglo.length){
        suma += arreglo[i++];
    }

    let resultado = suma / arreglo.length;
    document.write("El promedio del arreglo [34,75,2,45,1,75,25,91] es = " + resultado);
}

promedio();

// recibir una string y pasarla a texto
const filesystem = require('fs');
filesystem.writeFileSync('arreglo.txt', 'Probando la creacion de archivos de texto');

// ordenar numeros
const x= prompt("Introduce un número: ")
const y= prompt("Introduce un número: ")
const z= prompt("Introduce un número: ")

if(x >= y && x >= z){ // x es el mayor
    if(y >= z){
        document.write(x);
        document.write(y);
        document.write(z);
    }else{
        document.write(x);
        document.write(z);
        document.write(y);
    }
}else if(y >= x && y >= z){ // y es el mayor
    if ( x >= z){
        document.write(y);
        document.write(x);
        document.write(z);
    } else{
        document.write(y);
        document.write(z);
        document.write(x);
    }

}else{ // z es el mayot
    if(x >= y){
        document.write(z);
        document.write(x);
        document.write(y); 
    }else{
        document.write(z);
        document.write(y);
        document.write(x);
    }
}