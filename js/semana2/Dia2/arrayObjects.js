let students = [];

let quantity = parseInt(prompt("Ingrese una cantidad: "));

// Agregar estudiante
for (let i = 0; i < quantity; i++) {
    let aprentiz = {
        document: prompt("Documento del aprendiz: No." + i+1),
        name: prompt("Nombre del aprendiz: No." + i+1),
        lastName: prompt("Apellido del aprendiz: No." + i+1),
        phone: prompt("Numero del aprendiz: No." + i+1),
        status: true
    };
    let pushMethod = students.push(aprentiz);
    console.log(pushMethod);
    
}

// Mostrar estudiante
let data = "";
for (let i = 0; i < students.length; i++) {
    let newStatus = students[i].status ? "Activo" : "Inactivo";
    data+=`Nombre: ${students[i].name}
    Apellido: ${students[i].lastName}
    Telefono: ${students[i].phone}
    Estado: ${newStatus} \n`
}
alert(data)

//Actualizar estudiante
let updateOption = parseInt(prompt(`Desea actualizar los datos de un aprendiz
    1. SI
    2. NO`));

    if (updateOption == 1) {
        for (let i = 0; i < students.length; i++) {
            dataToUpdate+=`
            codigo: ${i} | Nombre: ${students[i].name} ${students[i].lastName}`
        }
        alert(dataToUpdate)
        let position = parseInt(prompt(dataToUpdate+ `
        Ingrese el codigo del aprendiz a actualizar`));
        students[position].name = prompt("Ingrese el nuevo nombre");
    }return alert("Gracias por usar el programa")