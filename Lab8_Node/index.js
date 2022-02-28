function promedio(){
    const arreglo = [34, 75, 2, 45, 1, 75, 25, 91];
    let suma = 0;
    let i = 0;

    while(i < arreglo.length){
        suma += arreglo[i++];
    }

    let resultado = suma / arreglo.length;
    console.log("El promedio del arreglo [34,75,2,45,1,75,25,91] es = " + resultado);
}

promedio();

// recibir una string y pasarla a texto
//const filesystem = require('fs');
//filesystem.writeFileSync('arreglo.txt', 'Probando la creacion de archivos de texto');

// ordenar numeros
const x= prompt("Introduce un número: ")
const y= prompt("Introduce un número: ")
const z= prompt("Introduce un número: ")

if(x >= y && x >= z){ // x es el mayor
    if(y >= z){
        console.log("<br><h1> Acomodo de numeros</h1></br>");
        console.log("<br>", x);
        console.log("<br>", y);
        console.log("<br>", z);
    }else{
        console.log("<br><h1> Acomodo de numeros</h1></br>");
        console.log("<br>", x);
        console.log("<br>", z);
        console.log("<br>", y);
    }
}else if(y >= x && y >= z){ // y es el mayor
    if ( x >= z){
        console.log("<br><h1> Acomodo de numeros</h1></br>");
        console.log("<br>", y);
        console.log("<br>", x);
        console.log("<br>", z);
    } else{
        console.log("<br><h1> Acomodo de numeros</h1></br>");
        console.log("<br>", y);
        console.log("<br>", z);
        console.log("<br>", x);
    }

}else{ // z es el mayot
    if(x >= y){
        console.log("<br><h1>Acomodo de numeros</h1></br>");
        console.log("<br>", z);
        console.log("<br>", x);
        console.log("<br>", y); 
    }else{
        console.log("<br><h1> Acomodo de numeros</h1></br>");
        console.log("<br>", z);
        console.log("<br>", y);
        console.log("<br>", x);
    }
}

// servidor
const http = require('http');

const server = http.createServer( (request, response) => {
  response.setHeader('Content-Type', 'text/html')
  fs.readFile(__dirname + "/lab1.html") // para cargar el archivo
})

server.listen(3000);
