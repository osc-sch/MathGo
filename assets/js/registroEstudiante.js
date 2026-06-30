function togglePasswordRegistro() {
  const input = document.getElementById("contraseña");
  const icono = document.getElementById("eyeIconRegistro");

  if (input.type === "password") {
    input.type = "text";
    icono.classList.remove("bi-eye-fill");
    icono.classList.add("bi-eye-slash-fill");
  } else {
    input.type = "password";
    icono.classList.remove("bi-eye-slash-fill");
    icono.classList.add("bi-eye-fill");
  }
}
function handleRegistro() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contraseña").value.trim();


  if (!nombre || !apellido || !edad || !telefono || !correo || !contrasena) {
    alert("⚠️ Completá todos los campos antes de continuar.");
    return;
  }

  // Verificar contraseña mínima
  if (contrasena.length < 8) {
    alert("❌ La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  alert("✅ Cuenta creada correctamente.");
}