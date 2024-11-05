let listaEstudiantes = [];

const OpcionAprendiz = () => {
    let opcion;

    do {
        opcion = parseInt(prompt(`Bienvenido
        1. Ingresar aprendices
        2. Ver los aprendices
        3. Actualizar los aprendices
        4. Eliminar un aprendiz
        5. Salir
    Ingrese la opción deseada:`));

        switch (opcion) {
            case 1:
                CrearAprendiz();
                break;
            case 2:
                LeerAprendiz();
                break;
            case 3:
                ActualizarAprendiz();
                break;
            case 4:
                EliminarAprendiz();
                break;
            case 5:
                alert("Adiós");
                break;
            default:
                alert("Opción inválida, intente nuevamente.");
        }
    } while (opcion !== 5);
};

const CrearAprendiz = () => {
    const cantidad = parseInt(prompt("Cantidad de estudiantes:"));

    for (let i = 0; i < cantidad; i++) {
        const aprendiz = {
            documento: parseInt(prompt(`(${i + 1}) Ingrese el documento:`)),
            nombre: prompt(`(${i + 1}) Ingrese su nombre:`),
            apellido: prompt(`(${i + 1}) Ingrese su apellido:`),
            telefono: prompt(`(${i + 1}) Ingrese su número de teléfono:`),
            estado: parseInt(prompt(`(${i + 1}) Ingrese el estado: 
                1. Activo 
                2. Inactivo`)),
        };
        listaEstudiantes.push(aprendiz);
    }
};

const LeerAprendiz = () => {
    let data = "Lista de Aprendices:\n";

    listaEstudiantes.forEach((aprendiz, index) => {
        const estadoAprendiz = aprendiz.estado === 1 ? "Activo" : "Inactivo";
        data += `${index + 1}. Documento: ${aprendiz.documento}, Nombre: ${aprendiz.nombre} ${aprendiz.apellido}, Teléfono: ${aprendiz.telefono}, Estado: ${estadoAprendiz}\n`;
    });

    alert(data || "No hay aprendices registrados.");
};

const ActualizarAprendiz = () => {
    if (!listaEstudiantes.length) {
        alert("No hay aprendices registrados para actualizar.");
        return;
    }

    let dataUpdate = "Lista de Aprendices:\n";
    listaEstudiantes.forEach((aprendiz, index) => {
        dataUpdate += `${index}. Documento: ${aprendiz.documento}, Nombre: ${aprendiz.nombre} ${aprendiz.apellido}\n`;
    });

    const posicion = parseInt(prompt(dataUpdate + "Ingrese el código del aprendiz a editar:"));
    if (isNaN(posicion) || posicion < 0 || posicion >= listaEstudiantes.length) {
        alert("Código inválido.");
        return;
    }

    const opcion = parseInt(prompt(`¿Qué desea editar del aprendiz ${posicion}?
        1) Documento
        2) Nombre
        3) Apellido`));

    switch (opcion) {
        case 1:
            listaEstudiantes[posicion].documento = prompt("Ingrese el nuevo documento:");
            break;
        case 2:
            listaEstudiantes[posicion].nombre = prompt("Ingrese el nuevo nombre:");
            break;
        case 3:
            listaEstudiantes[posicion].apellido = prompt("Ingrese el nuevo apellido:");
            break;
        default:
            alert("Opción inválida.");
    }

    LeerAprendiz();
};

const EliminarAprendiz = () => {
    if (!listaEstudiantes.length) {
        alert("No hay aprendices registrados para eliminar.");
        return;
    }

    let dataUpdate = "Lista de Aprendices:\n";
    listaEstudiantes.forEach((aprendiz, index) => {
        dataUpdate += `${index}. Documento: ${aprendiz.documento}, Nombre: ${aprendiz.nombre} ${aprendiz.apellido}\n`;
    });

    const posicion = parseInt(prompt(dataUpdate + "Ingrese el código del aprendiz a eliminar:"));
    if (isNaN(posicion) || posicion < 0 || posicion >= listaEstudiantes.length) {
        alert("Código inválido.");
        return;
    }

    const confirmacion = parseInt(prompt(`¿Seguro que desea eliminar al estudiante ${listaEstudiantes[posicion].nombre}?
        1. Sí
        2. No`));

    if (confirmacion === 1) {
        listaEstudiantes.splice(posicion, 1);
        alert("El aprendiz ha sido eliminado correctamente.");
    } else {
        alert("El aprendiz no ha sido eliminado.");
    }
};

OpcionAprendiz();
