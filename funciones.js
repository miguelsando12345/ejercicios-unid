function saludar() {
  const nombre = "mike";
  console.log("Hola", nombre);
}
function saludarDos() {
  const nombreDos = prompt("escribe un nombre");
  console.log("Hola", nombreDos);
}

function agregarClase() {
  document.getElementById("miElemento").classList.add("mi-clase");
}

function eliminarElemento() {
  document.getElementById("eliminar").remove();
}

function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;
}

function mostrarAlerta(mensaje) {
  alert(mensaje);
}
function hey() {
  const kev = prompt("¿Cual es tu nombre?");
  console.log("Eres inteligente", kev);
}
function click1() {
  const boton = "apretado!";
  console.log("El boton ha sido", boton);
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function desactivar(button) {
  button.disabled = true;
  button.textContent = "PRESIONADO!";
}
