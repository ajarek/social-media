const eye = document.querySelector('.fa-eye-slash')
const password = document.querySelector('#password')
const form = document.querySelector('form')

function showPassword() {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
}
eye.addEventListener('click', showPassword)

async function logSubmit(e) {
  e.preventDefault()
  const email = document.querySelector('input[name="email"]').value
  const password = document.querySelector('input[name="password"]').value

  const data = {
    email: email,
    password: password
  }
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://localhost:3000/login', requestOptions)
  const info = await response.json()
  const myInfo = Object.values(info).toString()
  localStorage.setItem('myName', myInfo)

  window.location.href = "home.html"
}
form.addEventListener('submit', logSubmit)