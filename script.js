document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Error spans
  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Clear errors
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  //  Username validation
  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    isValid = false;
  }

 
  // Example valid: test@example.com
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  //  Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  //  Confirm password validation
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  //  If all good
  if (isValid) {
    alert("Registration Successful!");
    document.getElementById("registrationForm").reset();
  }
});
