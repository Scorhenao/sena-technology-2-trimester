// Arreglos 
// Coleccion de datos 

let listadoEstudiante = [];


function MenuProyecto() {
    let opcion = 0;
    do {
        opcion = parseInt(prompt(`Bienvenido 
               Digite la opción 
           
               1. Crear
               2. Listar
               3. Actualizar
               4. Eliminar
               5. Salir`))

        switch (opcion) {
            case 1:
                CrearAprendiz()
                break;
            case 2:
                ListarAprendices()
                break;
            case 3:
                ActualizarAprendices()
                break;
            case 4:
                EliminarAprendiz()
                break;
            case 5:
                alert("Adios")
                break;
            default:
                alert("Esa opción no existe")
                break;
        }
    } while (opcion !== 5);
}

function CrearAprendiz() {
    // Crear aprendiz ------------------------------------
    let cantidad = parseInt(prompt("Cantidad a registar"))

    for (let i = 0; i < cantidad; i++) {
        let aprendiz = {
            documento: prompt("1) Documento del aprendiz No. " + (i + 1)),
            nombre: prompt("2) Nombre del aprendiz No. " + (i + 1)),
            apellidos: prompt("3) Apellidos del aprendiz No. " + (i + 1)),
            telefono: prompt("4) Telefono del aprendiz No. " + (i + 1)),
            estado: false
        }
        listadoEstudiante.push(aprendiz)
    }
}

function ListarAprendices() {
    // Listar aprendices------------------------------------
    let data = "";
    let estadoAprediz;

    // Con una condicion doble
    for (let i = 0; i < listadoEstudiante.length; i++) {
        if (listadoEstudiante[i].estado) {
            estadoAprediz = 'Activo'
        } else {
            estadoAprediz = 'Inactivo'
        }
        data += `
        Documento: ${listadoEstudiante[i].documento}
        Nombre: ${listadoEstudiante[i].nombre}
        Apellidos: ${listadoEstudiante[i].apellidos}
        Telefono: ${listadoEstudiante[i].telefono}
        Estado: ${estadoAprediz}\n`
    }
    alert(data)
}

function ActualizarAprendices() {
    // Actualizar aprendiz------------------------------------
    let updateOpcion = parseInt(prompt(`Desea actualizar los datos de un aprendiz?
        1. SI
        2. NO`))
    let dataUpdate = ""
    if (updateOpcion == 1) {
        //Con un operador ternario
        for (let i = 0; i < listadoEstudiante.length; i++) {
            dataUpdate += `
            codigo: ${i}  |  Nombre: ${listadoEstudiante[i].nombre} ${listadoEstudiante[i].apellidos}`
        }

        let posicion = parseInt(prompt(dataUpdate + `
    
        Ingrese el código del aprendiz a editar`))

        let opcionEdit = parseInt(prompt(`Que quiere bobo hp?
            1. Documento
            2. Nombre
            3. Apellido`))

        if (opcionEdit == 1) {
            listadoEstudiante[posicion].documento = prompt("Ingrese el nuevo documento");
            let nuevolistado = ""
            for (let i = 0; i < listadoEstudiante.length; i++) {
                nuevolistado += `
            codigo: ${i}  |  Nombre: ${listadoEstudiante[i].nombre} ${listadoEstudiante[i].apellidos}`
            }
            alert(nuevolistado)
        }else if(opcionEdit == 2) {
            listadoEstudiante[posicion].nombre = prompt("Ingrese el nuevo nombre");
            let nuevolistado = ""
            for (let i = 0; i < listadoEstudiante.length; i++) {
                nuevolistado += `
            codigo: ${i}  |  Nombre: ${listadoEstudiante[i].nombre} ${listadoEstudiante[i].apellidos}`
            }
            alert(nuevolistado)
        }else if (opcionEdit == 3) {
            listadoEstudiante[posicion].apellidos = prompt("Ingrese el nuevo Apellido");
            let nuevolistado = ""
            for (let i = 0; i < listadoEstudiante.length; i++) {
                nuevolistado += `
            codigo: ${i}  |  Nombre: ${listadoEstudiante[i].nombre} ${listadoEstudiante[i].apellidos}`
            }
            alert(nuevolistado)
        }else {
            MenuProyecto ()
        }
        
        let nuevolistado = ""
        for (let i = 0; i < listadoEstudiante.length; i++) {
            nuevolistado += `
            codigo: ${i}  |  Nombre: ${listadoEstudiante[i].nombre} ${listadoEstudiante[i].apellidos}`
        }
        alert(nuevolistado)
    }
}

function EliminarAprendiz() {
    Mostrar = ""
    for (let i = 0; i < listadoEstudiante.length; i++) {
        Mostrar += `<----------------->
        El codigo: ${i} 
        Documento: ${listadoEstudiante[i].documento} 
        Nombre: ${listadoEstudiante[i].nombre}
        Apellido: ${listadoEstudiante[i].apellidos} `
    }
    let posicion = parseInt(prompt("Ingrese el codigo del aprendiz a eliminar:  " + Mostrar))

    let confirmacion = parseInt(prompt(`Estas Segur@? ${listadoEstudiante[posicion].nombre}
        1.Si
        2.No`))
    if (confirmacion == 1) {
        listadoEstudiante.splice(posicion, 1)
        alert("Mi papa se llama edgar")
    } else {
        alert("No tiene papa")
    }

}

MenuProyecto()