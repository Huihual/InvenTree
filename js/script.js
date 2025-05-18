document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();

  if (username !== "") {
    localStorage.setItem("username", username);
    window.location.href = 'dashboard.html';
  } else {
    alert("Please enter a username.");
  }
});


