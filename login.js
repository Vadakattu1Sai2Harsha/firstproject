document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    console.log("Login Success: ", username);
    alert("Login Successful!");
  } else {
    alert("Please fill all fields.");
  }
});