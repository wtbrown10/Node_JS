window.onload = function () {

// create blank elements
const header = document.createElement('h1')
const mainDiv = document.createElement('div')
const form = document.createElement('form')
const userName = document.createElement('input')
const email = document.createElement('input')
const password = document.createElement('input')
const passwordValidated = document.createElement('input')
const button = document.createElement('button')

//set Event listeners & properties
header.innerText = "Home Page!"

mainDiv.id = 'mainDiv'

form.id = 'userForm'

userName.className = 'userInput'
userName.type = 'username'
userName.placeholder = 'Username'
userName.name = 'username'

email.className = 'userInput'
email.type = 'email'
email.placeholder = 'Email'
email.name = 'email'

password.className = 'userInput'
password.type = 'password'
password.placeholder = 'Password'
password.name = 'password'

passwordValidated.className = 'userInput'
passwordValidated.type = 'password'
passwordValidated.placeholder = 'Re-Enter Password'
passwordValidated.name = 'password2'

button.id = 'submitButton'
button.innerText = 'Submit'

button.onclick = sumbmitReg

// append to DOM
document.body.appendChild(header)
const div = document.body.appendChild(mainDiv)
div.appendChild(form)
div.appendChild(button)
form.appendChild(userName)
form.appendChild(email)
form.appendChild(password)
form.appendChild(passwordValidated)
}

function sumbmitReg() {
    const userInfo = document.getElementById('userForm')
    const reqBody = {}
    const endPoint = location.origin + "/post"

    for (const info of userInfo) {
        console.log(info.value)
        reqBody[info.name] = info.value  
    }

const xhr = new XMLHttpRequest()

xhr.open('POST', endPoint)

xhr.onload = () => {
    const res = JSON.parse(this.responseText)
    console.log(res)
}

xhr.setRequestHeader('Content-Type', 'application/json')

xhr.send(JSON.stringify(reqBody))
}