function togglePassword() {
  const input = document.getElementById("contrasena");
  const icono = document.getElementById("eyeIcon");
  if (input.type === "password") {
    input.type = "text";
    icono.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    input.type = "password";
    icono.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

function handleRegistro() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const institucion = document.getElementById("institucion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  if (!nombre || !apellido || !institucion || !telefono || !correo || !contrasena) {
    alert("⚠️ Completá todos los campos antes de continuar.");
    return;
  }

  if (contrasena.length < 8) {
    alert("❌ La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  alert("✅ Cuenta creada correctamente.");
  window.location.href = "index.html";
}