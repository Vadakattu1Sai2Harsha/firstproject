document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  console.log("Registering:", name, email);
  alert("Registration Successful!");
});
