const slides = document.querySelectorAll(".slide");
let index = 0;

function mostrarSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

// Mostrar la primera imagen
mostrarSlide();

// Cambiar cada 4 segundos
setInterval(mostrarSlide, 4000);

// temporizador
const ahora = new Date();
let añoEvento = ahora.getFullYear();

// Marzo = 2
let fechaEvento = new Date(añoEvento, 2, 27, 21, 0, 0);

// Si ya pasó, usar el próximo año
if (fechaEvento < ahora) {
  fechaEvento = new Date(añoEvento + 1, 2, 27, 21, 0, 0);
}

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function actualizarTemporizador() {
  const ahora = new Date();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    return;
  }

  const totalSegundos = Math.floor(diferencia / 1000);

  const dias = Math.floor(totalSegundos / (3600 * 24));
  const horas = Math.floor((totalSegundos / 3600) % 24);
  const minutos = Math.floor((totalSegundos / 60) % 60);
  const segundos = totalSegundos % 60;

  diasEl.textContent = dias.toString().padStart(2, "0");
  horasEl.textContent = horas.toString().padStart(2, "0");
  minutosEl.textContent = minutos.toString().padStart(2, "0");
  segundosEl.textContent = segundos.toString().padStart(2, "0");
}

actualizarTemporizador();
setInterval(actualizarTemporizador, 1000);

// Agregar evento al botón de Mercado Pago

const button = document.getElementById("mp-button");
button.addEventListener("click", () => {
  const appLink =
    "mercadopago://payment?url=https://link.mercadopago.com.ar/agusalmada.";
  const webLink = "https://link.mercadopago.com.ar/agusalmada.";

  // Intentar abrir la app
  window.location = appLink;

  // Después de 1 segundo, abrir el link web si la app no está instalada
  setTimeout(() => {
    window.open(webLink, "_blank");
  }, 1000);
});
