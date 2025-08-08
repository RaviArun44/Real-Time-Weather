function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const errorMsg = document.getElementById('error');

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}
