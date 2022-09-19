// 1.-Creo la plantilla Button a traves de una clase para crear objetos de tipo Button
// class Button {
    // Params:
    // Texto: Cadena texto en formato string
    // Color: Cadena texto de color en formato hexadecimal sin #
    // constructor(texto, css_class) {
    //     this.text = texto;
    //     this.css_class = css_class;
    // };

    // Definimos un método manera de conectarnos a traves de una funcion
    // buildHTMLString() {
        // render() {
        // let myHTML = "<h1>Hola</h1>";
        // let myHTML = "<button>Hola</button>";
        // let myHTML = "<button>" + "Chau" + "</button>";
        // let myHTML = "<button>" + this.text + "</button>";
        // comillas con alt 96
        // let myHTML = `<button class=${this.css_class}>${this.text}</button>`;

//         return myHTML;
//     }
// };

// Importo el componente para poder crear el objeto pero tambien tengo que exportarlo
// desde su archivo de origen
import Button from "./components/buttons.js";
import Video from "./components/video.js";


// 2.-Necesito conectarme al objeto HTMLElement a traves del Id mediante getElementById
const myApp = document.getElementById('myApp');

// 3.-Creo el objeto myButton y le pongo valores a ese boton que estoy creando
// lo realizo a traves de los parámetros
// let myButton = new Button("Login", "FF0000");
// let myButton = new Button("Login", "myButton");
// Usando Bootstrap
let myButton = new Button("Login", "btn btn-outline-primary");

// 4.-Construyo un botón
//myApp.innerHTML = myButton.buildHTMLString();
myApp.innerHTML = myButton.render();


// Video desde una url externa
// let myVideov = new Video("https://www.w3schools.com/tags/movie.mp4", 320, 240, "none");
// Video desde el assets
let myVideov = new Video("../assets/video/mov_Big_Buck_Bunny.mp4", 320, 240, "none");

myApp.innerHTML += myVideov.render();