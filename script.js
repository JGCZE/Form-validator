const userNameInput = document.getElementById('userName');
/* const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit'); */
const message = 'Username is required';

const showError = (status) => {
  const formInput = userNameInput.parentElement;
  if(status){
    formInput.classList.add("error");
  } else {
    formInput.classList.add("success");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //showError(userName);
  checkLength(userName)
})

const checkLength = (userName) => {
  userName.value.length < 3 ? showError(true) : showError(false); 
}

let number = 3
const newArray = [{
  id: 1,
  name: "testing"
},{
  id: 2,
  name: "fucking"
},{
  id: 3,
  name: "hacking"
}]

const findData = newArray.find((idecko) => idecko.id == number)
const result = findData.name = "updated"

console.log(newArray);


