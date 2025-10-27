// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
    alert("Hello, world from javascript!");
}
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (password.toLowerCase().includes("password")) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  return true;
}

function checkPassword() {
  const password = document.getElementById("pass").value;
  if (isStrongPassword(password)) {
    alert("Password is strong");
  } else {
    alert("Password is weak");
  }
}
