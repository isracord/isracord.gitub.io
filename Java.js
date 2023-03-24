const passwordInput = document.getElementById("password-input");
const togglePasswordBtn = document.getElementById("toggle-password");

togglePasswordBtn.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "Ocultar contraseña";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "Mostrar contraseña";
  }
});