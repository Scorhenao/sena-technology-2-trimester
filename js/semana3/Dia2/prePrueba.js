let Employees = [];

alert("Bienvenido");
Menu();
alert("¡Adios!");

function Menu() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(`Ingrese la opción que desea realizar:
            1) Crear empleado
            2) Listar empleado
            3) Eliminar empleado
            4) Buscar empleado
            5) Salir`)
    );

    switch (opcion) {
      case 1:
        CreateEmployee();
        break;
      case 2:
        ListEmployee();
        break;
      case 3:
        DeleteEmployee();
        break;
      case 4:
        SearchEmployee();
        break;
      case 5:
        break;
      default:
        alert("Ingresó una opción no válida");
        break;
    }
  } while (opcion !== 5);
}

function CreateEmployee() {
  let quantityOfEmployees = parseInt(
    prompt("Ingrese la cantidad de empleados a ingresar: ")
  );
  if (isNaN(quantityOfEmployees) || quantityOfEmployees <= 0) {
    alert("¡La cantidad de empleados debe ser un número positivo!");
    return;
  }

  for (let e = 0; e < quantityOfEmployees; e++) {
    let DocumentOfEmployee = parseInt(
      prompt(`Ingrese el documento del empleado No. ${e + 1}: `)
    );
    if (isNaN(DocumentOfEmployee)) {
      alert("¡El documento debe ser un número!");
      continue;
    }

    let NameOfEmployee = prompt(
      `Ingrese el nombre del empleado No. ${e + 1}: `
    );
    if (!NameOfEmployee) {
      alert("¡El nombre no puede estar vacío!");
      continue;
    }

    let LastNameOfEmployee = prompt(
      `Ingrese el apellido del empleado No. ${e + 1}: `
    );
    if (!LastNameOfEmployee) {
      alert("¡El apellido no puede estar vacío!");
      continue;
    }

    let StatusOfEmployee = prompt(
      `Ingrese el estado del empleado No. ${
        e + 1
      } 
        1) para Activo
        2) para Inactivo `
    );
    if (StatusOfEmployee !== "1" && StatusOfEmployee !== "2") {
      alert("Estado de empleado no válido, ¡Debe elegir (1) o (2)!");
      continue;
    }

    let data = {
      DocumentOfEmployee,
      NameOfEmployee,
      LastNameOfEmployee,
      StatusOfEmployee: StatusOfEmployee === "1",
    };

    Employees.push(data);
  }
}

function ListEmployee() {
  if (Employees.length === 0) {
    alert("No hay empleados registrados.");
    return;
  }

  let data = Employees.map(
    (employee, i) => `
        Empleado ${i + 1}:
        Documento: ${employee.DocumentOfEmployee}
        Nombre: ${employee.NameOfEmployee}
        Apellido: ${employee.LastNameOfEmployee}
        Estado: ${employee.StatusOfEmployee ? "Activo" : "Inactivo"}
    `
  ).join("\n");

  alert(data);
}

function DeleteEmployee() {
  if (Employees.length === 0) {
    alert("No hay empleados registrados para eliminar.");
    return;
  }

  let dataUpdate = Employees.map(
    (employee, i) =>
      `Código ${i} | Documento: ${employee.DocumentOfEmployee} | Nombre: ${employee.NameOfEmployee} | Apellido: ${employee.LastNameOfEmployee}`
  ).join("\n");

  let posicion = parseInt(
    prompt(`${dataUpdate}\nIngrese el código de empleado a eliminar:`)
  );
  if (isNaN(posicion) || posicion < 0 || posicion >= Employees.length) {
    alert("Código de empleado no válido.");
    return;
  }

  let confirmacion = parseInt(
    prompt(`¿Seguro quieres eliminar al empleado ${Employees[posicion].NameOfEmployee}?
        1. SI
        2. NO`)
  );

  if (confirmacion === 1) {
    Employees.splice(posicion, 1);
    alert("El empleado ha sido eliminado correctamente.");
  } else {
    alert("El empleado no ha sido eliminado.");
  }
}

function SearchEmployee() {
  if (Employees.length === 0) {
    alert("No hay empleados registrados para buscar.");
    return;
  }

  let document = parseInt(
    prompt("Ingrese el documento del empleado que desea buscar: ")
  );
  if (isNaN(document)) {
    alert("El documento debe ser un número.");
    return;
  }

  let foundEmployee = Employees.find(
    (employee) => employee.DocumentOfEmployee === document
  );
  if (foundEmployee) {
    alert(`
            Documento: ${foundEmployee.DocumentOfEmployee}
            Nombre: ${foundEmployee.NameOfEmployee}
            Apellido: ${foundEmployee.LastNameOfEmployee}
            Estado: ${foundEmployee.StatusOfEmployee ? "Activo" : "Inactivo"}
        `);
  } else {
    alert("Lo sentimos, ¡empleado no encontrado!");
  }
}
