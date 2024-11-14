// LOGIN PAGE //

document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Cek apakah username dan password valid
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  // log untuk memeriksa data yang diambil
  console.log(storedUserData);

  if (
    storedUserData &&
    storedUserData.username === username &&
    storedUserData.password === password
  ) {
    localStorage.setItem("loggedIn", "true"); // Set status login
    alert("Login Successful!");
    redirectToDashboard();
  } else {
    alert("Incorrect Username or Password!");
  }
}

function redirectToDashboard() {
  window.location.href = "program.html";
}
