let wrapper = document.querySelector(".wrapper");
let signUpLink = document.querySelector(".link .signup-link");
let signInLink = document.querySelector(".link .signin-link");
let btnLogin = document.getElementById("loginss");
let btnSignup = document.getElementById("signup");

//swapping
signUpLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signin");
  wrapper.classList.remove("animated-signup");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signup");
  wrapper.classList.remove("animated-signin");
});

function logup(event) {
  event.preventDefault();

  let username = document.getElementById("signup-us").value;
  let email = document.getElementById("signup-em").value;
  let password = document.getElementById("signup-pw").value;
  let passwordMatch = document.getElementById("signup-pwm").value;
  let signupErrorMessage = document.querySelectorAll(".up-error")[0];

  if (password.length < 8) {
    signupErrorMessage.textContent =
      "Password must be at least 8 characters long";
    return;
  }

  if (password !== passwordMatch) {
    signupErrorMessage.textContent = "Passwords do not match";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let emailExists = users.some((user) => user.email === email);

  if (emailExists) {
    signupErrorMessage.textContent =
      "Email already registered. Please use a different email.";
    return;
  }

  let newUser = {
    username: username,
    email: email,
    password: password,
    income: [],
    expenses: [],
    savings: [],
    signupDate: new Date().toISOString(),
    role: "user",
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  signupErrorMessage.textContent = "";
  console.log("Signup successful!", newUser);
}

function login(event) {
  event.preventDefault();

  let email = document.getElementById("login-em").value;
  let password = document.getElementById("login-pw").value;
  let loginErrorMessage = document.querySelectorAll(".lg-error")[0];
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    console.log("Login successful!", user);
    loginErrorMessage.textContent = "";
  } else {
    loginErrorMessage.textContent = "Invalid email or password";
  }
}
