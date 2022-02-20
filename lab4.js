const numero_solicitado = prompt("Ingresa un número: ");

function tabla_numeros(numero_solicitado){
  let resultado = </table>;
  for(let i = 1; i <= numero_solicitado; i++){
  resultado += "<tr>";
  resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
  resultado += "</tr>"
  }

}

console.log(tabla_numeros);

document.getElementById("agregarTabla").innerHTML = tabla_numeros;
