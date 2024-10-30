let Events = [];

alert('¡Bienvenido!')
menu();

function menu() {
    do {
        option = parseInt(prompt(`
            Ingrese la opción que desea realizar:
            1. Agregar evento
            2. Listar eventos
            3. Eliminar evento
            4. Editar evento
            5. Salir
        `));
    
        switch (option) {
            case 1:
                CreateEvent();
                break;
            case 2:
                ListEvents();
                break;
            case 3:
                DeleteEvent();
                break;
            case 4:
                EditEvent();
                break;
            case 5:
                alert('¡Adios!')
                break;
            default:
                alert('¡Digito una opción no valida!');
                break;
        }
    } while (option != 5);
}

function CreateEvent(){
    let quantityOfEvents = parseInt(prompt('Ingrese la cantidad de eventos a ingresar'));
    for (let event = 0; event < quantityOfEvents; event++) {

        data = {
            codeOfEvent: parseInt(prompt(`Ingrese el codigo del evento No. ${event + 1}`)),
            nameOfEvent: prompt(`Ingrese el nombre del evento No. ${event + 1}`),
            dateOfEvent: prompt(`Ingrese la fecha del evento No. ${event + 1}`),
            hourOfEvent: prompt(`Ingrese la hora del evento No. ${event + 1}`),
            placeOfEvent: prompt(`Ingrese el lugar del evento No. ${event + 1}`),
        }

        try {
            Events.push(data)
            alert(`El evento No. ${event + 1} ¡Ha sido agregado exitosamente!`)
        } catch (error) {
            console.error(error.message);
        }
    }
}

function ListEvents(){
    if (Events.length == 0) {
        alert('No hay eventos registrados.')
        return;
    };
    Events.map( (event, index) =>{
        alert(`
            Evento No. ${index + 1}
            Código: ${event.codeOfEvent}
            Nombre: ${event.nameOfEvent}
            Fecha: ${event.dateOfEvent}
            Horario: ${event.hourOfEvent}
            Lugar: ${event.placeOfEvent}
            `);
    })
}

// just date and hour of event
function EditEvent() {
    if (Events.length == 0) {
        alert('No hay eventos registrados.');
        return;
    }
    ListEvents();
    let position = parseInt(prompt('Ingrese el No. del evento que desea editar'));
    if (position > 0 && position <= Events.length) {
        let eventIndex = position - 1;
        let newDate = prompt(`Ingrese la nueva fecha del evento No. ${position} (Actual: ${Events[eventIndex].dateOfEvent})`);
        let newHour = prompt(`Ingrese la nueva hora del evento No. ${position} (Actual: ${Events[eventIndex].hourOfEvent})`);

        // Solo actualizamos la fecha y hora si se ingresa un valor
        Events[eventIndex].dateOfEvent = newDate || Events[eventIndex].dateOfEvent;
        Events[eventIndex].hourOfEvent = newHour || Events[eventIndex].hourOfEvent;

        alert(`¡El evento No. ${position} ha sido editado exitosamente!`);
    } else {
        alert('¡Número de evento no válido!');
    }
}

function DeleteEvent(){
    if (Events.length == 0) {
        alert('No hay eventos registrados.');
        return;
    };
    ListEvents();
    let position = parseInt(prompt('Ingrese el codigo del evento que desea eliminar'))
    Events.find((event, index)=>{
        if (event.codeOfEvent == position) {
            Events.splice(index, 1);
            alert(`El evento con el No. ${position} ¡Se elimino exitosamente!`);
        }else{ alert('¡No. de evento no encontrado!')}
    })
}
