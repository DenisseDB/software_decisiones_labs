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
document.getElementById("tabla").innerHTML = tabla_numeros();


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
  return(cont_ceros, cont_negativos, cont_positivos);
}
document.getElementById("arreglo1").innerHTML = recorrer_arreglo();

/* Ejercio 4, promedio de cada renglon de matriz
function matriz(){
  const matriz = [[1,2,3,4,5],[7,24,65,23,5],[5,72,3,4,65]];
  var suma = 0;
  var promedio = 0;
  var suma = 0;
  for(let i = 0; i < matriz.length; i++){
    suma = 0;
  }
  for(let j = 0; j < matriz.length; i++){
    suma = suma + matriz[i][j];
  }
  promedio = suma / j;
}
*/

// Ejercio 5, inverso
let numero = parseInt(prompt("Ingresa un numero: "));
let inverso = 0;

// generar arreglo del numero, dividir caracter por caracter, hacer el inverso y volver a unir el string
function inverso_numero(numero){
  document.write("</br><h3> Ejercicio 5 -> numero inverso</h3>");
  inverso =(numero.toString().split('').reverse().join('')); 
  document.write("Su inverso es: " + inverso);
}
document.getElementById("inverso").innerHTML = inverso_numero(numero);




