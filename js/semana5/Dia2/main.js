
let data = 1.3 + 1.3



// TIPOS DE OPERADORES 
//Aritmeticos

let suma = 4 + 3
let resta = 4 - 3
let div = 4 / 3
let mul = 4 * 3


// Asignación ( = , +=  ++ ) 

// let edad = "Hola";

edad += calculoEdad(5, 15)
// console.log(edad)

function calculoEdad(x, y) {
    return x * y
}

let nombre = 'Valeria Karol'


// Contacatenación

edad = " " + 58 + " " + 45 + " ";
let edadUsuario = 45
edad = `La edad de ${nombre} es de ${edadUsuario} `;

// console.log(edad)


// Comparación
let user = "yeison\n"
let password = 123456

// let usuario = prompt("Digite el usuario")
// let passwordUser = parseInt(prompt("Digite la contraseña"))


// if(user === usuario && password === passwordUser){
//     alert("Bienvenido")
// }else if(user === usuario){
//     alert("Password equivocada")
// } else if(user === usuario){
//     alert("Password equivocada")
// } else{
//     alert("Credenciales incorrectas")
// }



// Switch (Cases )
alert("Bienvenido")
let opcion = parseInt(prompt(`Digite la opción 

    1. Ciudades
    2. Aprendices`))

switch (opcion) {
    case 1:

        console.log("")
        break;
    case 2:
        alert("Valeria Karol Stefania Jennifer")

        console.log("")
        break;
    case 3:

        console.log("")
        break;
    case 4:
        alert("Valeria Karol Stefania Jennifer")
        console.log("")
    default:
        alert("Esa opción no existe")
        console.log("")
        break;

}



if (user === usuario) {
    alert("Bienvenido")
} else {
    alert("Password equivocada")
}

