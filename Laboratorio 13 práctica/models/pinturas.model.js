const pinturas = [
    { 
        nombre: "aksjdklas" ,
        autor: "ajsndkjas" , 
        imagen: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0009_beagle_0.jpg", 
        fecha: "11212 " ,
    }, 
    {
        nombre: "fsdfsdfsd" ,
        autor: "sdfsfsdfs" , 
        imagen: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0009_beagle_0.jpg", 
        fecha: "2341 " ,
    }, 
    { 
        nombre: "sdfwef" ,
        autor: "dfewfew" , 
        imagen: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0009_beagle_0.jpg", 
        fecha: " 1313" ,
    },

];

module.exports = class Pintura {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_pintura) {
        this.nombre = nuevo_pintura.nombre || 'Firulais';
        this.raza = nuevo_pintura.autor || 'Delmer';
        this.imagen = nuevo_pintura.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nuevo_pintura.fecha || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        pinturas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return pinturas;
    }

}
