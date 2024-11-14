document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    register();
  });

function register() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validasi password
  const passwordCriteria =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_])[A-Za-z\d!@#$%^&*(),.?":{}|<>_]{6,}$/;

  // Cek apakah password memenuhi kriteria
  if (!passwordCriteria.test(password)) {
    alert(
      "Password does not meet criteria. Must be a minimum of 6 characters, and must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
    );
    return;
  }

  // Validasi konfirmasi password
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Simpan data pengguna ke localStorage
  const userData = {
    fullname: fullname,
    email: email,
    username: username,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(userData)); // Simpan ke localStorage
  alert("Registration Successful!");
  window.location.href = "program.html"; // Redirect ke halaman program
}

