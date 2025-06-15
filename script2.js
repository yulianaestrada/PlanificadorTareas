var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
var horario = ["AM", "PM"]
var tareas = [];
var duracionMinutos = [15, 30, 45, 60];

const saludito = document.getElementById("saludo");
const iniciarSesions = document.getElementById("iniciarSesion");
const eliminarTareas = document.getElementById("eliminarTarea");

iniciarSesions.addEventListener("click", () => {
    let nombre = "";

    while (!nombre) {
        nombre = prompt("Ingrese su nombre:");
        if (nombre == null) {
            return;
        }
        nombre = nombre.trim();
        if (nombre == null) {
            nombre = null;
        }
    }
    localStorage.setItem("nombreUsuario", nombre);
    saludito.textContent = `Bienvenido a la aplicación de tareas ${nombre}`;
})

const nombreGuardado = localStorage.getItem("nombreUsuario");
if (nombreGuardado) {
    saludito.textContent = `Bienvenido a la aplicación de tareas ${nombreGuardado}`;
}

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
            localStorage.setItem('nuevaTarea', JSON.stringify(nuevaTarea));
            alert("Tarea Registrada")
        } else {
            alert("Datos inválidos. Verifica el día, horario o duración")
        }
    }
}

function consultarTarea(codigoTarea) {
    let resultado = tareas.filter(tarea => tarea.Codigo === codigoTarea)
    if (resultado.length > 0) {
        return alert(JSON.stringify(resultado, null, 2));
    } else {
        alert("Lo Siento, No hay tareas registradas con ese código")
    }
}

eliminarTareas.addEventListener("click", () => {
    if (tareas.length > 0) {
        tareas.length = 0;
        localStorage.removeItem("nuevaTarea")
        saludito.textContent = `Tarea Eliminada de la aplicación de tareas`;
    } else {
        saludito.textContent = `No hay tareas registradas en la aplicación`;
    }
}
)

registrarTarea("Viernes", "AM", 30, 8, "Hola")
registrarTarea("Lunes", "AM", 30, 10, "Estudiar")

console.log(tareas)

const url = "https://jsonplaceholder.typicode.com/todos";

async function fetchData() {
    const recibeRespuesta = await fetch(url)
    const data = await recibeRespuesta.json()
    console.log(data)
}

fetchData()