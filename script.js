const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkUserName(userName.value);
})

const checkUserName = (userName) => {
  if (userName === "") {
    showError(userName, "Username cannot be empty");
  } else if (userName.length < 3) {
    showError(userName, "Username must be at least 3 characters");
  }
}
