var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
var horario = ["AM", "PM"]
var tareas = [];
var duracionMinutos = [15, 30, 45, 60];

function registrarTarea(diaSemana, horarios, duracionTarea, horaInicio, nombreTarea) {
    var contieneDias = diasSemana.includes(diaSemana);
    var contieneHorario = horario.includes(horarios);
    var contieneDuracion = duracionMinutos.includes(duracionTarea);
    var horaFin = horaInicio + ":" + duracionTarea;
    var codigoTarea = Math.floor((Math.random() * 100) + 1);

    const contieneTareaDias = tareas.filter(tarea => tarea.dia === diaSemana);
    const contieneTareaHora = tareas.filter(tarea => tarea.Finaliza === horaFin);

    if (contieneTareaDias.length > 0 && contieneTareaHora.length > 0) {
        alert("Ya tienes tareas pendientes en esa fecha")
        return;
    } else {
        if (contieneDias && contieneDuracion && contieneHorario) {

            let nuevaTarea = {
                Codigo: codigoTarea,
                dia: diaSemana,
                horario: horarios,
                duracion: duracionTarea,
                Inicia: horaInicio,
                Finaliza: horaFin,
                nombre: nombreTarea
            }
            tareas.push(nuevaTarea);
            alert("Tarea Registrada")
        } else {
            console.log("Datos inválidos. Verifica el día, horario o duración")
        }
    }
}

function consultarTarea(codigoTarea) {
    let resultado = tareas.filter(tarea => tarea.Codigo === codigoTarea)
    if (resultado.length > 0) {
        return resultado
    } else {
        alert("Lo Siento, No hay tareas registradas con ese código")
    }
}

registrarTarea("Viernes", "AM", 30, 8, "Hola")
registrarTarea("Lunes", "AM", 30, 10, "Estudiar")

console.log(tareas)