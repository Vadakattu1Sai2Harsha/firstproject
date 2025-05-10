ddocument.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const validUsername = "admin";
  const validPassword = "admin123!"; // You can change this as needed

  // 🔍 Validate password: 8+ chars and at least one special char
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (username !== validUsername || password !== validPassword) {
    alert("Invalid username or password.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one special character (!,@,#,$,%,^,&,*)");
    return;
  }

  alert("Login Successful!");
  console.log("Login successful for:", username);
});