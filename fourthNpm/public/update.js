const heading = document.createElement('h1')
const div = document.createElement('div')
const form = document.createElement('form')
const userNameUpdate = document.createElement('input')
const emailUpdate = document.createElement('input')
const passwordUpdate = document.createElement('input')
const passwordValidatedUpdate = document.createElement('input')
const button = document.createElement('button')

heading.innerText = "Update"
heading.id = 'heading'

div.id = 'mainDiv'

form.id = 'updateForm'

button.id = 'submit'
button.innerText = 'Submit'

userNameUpdate.className = 'username'
userNameUpdate.type = 'text'
userNameUpdate.name = 'username'
userNameUpdate.placeholder = 'Enter Username'

emailUpdate.className = 'input'
emailUpdate.type = 'email'
emailUpdate.name = 'email'
emailUpdate.placeholder = 'Enter Email'

passwordUpdate.className = 'input'
passwordUpdate.type = 'password'
passwordUpdate.name = 'password'
passwordUpdate.placeholder = "Enter Password"

passwordValidatedUpdate.className = 'input'
passwordValidatedUpdate.type = 'text'
passwordValidatedUpdate.name = 'username'
passwordValidatedUpdate.placeholder = 'Enter Username'

document.body.appendChild(heading)
document.body.appendChild(div)

div.appendChild(form)
div.appendChild(button)

form.appendChild(userNameUpdate)
form.appendChild(emailUpdate)
form.appendChild(passwordUpdate)
form.appendChild(passwordValidatedUpdate)

button.onclick = submitBtn


function submitBtn() {

    const formElm = document.getElementById('updateForm');
    const reqBody = {}

    for (const input of formElm) {
        reqBody[input.name] = input.value
    }

const endPoint = location.origin + '/user/update/:id'

    const xhr = new XMLHttpRequest()

    xhr.open('PUT', endPoint)

    xhr.onload = () => {
       const res = JSON.parse(xhr.responseText) 
       console.log(res)
    }

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(reqBody))


}
    