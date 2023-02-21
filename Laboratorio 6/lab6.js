

//BOTON 1
let  description = () => {
    let respuesta = document.getElementById("answer");
    respuesta.innerHTML = "Your sweat speaks for itself, so now it’s time to embrace it. Sleek, soft and comfortable fabrics meet powerful and resilient designs in the new SWEAT collection. DYNMC™️ fabric (powered by Sensil Nylon 66) heightens breathability whilst still providing maximum durability, so you can stay cool during the sweatiest sessions, and rely on SWEAT to endure your workouts time and time again. In the collection that you’ll feel hyped to wear for your next workout, all that’s left to do is sweat.";
    respuesta.classList = [];

    document.getElementById("desc_1").onclick = hide_description;
   
}

document.getElementById("desc_1").onclick = description;


let  hide_description = () => {
    let respuesta = document.getElementById("answer");
    respuesta.innerHTML = "";
    respuesta.classList = [];

    document.getElementByValue("desc_1").onclick = description;
}


//BOTON 2
let  description2 = () => {
    let respuesta = document.getElementById("answer_2");
    respuesta.innerHTML = "Your sweat speaks for itself, so now it’s time to embrace it. Sleek, soft and comfortable fabrics meet powerful and resilient designs in the new SWEAT collection. DYNMC™️ fabric (powered by Sensil Nylon 66) heightens breathability whilst still providing maximum durability, so you can stay cool during the sweatiest sessions, and rely on SWEAT to endure your workouts time and time again. In the collection that you’ll feel hyped to wear for your next workout, all that’s left to do is sweat.";
    respuesta.classList = [];

    document.getElementById("desc_2").onclick = hide_description2;
   
}

document.getElementById("desc_2").onclick = description2;


let  hide_description2 = () => {
    let respuesta = document.getElementById("answer_2");
    respuesta.innerHTML = "";
    respuesta.classList = [];

    document.getElementById("desc_2").onclick = description2;
}

//BOTON 3
let  description3 = () => {
    let respuesta = document.getElementById("answer_3");
    respuesta.innerHTML = "In the gym, at home or out and about, be hydration-ready. The Gymshark 1L Water Bottle features a convenient side-handle and metal crew top lid to make carrying it everywhere with you as effortless as possible.";
    respuesta.classList = [];

    document.getElementById("desc_3").onclick = hide_description3;
   
}

document.getElementById("desc_3").onclick = description3;


let  hide_description3 = () => {
    let respuesta = document.getElementById("answer_3");
    respuesta.innerHTML = "";
    respuesta.classList = [];

    document.getElementById("desc_3").onclick = description3;
}


//ACTUALIZAR PRECIO


function TotalPrice1() {
    let price = document.getElementById("price");
    let tax = document.getElementById("tax");

    const UnitPrice = 60; 
    const quantity = document.getElementById("quantity").value; 
    const TotalPrice1 = (UnitPrice * quantity); 
    const TotalTax=  (UnitPrice * quantity) + ((UnitPrice * quantity)*.16)
    price.innerHTML = TotalPrice1;
    tax.innerHTML = TotalTax;
}



function TotalPrice2() {
    let price2 = document.getElementById("price2");
    let tax2 = document.getElementById("tax2");

    const UnitPrice2 = 35; 
    const quantity2 = document.getElementById("quantity2").value; 
    const TotalPrice2 = UnitPrice2 * quantity2; 
    const TotalTax2=  (UnitPrice2 * quantity2) + ((UnitPrice2 * quantity2)*.16)
    price2.innerHTML = TotalPrice2;
    tax2.innerHTML = TotalTax2;
}

function TotalPrice3() {
    let price3 = document.getElementById("price3");
    let tax3 = document.getElementById("tax3");

    const UnitPrice3 = 15; 
    const quantity3 = document.getElementById("quantity3").value; 
    const TotalPrice3 = UnitPrice3 * quantity3; 
    const TotalTax3=  (UnitPrice3 * quantity3) + ((UnitPrice3 * quantity3)*.16)
    price3.innerHTML = TotalPrice3;
    tax3.innerHTML = TotalTax3;
}

