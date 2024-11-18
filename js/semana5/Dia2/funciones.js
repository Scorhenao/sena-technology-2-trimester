// FUNCION DECLARADA
function PagoAEmpleados(){
    alert("Bienvenidos");
    let nombre = prompt("Ingrese su nombre");
    let horas = parseInt(prompt("Cantidad de horas trabajadas"));
    let valorHora = parseInt(prompt("Valor unitario de horas trabajadas"));

    let valorPagar = CalcularSalarioEmpleado(horas, valorHora);

    alert(`Informe de pago
        Empleado: ${nombre}
        Cantidad de horas laboradas: ${horas}
        Valor por hora laborada: ${valorHora}
        -------------------------------------
        Total a pagar: ${valorPagar}`)
}

const dataFuncionAnomina = function(){
    
}

// Funcion de Flecha
const CalcularSalarioEmpleado = (horas=0, valorHora=0) =>{
    return valorPagar = horas*valorHora;
}

PagoAEmpleados()