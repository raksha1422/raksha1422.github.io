function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email, password }));
  alert("Account created");
  window.location.href = "login.html";
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== email || user.password !== password) {
    alert("Invalid login");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
