// ordenar numeros
// prompt, alert no sirven en node, en node no hay forma de pedir datos

const x= 45;
const y= 2;
const z=  981;

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