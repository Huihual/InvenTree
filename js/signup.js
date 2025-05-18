document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();

  if (username !== "") {
    // Store the username (optional)
    localStorage.setItem("username", username);

    // Redirect to dashboard.html
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter a username.");
  }
});

