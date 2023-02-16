
var comida = "chilaquiles";  //variable se clara con var o let

let cena = "tacos"; //vamos a usar mas este tipo de variable 

let precioVariable = 70;  //se puede modificar la variable desde al consola de inspeccionar

const precio = 70;  //con este no se puede modificar desde la consola


console.log("hola") //string que va a imprimir en la consola del inspeccionar  al iniciar
console.info("Valor de la comida: " + comida) //imprimir mensajes de info
console.warn("El precio no se puede modificar"); //imprimir mensajes de advertencia
console.error("Te dije que el precio no se puede modificar") //imprimir mensajes de error

console.assert(1 === 1); //expresión lógica para hacer pruebas automáticas del código 
console.assert(1 === "1"); //va a marcar error
console.assert(1 == "1"); //correcto
console.assert(1 == true); //correcto
console.assert(1 === true); //va a marcar error

//alcance de variables 
for (var i = 1; i <= 10; i++){ //"var" tiene alcance en toda la función, no es tan bueno usar bar porque se puede controlar fuera de la función
    console.log(i);
}
console.log(i);

for (let j = 1; j <= 10; j++){  //"let" no se puede puede imprimir feura de su cicilo
    console.log(j);
}


//alter, promt, confirm

alert("hola");

let nombre = prompt("Cómo te llamas?")
console.log("Hola " + nombre); //imprimier en la consola

let hambre = confirm("Tienes hambre?");
console.log(hambre); //imprimir en la consola


// funciones tradicionales
function numero_tacos(){
    return 5;
}

console.log(numero_tacos());


//funciones modernas
() => {} //función anónima

let cantidad_tacos =  () => {
    return 5;
}

console.log(cantidad_tacos());


//html dinámico con eventos

let boton = document.getElementById("buenos_dias")
boton.innerHTML =  "Buenos días"; //Permite escribir el HTML que hay dentro del elemento 
boton.onclick = () => alert("BUEEENOS DÍAAAASS") //tiene una función anónima para que no se ejecute luego luego hasta que piques el botón

// arreglos 
const arreglo = ["Elemento"];
console.log(arreglo);

arreglo.push("Otro elemento"); //agregar otro elemento al arreglo 
console.log(arreglo);

arreglo["dos"] = 2; //agregar una localidad llamada dos con valor de 2, otra manera de agregar un arreglo para nombrar el índice o las llaves
arreglo.length = 10; //agregar espacios vacíos a un arreglo 
arreglo[20] = "Fin del arreglo"; // va a agregar 10 luhgares mas para que sean 20 

console.log(arreglo);

//recorrer arreglos 

for (let elemento in arreglo) {
    console.log(elemento)   // me devuelve el ínidice del elemento del arreglo 
}

for (let valor of arreglo) {
    console.log(valor)   // me devuelve los valore del arreglo 
}
