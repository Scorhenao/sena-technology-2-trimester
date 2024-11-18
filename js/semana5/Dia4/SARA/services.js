let listadoEstudiantes = [];
let listaUsuarios = [];
const admin = {
    docuemnto: 1033259147,
    nombre: "admin",
    apellidos: "super",
    correo: "admin@gmail.com",
    contrasena: "123456",
    estado: "activo"
}

const aprendiz = {
    documento:89765432, 
    nombre: "a",
    apellidos: "b c",
    telefono: 8675435768,
    estado: "inactivo"
}
listaUsuarios.push(admin)
listadoEstudiantes.push(aprendiz)

// Metodo de listar aprendices
const listadoEstudiantesTabla = () => {
    let body_table = document.getElementById('body_table');
    body_table.innerHTML = "";

    listadoEstudiantes.forEach((element, index) => {

        let btn_activo = '<button type="button" class="btn btn-success">Activo</button>'
        let btn_inactivo = '<button type="button" class="btn btn-danger">Inactivo</button>'

        let trFila = document.createElement('tr')
        trFila.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.documento}</td>
            <td>${element.nombre}</td>
            <td>${element.apellidos}</td>
            <td>${element.telefono}</td>
            <td>${element.estado == "true" ? btn_activo : btn_inactivo}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button onclick="ActualizarAprendiz(${index})" type="button" class=" ml-3 btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="bi bi-pencil-square"></i></button>
                    <button onclick="EliminarAprendiz(${index})" type="button" class=" ml-3 btn btn-danger"><i class="bi bi-trash"></i></button>
                    <button  type="button" class=" ml-3 btn btn-primary"><i class="bi bi-eye"></i></button>
                </div>
            </td>
        `;

        body_table.append(trFila)
    });
}

function IniciarSesion(){

}

function CrearAprendiz() {
    let aprendiz = {
        documento: document.getElementById('documentoUsuario').value,
        nombre: document.getElementById('nombreUsuario').value,
        apellidos: document.getElementById('apellidosUsuario').value,
        telefono: document.getElementById('telefonoUsuario').value,
        estado: document.getElementById('estadoUsuario').value
    }
    listadoEstudiantes.push(aprendiz)
    console.log(aprendiz)
    alertSuccess("Registro exitos")
    listadoEstudiantesTabla();
    
    console.log(listadoEstudiantes)
    
    document.getElementById('documentoUsuario').value = "",
    document.getElementById('nombreUsuario').value = "",
    document.getElementById('apellidosUsuario').value = "",
    document.getElementById('telefonoUsuario').value = "",
    document.getElementById('estadoUsuario').value = ""
}

function ActualizarAprendiz(id) {
    const botonActualizar = document.getElementById('actualizar-aprendiz');

    botonActualizar.addEventListener('click', () => {
        let aprendizEncontrado = false;

        listadoEstudiantes.forEach((element, index) => {
            if (id === index) {
                aprendizEncontrado = true;

                // Valores actuales del aprendiz
                let { documento, nombre, apellidos, telefono, estado } = element;

                // Nuevos valores ingresados
                const nuevoDocumento = document.getElementById('nuevo-documento-aprendiz').value.trim();
                const nuevoNombre = document.getElementById('nuevo-nombre-aprendiz').value.trim();
                const nuevoApellido = document.getElementById('nuevo-apellido-aprendiz').value.trim();
                const nuevoTelefono = document.getElementById('nuevo-telefono-aprendiz').value.trim();
                const nuevoEstado = document.getElementById('nuevo-estado-aprendiz').value.trim();

                // Crear el objeto actualizado
                const aprendizActualizado = {
                    documento: nuevoDocumento || documento,
                    nombre: nuevoNombre || nombre,
                    apellidos: nuevoApellido || apellidos,
                    telefono: nuevoTelefono || telefono,
                    estado: nuevoEstado || estado,
                };

                console.log(aprendizActualizado);

                // Actualizar en el listado
                listadoEstudiantes.splice(index, 1, aprendizActualizado);
                alertSuccess("Actualización exitosa");
                listadoEstudiantesTabla();
            }
        });

        // Mensaje de error si no se encontró el aprendiz
        if (!aprendizEncontrado) {
            alertError("Lo sentimos, este documento no existe");
        }
    });
}




function validacionExistencia() {
    let documento = document.getElementById('documentoUsuario').value;
    let existe = false;
    listadoEstudiantes.forEach(element => {
        if (element.documento == documento) {
            existe = true;
        }
    })

    if (existe) {
        alertError("Lo sentimos este documento ya existe");
        document.getElementById('documentoUsuario').value = ""
    }
}




function EliminarAprendiz(id) {
    Swal.fire({
        title: "Eliminar aprendiz",
        text: "¿Estas seguro de eliminar al aprendiz?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            listadoEstudiantes.splice(id, 1)
            alertSuccess("Eliminación exitosa")
            listadoEstudiantesTabla();
        }
    });


}



listadoEstudiantesTabla()