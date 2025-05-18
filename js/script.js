document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();

  if (username !== "") {
    // You can store the username if needed for later pages
    localStorage.setItem("username", username);

    // Redirect to dashboard.html
    window.location.href = 'dashboard.html';
  } else {
    alert("Please enter a username.");
  }
});

