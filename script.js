// ==========================================
// GATITO BAILANDO AL CAMBIAR DE SECCIÓN
// ==========================================

const enlaces = document.querySelectorAll(".nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(event) {

        event.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        // Crear el gatito
        const gato = document.createElement("div");

        gato.textContent = "👻";

        gato.style.position = "fixed";
        gato.style.left = "50%";
        gato.style.top = "50%";
        gato.style.transform = "translate(-50%, -50%)";
        gato.style.fontSize = "90px";
        gato.style.zIndex = "9999";
        gato.style.pointerEvents = "none";

        document.body.appendChild(gato);

        // Animación del gatito
        gato.animate(
            [
                {
                    transform: "translate(-50%, -50%) rotate(-15deg) scale(0.5)",
                    opacity: 0
                },
                {
                    transform: "translate(-50%, -50%) rotate(15deg) scale(1.2)",
                    opacity: 1
                },
                {
                    transform: "translate(-50%, -50%) rotate(-15deg) scale(1)"
                },
                {
                    transform: "translate(-50%, -50%) rotate(15deg) scale(1)"
                },
                {
                    transform: "translate(-50%, -50%) rotate(-15deg) scale(1)"
                },
                {
                    transform: "translate(-50%, -50%) rotate(0deg) scale(0)",
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-in-out"
            }
        );

        // Llevar la página a la sección
        setTimeout(() => {

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 500);

        // Eliminar el gatito
        setTimeout(() => {
            gato.remove();
        }, 1200);

    });

});