//VARIABLES 
let nombreUsuario = "Estefania";
const password = "Password!123";


//OPERADORES

// Aritmeticos (+ ; - ; * ; / ; %)
// Lógicos (<=;>= )
// Comparativos ( == ; === ; != ; || ; && )
// Asignación ( = ; += ; -=) 

//CONTATENAR (Alt Gr + } )

let nombreConcatenado = "Nombre: " + nombreUsuario +
    "\nPassword: " + password;

let nombreConcatenado2 = `Nombre: ${nombreUsuario}
Password: ${password}`;



//CONDICIONALES
let estado = true;

let aprendiz = "Samuel Cordoba";
let nota1 = 5;
let nota2 = 3;
let nota3 = 0;


let promedio = (nota1 + nota2 + nota3) / 3;
console.log(promedio)
//Simples
if (promedio > 4) {
    console.log(aprendiz + " ha ganado");
} else if (promedio < 2) {
    console.log(aprendiz + " no tiene perdón de Dios");
} else if (promedio > 2 && promedio < 4) {
    console.log(aprendiz + " ha ingresado a plan de refuerzo");
} else {
    console.log(aprendiz + " no se que pueda pasar con él");
}

console.log('--------------------------------------');

//Operador ternario 
let edad = 30;
if (edad < 20) {
    console.log("No tiene la edad");
} else {
    console.log("Bienvenido")
}
console.log('--------OPERADOR TERNARIO---------');

edad < 20 ? console.log("No tiene la edad") : console.log("Bienvenido");

console.log(edad < 20 ? 'No tiene las edad' : 'Bienvenido');

console.log('--------SWITCH---------');

let opcion = prompt("Ingrese la opción") // '4'
opcion = parseInt(opcion); // 4

switch (opcion) {
    case 1:

        break;
    case 2:

        break;
    default:
        break;
}