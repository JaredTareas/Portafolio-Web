const textos = [
    "Estudiante de Ingeniería en Sistemas Computacionales",
    "Estudiante del Instituto Tecnológico de Oaxaca",
    "Desarrollador Web en formación",
    "Aprendiendo HTML, CSS, JavaScript y Bootstrap"
];

let indice = 0;
const textoCambiante = document.getElementById("textoCambiante");

setInterval(function () {
    indice++;

    if (indice >= textos.length) {
        indice = 0;
    }

    textoCambiante.innerHTML = textos[indice];
}, 2500);

document.getElementById("btnSaludo").addEventListener("click", function () {
    document.getElementById("mensaje").innerHTML =
        "¡Hola! Bienvenido a mi portafolio personal.";
});

document.getElementById("btnMenu").addEventListener("click", function () {
    document.getElementById("header").classList.toggle("mostrar");
});