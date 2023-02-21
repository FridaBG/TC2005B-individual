document.getElementById("boton_prueba").onclick = () => {
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = "hola";
    respuesta.classList = [];
    respuesta.classList.add("callout alert")

}


document.getElementById("input_preuba").onkeyup = () => {
    let input = document.getElementById("input_preuba");
    input.style.color = "red";
    
}

/*document.getElementById("input_preuba").onkeyup = () => {
    let input = document.getElementById("input_preuba");
    let colors = [
        "red", "orange", "yellow","green","blue", "purple"
    ];
    
    let color = Math.floor(Math.random() * colors.lenght);
    input.style.color = colors[color];

}*/

