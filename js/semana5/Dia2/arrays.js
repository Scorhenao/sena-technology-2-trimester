
// Colecccón de datos
let list = [];



//Guardar datos en el arreglo
alert(`Bienvenido
    Registro de ciudades`)
let cantidad = parseInt(prompt(`Ingrese la cantidad de registros`))
for (let i = 0; i < cantidad; i++) {
    let edad = (prompt("Ingrese la ciudad No. ", (i+1)))
    list[i]=edad
}


let stringResponse="";

//Listar los datos del arreglo
for (let i = 0; i < list.length; i++) {
   stringResponse += `${(i+1)}) ${list[i]}\n`  //1) 22
}

alert("Listado de ciudades\n"+stringResponse)


//Metodos
// toUpperCase => Mayusculas
// toLowerCase => Minuculas


// Buscador de ciudad
let ciudad = prompt(`Ingrese la ciudad a buscar en los registros`).toLowerCase()
for (let i = 0; i < list.length; i++) {
    if(ciudad == list[i].toLowerCase()){
        alert(list[i])
    }else{
        alert("Ciudad no encontrada")
    }
}
