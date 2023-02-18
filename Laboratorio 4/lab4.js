
// 1 - Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al 
//número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida

const num = prompt("Ingrese un número");

document.write(" <h3>Ejercicio 1</h3> <br> <table  border=1px>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (let i = 1; i <= num; i++) {

  const cuadrado = i ** 2;
  const cubo = i ** 3;
  document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
}

document.write("</table>");


// 2- Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
// Salida: La página debe indicar si el resultado fue correcto o incorrecto,
// y el tiempo que tardó el usuario en escribir la respuesta.


const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

const resultado = num1 + num2;

const tiempoInicio = Date.now(); 
const respuesta = prompt("Cuánto es " + num1  + " + " + num2 + "?");

const tiempoFinal = Date.now(); 
const tiempoTotal = (tiempoFinal - tiempoInicio) / 1000;

if (respuesta == resultado) {
 
  document.write("  <h3>Ejercicio 2</h3> <br> La respuesta es correcta y tardaste "  + tiempoTotal + " segundos.");
} else {

  document.write(" <h3>Ejercicio 2</h3> <br> La respuesta es incorrecta y tardaste " + tiempoTotal + "segundos.");
}


//Función: contador. Parámetros: Un arreglo de números. 
//Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's,
// y la cantidad de valores mayores a 0 en el arreglo.


function contador(arreglo){

    let numNegativo = 0;
    let numPositivo = 0;
    let cero = 0;

    for (let valor of arreglo) {

        if (valor < 0){
            numNegativo++ ;
        }  
        
        else if(valor === 0){
            cero++
        }

        else{
            numPositivo++;
        }
        // me devuelve los valores del arreglo 
    }

    document.write("<br> <h3>Ejercicio 3</h3> <br> La cantidad de números negativos es " + numNegativo + ", la cantidad de ceros es " + cero + " y la cantidad de positivos es " + numPositivo  + "." );
   
}

const arr = [0, -3, -4, 0, 9, 8, -8, 7, 3, 0];

console.log(contador(arr));


//Función: promedios. 
//Parámetros: Un arreglo de arreglos de números. 
//Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function promedios(matriz) {
    const promediosArr = [];
    for (let i = 0; i < matriz.length; i++) {
      let suma = 0;
      for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
      }
      promediosArr.push(suma / matriz[i].length);
    }
    document.write(" <h3>Ejercicio 4</h3> <br> Los promedios son: " + promediosArr);
}

const calif = [[99,100,80],[78,95,85],[100,100,100]];
console.log(promedios(calif));


//5- Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

function inverso(num){
   const num_invertido = num.toString().split("").reverse().join("");
   document.write("<br><h3>Ejercicio 5</h3><br> El número invertido es " + num_invertido + ".")
}

let numero = 123;
console.log(inverso(numero));

//Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que 
//hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML,
// y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML.

document.write("<br><h3>Ejercicio 6</h3><br>");

function Personaje(nombre, vida, posicion) { //Objeto personaje
    this.nombre = nombre;
    this.vida = vida;
    this.posicion = posicion;
 
    this.saltar = function() {     // Método 1
      document.write(this.nombre + " está saltando");
    };
  
    this.avanzar = function(distancia) { // Método 2
      this.posicion += distancia;
      document.write("<br>" + this.nombre + " avanzó " + distancia + " unidades, su posición actual es: " + this.posicion);
    };
  }
  
  const Frida = new Personaje("Frida", 100, 0);   // Constructor personaje
  
  // Llamar a los métodos del personaje
Frida.saltar(); // Imprime "Mario está saltando"
Frida.avanzar(10); // Imprime "Mario ha avanzado 10 unidades. Nueva posición: 10"
  
  
  
  
  
  
