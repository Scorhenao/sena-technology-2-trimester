let listaEstudiantes = [];

const OpcionAprendiz = () => {
    op = ""

    do {
        op = parseInt(prompt(`Bienvenido
        1. Ingresar aprendices
        2. Ver los aprendices
        3. Actualizar los aprendices
        4. Eliminar un aprediz
        5. salir
    Ingrese la opcion deseada:`))

        switch (op) {
            case 1:
                CrearAprendiz()
                break;
            case 2:
                LeerAprendiz()
                break;
            case 3:
                ActualizarAprendiz()
                break;
            case 4:
                EliminarAprendiz()
                break;
            default: alert("Adios")
                break;
        }
    } while (op != 5);
}

const CrearAprendiz = () => {
    //Crear datos
    let cantidad = parseInt(prompt("Cantidad de estudiante: "))

    for (let i = 0; i < cantidad; i++) {

        let aprendiz = {
            documento: parseInt(prompt((i + 1) + ") Ingrese el documento:")),
            nombre: prompt((i + 1) + ") Ingrese su nombre:"),
            apellido: prompt((i + 1) + ") Ingrese su apellido:"),
            telefono: prompt((i + 1) + ") Ingrese su número:"),
            estado: parseInt(prompt((i + 1) + `) Ingrese el estado: 
                1. activo 
                2. inactivo`)),
        }
        listaEstudiantes.push(aprendiz)
    }
}

const LeerAprendiz = () => {
    //Leer los datos
    let data = ""
    for (let i = 0; i < listaEstudiantes.length; i++) {
        if (listaEstudiantes[i].estado == 1) {
            estadoAprendiz = "Activo"
        } else {
            estadoAprendiz = "Inactivo"
        }
        data += `Documento: ${listaEstudiantes[i].documento}
        Nombre: ${listaEstudiantes[i].nombre}
        Apellido: ${listaEstudiantes[i].apellido}
        Telefono: ${listaEstudiantes[i].telefono}
        Estado: ${estadoAprendiz} \n`

    }

    alert(data)
}

const ActualizarAprendiz = () => {
    //Actualizar datos
    let updateOpcion = parseInt(prompt(`Deseas actualizar los datos de un aprendiz:
        1. SI
        2. NO`))

    dataUpdate = ""
    if (updateOpcion == 1) {
        for (let i = 0; i < listaEstudiantes.length; i++) {
            dataUpdate += `El codigo ${i} | Documento: ${listaEstudiantes[i].documento} Nombre: ${listaEstudiantes[i].nombre} ${listaEstudiantes[i].apellido} \n`
        }

        let posicion = parseInt(prompt(dataUpdate + `
            Ingrese el codigo de aprendiz a editar:`))

        let opcion = parseInt(prompt(`Que desea editar: de ${posicion}
            1) Documento
            2) Nombre
            3) Apellido`))

        switch (opcion) {
            case 1:
                newDocumento = prompt(`${listaEstudiantes[posicion].nombre} ingrese el nuevo documento del aprendiz: `)
                for (let i = 0; i < listaEstudiantes.length; i++) {
                    if (i == posicion) {
                        listaEstudiantes[i].documento = newDocumento
                    }
                }
                break;
            case 2:
                newNombre = prompt(`${listaEstudiantes[posicion].nombre} ingrese el nuevo nombre del aprendiz: `)
                for (let i = 0; i < listaEstudiantes.length; i++) {
                    if (i == posicion) {
                        listaEstudiantes[i].nombre = newNombre
                    }
                }
                break;
            case 3:
                newApellido = prompt(`${listaEstudiantes[posicion].apellido} ingrese el nuevo apellido del aprendiz: `)
                for (let i = 0; i < listaEstudiantes.length; i++) {
                    if (i == posicion) {
                        listaEstudiantes[i].apellido = newApellido
                    }
                }
                break;
        }
        
        LeerAprendiz()
    }
}

const EliminarAprendiz = () => {
    //Eliminar datos
    let updateOpcion = parseInt(prompt(`Deseas eliminar los datos de un aprendiz:
        1. SI
        2. NO`))

    dataUpdate = ""
    if (updateOpcion == 1) {
        for (let i = 0; i < listaEstudiantes.length; i++) {
            dataUpdate += `El codigo ${i} | Documento: ${listaEstudiantes[i].documento} Nombre: ${listaEstudiantes[i].nombre} ${listaEstudiantes[i].apellido} \n`
        }

        let posicion = parseInt(prompt(dataUpdate + `
            Ingrese el codigo de aprendiz a eliminar:`))

        let confirmacion = parseInt(prompt(`De seguro quieres eliminar al estudiante ${listaEstudiantes[posicion].nombre}
            1. SI
            2. NO`))

        if (confirmacion == 1) {
            listaEstudiantes.splice(posicion,1)
            alert("El aprendiz se a eliminado correctamente de la base de datos")
        } else {
            alert("El aprendiz no a sido encontrado")
        }
    }
}

OpcionAprendiz()