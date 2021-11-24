const center = document.querySelector(".center")
const lis = document.querySelector(".lis")
const lis1 = document.querySelector(".lis1")
const navLink = document.querySelectorAll(".nav-link")
const plus = document.querySelector(".plus")
const name1 = localStorage.getItem('myName')

function addClass() {
    navLink.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].classList.remove("active")
            }
            this.classList.add("active")
        })
    })
}
addClass()

function relation() {
    window.open('post.html')
}

plus.addEventListener("click", relation)

async function displayNote() {

    const res = await fetch(`http://localhost:3000/posts/${name1}`)
    const posts = await res.json()

    posts.forEach(post => {
        lis.innerHTML = post.name
        lis1.innerHTML = post.name

        const postDiv = document.createElement("div")
        postDiv.innerHTML = `
<h3>${post.desc}</h3>
<img src="${post.img}" alt="" >
<p>❤️${post.likes.reduce((a,b)=>a+b)}</p>
`
        postDiv.classList.add("post")
        center.appendChild(postDiv)
    })
}
displayNote()