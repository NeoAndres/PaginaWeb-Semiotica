const fechaInicio = document.getElementById("fechaInicio");
const fechaFin = document.getElementById("fechaFin");
const diasSeleccionados = document.getElementById("diasSeleccionados");

const tarifas = {
    "Frecuente": 3820,
    "Adulto Mayor": 3330,
    "Estudiantil": 1600,
    "PcD": 2720,
    "Portador": 4400
};

const tips = [
    "Recarga tu tarjeta antes de salir para evitar filas.",
    "Viajar fuera de horas pico puede hacer el trayecto más cómodo.",
    "Planifica tus viajes semanales para controlar tus gastos.",
    "Verifica periódicamente el saldo de tu tarjeta.",
    "Mantente atento a las novedades del sistema de transporte.",
    "Las integraciones pueden ayudarte a ahorrar dinero.",
    "Evita esperar al último momento para recargar tu tarjeta.",
    "Consulta las rutas antes de iniciar tu viaje.",
    "Si eres estudiante, revisa que tu beneficio siga activo.",
    "Lleva siempre un saldo de respaldo para emergencias."
];

let ultimoTip = -1;

function obtenerTipAleatorio() {
    let indice;

    do {
        indice = Math.floor(Math.random() * tips.length);
    } while (indice === ultimoTip);

    ultimoTip = indice;

    return tips[indice];
}

function calcularDias() {

    if (!fechaInicio.value || !fechaFin.value) {
        diasSeleccionados.textContent = "0";
        return;
    }

    const inicio = new Date(fechaInicio.value);
    const fin = new Date(fechaFin.value);

    const diferencia = fin - inicio;

    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        ) + 1;

    if (dias < 1) {
        diasSeleccionados.textContent = "0";
        return;
    }

    diasSeleccionados.textContent = dias;
}

fechaInicio.addEventListener("change", calcularDias);
fechaFin.addEventListener("change", calcularDias);

document
    .getElementById("calcular")
    .addEventListener("click", () => {

        if (!fechaInicio.value || !fechaFin.value) {
            alert("Seleccione las fechas.");
            return;
        }

        const tipoUsuario =
            document.getElementById("tipoUsuario").value;

        const viajesDia =
            Number(
                document.getElementById("viajesDia").value
            );

        const inicio =
            new Date(fechaInicio.value);

        const fin =
            new Date(fechaFin.value);

        const dias =
            Math.floor(
                (fin - inicio) /
                (1000 * 60 * 60 * 24)
            ) + 1;

        if (dias < 1) {
            alert("La fecha final debe ser mayor o igual a la inicial.");
            return;
        }

        const tarifa = tarifas[tipoUsuario];

        const totalViajes =
            dias * viajesDia;

        const costoTotal =
            totalViajes * tarifa;

        const tip = obtenerTipAleatorio();

        document.getElementById("resultado").innerHTML = `
    <h2>Resultado</h2>
    <p><strong>Días:</strong> ${dias}</p>
    <p><strong>Viajes por día:</strong> ${viajesDia}</p>
    <p><strong>Total de viajes:</strong> ${totalViajes}</p>
    <p><strong>Tarifa:</strong> $${tarifa.toLocaleString()}</p>
    <p><strong>Costo total:</strong> $${costoTotal.toLocaleString()}</p>

    <div class="tip-box">
        💡 <strong>Tip:</strong> ${tip}
    </div>
`;
    });

// aqqui va la parte del  boton de modo oscuro 

function toggleDark() {

    document.body.classList.toggle("dark-mode");

    const boton =
        document.getElementById("darkToggle");

    if (
        document.body.classList.contains("dark-mode")
    ) {
        boton.textContent = "Claro";
    } else {
        boton.textContent = "Oscuro";
    }
}

function cambiarTamano() {

    let tamano =
        document.getElementById("tamano").value;

    document.body.style.fontSize =
        tamano + "px";
}

//menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});