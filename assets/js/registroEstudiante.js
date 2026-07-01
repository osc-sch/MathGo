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
async function handleRegistro() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const date = document.getElementById("date").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contraseña").value.trim();


  if (!nombre || !apellido || !date || !telefono || !correo || !contrasena) {
    alert("⚠️ Completá todos los campos antes de continuar.");
    return;
  }

  // Verificar contraseña mínima
  const user = {
    name:nombre,
    lastname:apellido,
    email:correo,
    phone:telefono,
    pass:contrasena,
    date:date,
    rol:1
  }

  const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Esto es crucial
        },
        body: JSON.stringify(user)
    });


  if (contrasena.length < 8) {
    alert("❌ La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  window.location.href = 'login.html'

}