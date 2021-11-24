const form = document.querySelector('form')

async function register(e) {
  e.preventDefault()
  const name = document.querySelector('input[name="name"]').value
  const lastname = document.querySelector('input[name="lastname"]').value
  const email = document.querySelector('input[name="email"]').value
  const password = document.querySelector('input[name="password"]').value
  const day = document.querySelector('input[name="day"]').value
  const month = document.querySelector('input[name="month"]').value
  const year = document.querySelector('input[name="year"]').value
  const sex = document.querySelector('input[name="sex"]:checked').value

  const data = {
    name: name,
    lastname: lastname,
    email: email,
    password: password,
    birth: day + '.' + month + '.' + year,
    sex: sex
  }

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://localhost:3000/register', requestOptions)
  info = await response.json();
  alert(info)
  clearRegister()
  window.open('index.html')
}
form.addEventListener('submit', register)

function clearRegister() {
  const name = document.querySelector('input[name="name"]')
  const lastname = document.querySelector('input[name="lastname"]')
  const email = document.querySelector('input[name="email"]')
  const password = document.querySelector('input[name="password"]')
  name.value = ''
  lastname.value = ''
  email.value = ''
  password.value = ''
}