document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  
  const validUser = "20220142";
  const validPass = "1234";

  if (user === validUser && pass === validPass) {
    window.location.href = "bienvenida.html"; 
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos. Intente de nuevo.";
  }
});
