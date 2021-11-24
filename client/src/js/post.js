const form = document.querySelector('form')
const toggle = document.querySelector('.wrap-form');
const cardLeft = document.querySelector('#card-left');

cardLeft.addEventListener('click', () => {
  toggle.classList.toggle('toggle');
});

async function postSubmit(e) {
  e.preventDefault()
  const name = localStorage.getItem('myName')
  const desc = document.querySelector('input[name="desc"]').value
  const img = document.querySelector('input[name="img"]').value

  const data = {
    name: name,
    desc: desc,
    img: img
  }
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://localhost:3000/posts', requestOptions)
  info = await response.json()
  alert('save post 😎' + info.name)
  window.location.href = 'home.html'
}
form.addEventListener('submit', postSubmit)