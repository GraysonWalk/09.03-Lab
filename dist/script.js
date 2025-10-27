function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (password.toLowerCase().includes("password")) {
    return false;
  }

  // Iterator to go through the password and search for a caputal
  let hasUpper = false;
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    // using ASCII values since any capital should have a value between A and Z
    if (char >= "A" && char <= "Z") {
      hasUpper = true;
      break; 
    }
// checking hasUpper
  if (!hasUpper)  {
    return false;
  }
    
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
