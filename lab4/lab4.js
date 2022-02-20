// Ejercio 1, solicitar un numero y crear una tabla acorde al numero de entrada
// Solicitar numero
let numero_solicitado = prompt("Ingresa un numero: ");

// Creacion de tabla
function tabla_numeros() {
    let resultado = "<table>";
    for (let i = 1; i <= numero_solicitado; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}

// Del HTML obtenemos el div de tabla para imprimir
document.write(tabla_numeros());

// Ejercio 2, suma de dos numeros aleatorios
function numeros_aleatorios(){
  // prompt recibe texto, entonces con parseInt pasamos ese texto a numero
  // creamos los aleatorios y los sumamos
  var num1 = parseInt(Math.random()*100);
  var num2 = parseInt(Math.random()*100);
  let suma = num1 + num2;
  // sacamos cuanto tiempo tardo en contestrar
  var tiempo_incial = Date.now();
  // solicitamos respuesta
  var respuesta_sumatoria=parseInt(prompt("¿Cual es el resultado de la siguiente suma?:  " + num1 + "+" + num2));
  console.log(num1, num2);
  var tiempo_final = Date.now();
  // sacamos tiempo en que tardo en contestar
  var timer = (tiempo_final-tiempo_incial)/1000;
  // confirmamos que la respuesta sea correcta
  if (respuesta_sumatoria == suma){;
    document.write("</br><h3> Ejercicio 2 -> sumatoria de aleatorio</h3>");
    document.write("Correcto, tardaste: " + timer + " seg en contestar");
  }
  else{
    document.write("</br><h3> Ejercicio 2 -> sumatoria de aleatorio</h3>");
    document.write("Incorrecto, tardaste: " +  + timer + " seg en contestar");
  }
  return null;
}

document.getElementById("suma").innerHTML = numeros_aleatorios();

// Ejercio 3, extraccion de numeros de un arreglo
function recorrer_arreglo(){
  const arreglo = [-4,7,4,-6,8,-5,1,6,9,-14,-73,34,56,-81,0,0,0];
  var cont_negativos = 0;
  var cont_ceros = 0;
  var cont_positivos = 0;
// recorrer arreglo
  for(let i = 1; i< arreglo.length; i++){
    if(arreglo[i]==0){
      cont_ceros++;
    } else if (arreglo[i]<0){
      cont_negativos++
    }else{
      cont_positivos++;
    }
  }
  document.write("</br><h3> Ejercicio 3 -> recorrer arreglo</h3>");
  document.write("Cantidad de 0: " + cont_ceros + ("  Cantidad mayores a 0: " + cont_positivos + "  Cantidad menores a 0: " + cont_negativos));
  return null;
}
document.getElementById("arreglo1").innerHTML = recorrer_arreglo();

//Ejercio 4, promedio de cada renglon de matriz
function matriz(){
  const matriz = [[1,2,3,4,5],[7,24,65,23,5],[5,72,3,4,65]];
  // nuevo arreglo para promedios
  let matriz_promedio = [];
  var suma = 0;
  // recorrer filas y columnas
  for(let i = 0; i < matriz.length; i++){
    suma = 0;
    for(let j = 0; j < matriz[i].length; j++){
      suma += matriz[i][j];
    }
    // agregar los promedios a su areglo
    matriz_promedio.push(suma/matriz[i].length);
  }
  document.write("</br><h3> Ejercicio 4 -> promedio</h3>");
  document.write("El promedio es: " + "[" +  matriz_promedio + "]");
  return null;
}
document.getElementById("promedio").innerHTML = matriz();

// Ejercio 5, inverso
let numero = parseInt(prompt("Ingresa un numero: "));
let inverso = 0;

// generar arreglo del numero, dividir caracter por caracter, hacer el inverso y volver a unir el string
function inverso_numero(numero){
  document.write("</br><h3> Ejercicio 5 -> numero inverso</h3>");
  inverso =(numero.toString().split('').reverse().join('')); 
  document.write("Su inverso es: " + inverso);
  return null;
}
document.getElementById("inverso").innerHTML = inverso_numero(numero);

// Ejercio 6, poo
class Vuelo{
  constructor(origen, destino, linea){
    this.origen = origen;
    this.destino = destino;
    this.linea = linea;
  }
  mostrar(){
    return `${this.origen} es el pais de origen, con un destino a ${this.destino}, operado por ${this.linea} actualmente` ;
  }
}

class Aerlolinea extends Vuelo{
  constructor(origen, destino, linea, estado){
    super(origen, destino, linea);
    this.estado = estado;
  }
  operando(){
    return `Origen: ${this.origen}: Destino a ${this.destino}  Aerolinea: ${this.linea}, se encuentra ${this.estado}`;
  }
}

const vuelo1 = new Vuelo('Francia', 'Belgica', 'Iberia');
const vuelo2 = new Vuelo('Francia', 'Mexico', 'AirFrance');
const vuelo3 = new Aerlolinea('Francia', 'Mexico', 'Iberia', "Embarcando");
const vuelo4 = new Aerlolinea('Francia', 'Belgica', 'AirFrance', 'Cancelado');
console.log(vuelo3.operando());
console.log(vuelo4.operando());

document.write("<h3> Ejercicio 4: Vuelos partientes del Aeropuerto Paris-Charles de Gaulle </h3>");
document.write("Vuelo 1-> " + vuelo1.mostrar());
document.write("</br> Vuelo 2-> " + vuelo2.mostrar());
document.write("<h5>Estado de vuelos: </h5>");
document.write("Vuelo 1-> " + vuelo3.operando());
document.write("</br> Vuelo 2-> " + vuelo4.operando());

