function showForm(formName) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (formName === "login") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

// Handle form submissions
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful for: " + document.getElementById("loginUsername").value);
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Registration successful for: " + document.getElementById("name").value);
});