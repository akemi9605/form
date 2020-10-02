let tipoEvento = [{
    name: "feria",
    events: ['Evento feria 1', 'Evento feria 2', 'Evento feria 3']
}, {
    name: "exposicionIndividual",
    events: ['Evento exposicion individual 1', 'Evento exposicion individual 2']
}];

let centros = [{
    name: "museo",
    events: []
}, {
    name: "galeria",
    events: []
}, {
    name: "feria",
    events: []
}];

let usuario = [];

/* {
    name: "Vicent",
    surname: "Van Gogh",
    country: "España",
    evenType: "Feria",
    event: "Feria de Madrid"
} */

let tipoEventoSeleccionado;

$("#tipoEvento").on("change", function () {
    $("#eventButton").prop("disabled", false);
    let event = $("#event");
    event.prop("disabled", false);
    event.empty();
    let name = $(this).val();
    tipoEventoSeleccionado = tipoEvento.find(tipoEvento => tipoEvento.name === name);
    for (const evento of tipoEventoSeleccionado.events) {
        event.append(new Option(evento, evento.replace(/ /g, "")));
    }
});

$("#addEventButton").on("click", function () {
    // LIMPIAR SELECT CENTROS
    let selectCentros = $("#tipoCentro");
    selectCentros.empty();
    for (const centro of centros) {
        $("#tipoCentro").append(new Option(primeraLetraMayuscula(centro.name), centro.name));
    }
});

$("#saveEventButton").on("click", function () {
    // RECUPERO EL CENTRO SELECCIONADO
    let nombreCentroSeleccionado = $("#tipoCentro").val();
    centroSeleccionado = centros.find(centro => centro.name === nombreCentroSeleccionado);
    let eventoNuevo = $("#eventName");
    let nombreEventoNuevo = eventoNuevo.val();
    eventoNuevo.val("");
    tipoEventoSeleccionado.events.push(nombreEventoNuevo);
    centroSeleccionado.events.push(nombreEventoNuevo);
    console.log(centros);
});

const primeraLetraMayuscula = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}