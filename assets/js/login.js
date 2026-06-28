function handleLogin() {
  const correo = document.getElementById("correo").value.trim();
  const contraseña = document.getElementById("contraseña").value.trim();
  const mensajeError = document.getElementById("mensajeError");
  if (!correo || !contraseña) {
    mensajeError.classList.remove("d-none");
    return;
  }
  mensajeError.classList.add("d-none");
  alert("Bienvenido a MathGo");
}
function seleccionarRol(rol) {
  const btnEstudiante = document.getElementById("btnEstudiante");
  const btnDocente = document.getElementById("btnDocente");

  if (rol === "estudiante") {
    btnEstudiante.classList.add("btn-primary");
    btnEstudiante.classList.remove("btn-outline-primary");
    btnDocente.classList.add("btn-outline-warning");
    btnDocente.classList.remove("btn-warning");
  } else {
    btnDocente.classList.add("btn-warning");
    btnDocente.classList.remove("btn-outline-warning");
    btnEstudiante.classList.add("btn-outline-primary");
    btnEstudiante.classList.remove("btn-primary");
  }
}

function togglePassword() {
  const input = document.getElementById("contraseña");
  const icon = document.getElementById("eyeIcon");
  if (input.type === "password") {
    input.type = "text";
    icon.className = "bi bi-eye-slash-fill";
  } else {
    input.type = "password";
    icon.className = "bi bi-eye-fill";
  }
}
