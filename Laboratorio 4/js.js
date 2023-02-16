
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
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);