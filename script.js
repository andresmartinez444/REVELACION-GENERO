// ======================================
// ELEMENTOS
// ======================================

const boton = document.getElementById("abrirBtn");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");
// ======================================
// ABRIR INVITACION
// ======================================

boton.addEventListener("click", () => {

    contenido.style.display = "block";

    musica.volume = 0.25;

    musica.currentTime = 45; // Empieza en el segundo 45

    musica.play().catch(error => {
        console.log(error);
    });

    setTimeout(() => {

        destacarSecciones();

    }, 1000);

});

// ======================================
// CUENTA REGRESIVA
// ======================================

const fechaEvento = new Date(
    "July 11, 2026 15:00:00"
).getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";

        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador, 1000);

actualizarContador();

// ======================================
// LLUVIA DE OSITOS
// ======================================

const emojis = [
    "🧸",
    "🤍",
    "🤎",
    "✨",
    "⭐"
];

function crearParticula() {

    const particula =
    document.createElement("div");

    particula.innerHTML =
    emojis[
        Math.floor(
            Math.random() * emojis.length
        )
    ];

    particula.style.position = "fixed";

    particula.style.top = "-50px";

    particula.style.left =
    Math.random() * 100 + "vw";

    particula.style.fontSize =
    (Math.random() * 18 + 18) + "px";

    particula.style.pointerEvents =
    "none";

    particula.style.zIndex =
    "9999";
    particula.style.opacity =
    (Math.random() * 0.3 + 0.25);
    particula.style.opacity = "0.2";

    document.body.appendChild(particula);

    let top = -50;

    let left =
    parseFloat(particula.style.left);

    const velocidad =
    Math.random() * 2 + 1.5;

    const lateral =
    (Math.random() - 0.5) * 0.8;

    const intervalo = setInterval(() => {

        top += velocidad;

        left += lateral;

        particula.style.top =
        top + "px";

        particula.style.left =
        left + "vw";

        particula.style.transform =
        `rotate(${top}deg)`;

        if (
            top >
            window.innerHeight + 50
        ) {

            clearInterval(intervalo);

            particula.remove();
        }

    }, 20);
}

setInterval(crearParticula, 300);

// ======================================
// APARICION DE TARJETAS
// ======================================

const tarjetas =
document.querySelectorAll(".card");

const observador =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity =
            "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},

{
    threshold: 0.15
}

);

tarjetas.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(50px)";

    card.style.transition =
    "all 1s ease";

    observador.observe(card);

});

// ======================================
// TOUR AUTOMATICO
// ======================================

function destacarSecciones() {

    const secciones = [

        { clase: ".padres", tiempo: 9000 },
        { clase: ".revelacion", tiempo: 7000 },
        { clase: ".dress", tiempo: 7000 },

        { clase: ".dinamica", tiempo: 7500 },

        { clase: ".fecha", tiempo: 5000 },
        { clase: ".hora", tiempo: 5000 },
        { clase: ".lugar", tiempo: 5000 },
        { clase: ".contador-card", tiempo: 7000 },
        { clase: ".final", tiempo: 7000 }

    ];

    let acumulado = 0;

    secciones.forEach((item) => {

        setTimeout(() => {

            const elemento =
            document.querySelector(item.clase);

            if (!elemento) return;

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            elemento.classList.add("destacar");

            setTimeout(() => {

                elemento.classList.remove("destacar");

            }, item.tiempo);

        }, acumulado);

        acumulado += item.tiempo + 1200;

    });

}

// ======================================
// MENSAJE CONSOLA
// ======================================

console.log(
"🧸 Invitación cargada correctamente"
);

const musicaBtn = document.getElementById("musicaBtn");

musicaBtn.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();
        musicaBtn.innerHTML = "🔊";

    } else {

        musica.pause();
        musicaBtn.innerHTML = "🔇";

    }

});