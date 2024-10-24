// Funcion declarada 
function FuncionDeclarada(){
    alert("Bienvenidos");
    let name = prompt("Ingrese su nombre");
    let hoursWorked = parseInt(prompt("Ingrese las horas trabajadas"));
    let valuePerHour = parseInt(prompt("Ingrese el valor por hora trabajada")); 

    const valueToPage = FuncionFlecha(hoursWorked,valuePerHour);

    alert(`Informe de pago
        Empleado: ${name}
        Cantidad de horas laboradas: ${hoursWorked}
        Valor por hora trabajada: ${valuePerHour}
        -------------------------------------------
        Total a pagar: ${valueToPage}
    `)
}FuncionDeclarada();

// Funcion anonima
var FuncionAnonima = function(){
    console.log();
}

// Funcion flecha
const FuncionFlecha = (hoursWorked, valuePerHour) => {
    return hoursWorked * valuePerHour;
}