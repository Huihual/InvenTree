document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("newUsername").value;

  // Send username to backend
  console.log("Sign up username:", username);

  // Redirect to dashboard or show success
});
