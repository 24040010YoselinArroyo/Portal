function cargarPrograma(ruta) {
    let iframe = document.getElementById("visor");
    let bienvenida = document.getElementById("bienvenida");

    if (ruta === "inicio") {
        iframe.classList.add("oculto");
        bienvenida.style.display = "block";
    } else {
        iframe.src = ruta;
        iframe.classList.remove("oculto");
        bienvenida.style.display = "none";
    }
}


