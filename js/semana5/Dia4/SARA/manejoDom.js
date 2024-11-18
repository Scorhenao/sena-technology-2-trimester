
let querySelector = document.querySelector("#claseP");
// console.log(querySelector)

let querySelectorAll = document.querySelectorAll(".claseP")
// console.log(querySelectorAll)

let getElementById = document.getElementById("titulo")
// console.log(getElementById)

let getElementByTangName = document.getElementsByTagName('h2')
// console.log(getElementByTangName)



let listadoCedulaEstudiante = [{ "document": 1051822577 }, { "document": 1051890890 }];
let listadoEstudiantes = [{nombre: "Nickol Dayana", apellidos: "Escobar Gaviria", estado:true}];

function obtenerNombre() {
    let getElementByIdInput = document.getElementById("nombreUsuario").value
    let apellido = document.getElementById("apellidoUsuario").value

    if(getElementByIdInput=='' || apellido==''){
        notificaciones(document.getElementById('nombreUsuario'), document.getElementById('messajeErrorNombre'))
    }else{
        let aprendiz = {
            nombre: getElementByIdInput,
            apellidos: apellido,
            estado: true
        }
        listadoEstudiantes.push(aprendiz)
        console.log(listadoEstudiantes)
        document.getElementById("nombreUsuario").value = ""
        document.getElementById("apellidoUsuario").value = ""
    }
}


function validarDocument() {
    let documentoUsuario = document.getElementById("nombreUsuario").value
    
    if(documentoUsuario == ''){ 
        document.getElementById('nombreUsuario').style.border="1px solid red"
        document.getElementById('messajeErrorNombre').style.display="block"
        document.getElementById('messajeErrorNombre').innerText = "El campo es requerido"
    }

    let encontrado = false;
    for (let i = 0; i < listadoCedulaEstudiante.length; i++) {
        if (documentoUsuario == listadoCedulaEstudiante[i].document) {
            encontrado = true;
        }
    }

    console.log(encontrado)

    if (encontrado) {
        alert("El usuario ya existe")
        document.getElementById("nombreUsuario").value = "";
        document.getElementById('nombreUsuario').style.border="1px solid red"
        document.getElementById('messajeErrorNombre').innerText = "El campo es requerido"
        document.getElementById('messajeErrorNombre').style.display="block"
    }
}


function validatorLenght(){
    document.getElementById('nombreUsuario').style.border="1px solid black"
    document.getElementById('messajeErrorNombre').style.display="none"

    if(document.getElementById("nombreUsuario").value.length>10){
        document.getElementById('messajeErrorNombre').style.display="block"
        document.getElementById('messajeErrorNombre').innerText = "Solo puede escribir 10 numeros"
        limitarLognitudInput(document.getElementById("nombreUsuario"), 10);
    }else if(document.getElementById("nombreUsuario").value.length == 10){
        document.getElementById('messajeErrorNombre').style.display="none"
    }else if(document.getElementById("nombreUsuario").value.length < 7){
        document.getElementById('messajeErrorNombre').style.display="block"
        document.getElementById('messajeErrorNombre').innerText = "Solo puede escribir 10 numeros"
    }
}


function limitarLognitudInput(inputId, cantidad){
    if(inputId.value.length > cantidad){
        inputId.value = inputId.value.slice(0, cantidad)
    }
}

function notificaciones(inputId, smallError){
    inputId.style.border="1px solid red"
    smallError.style.display="block"
    smallError.innerText = "El campo es requerido"
}