window.onload = function() {

const header = document.createElement('h1')
const div1 = document.createElement('div')
const form = document.createElement('form')
const userName = document.createElement('input')
const email = document.createElement('input')
const password = document.createElement('input')
const pet = document.createElement('input')
const button = document.createElement('button')

header.id = 'header'
header.innerText = 'Pet Adoption'

div1.id = 'div1'

form.id = 'form'

userName.className = 'input'
userName.name = 'name'
userName.placeholder = 'Enter Name'
userName.type = 'text'

email.className = 'input'
email.name = 'email'
email.placeholder = 'Enter Placeholder'
email.type = 'email'

password.className = 'input'
password.name = 'name'
password.placeholder = 'Enter Name'
password.type = 'password'

pet.className = 'input'
pet.name = 'pet'
pet.placeholder = 'Enter pet'
pet.type = 'text'

button.id = 'button'
button.innerText = 'Submit'
button.onclick = submitBtn

document.body.appendChild(header)
document.body.appendChild(div1)
div1.appendChild(form)
div1.appendChild(button)
form.appendChild(userName)
form.appendChild(email)
form.appendChild(password)
form.appendChild(pet)


function submitBtn() {

    const formElm = document.getElementById('form')
    const reqBody = {}

    for (const input of formElm) {
        reqBody[input.name] = input.value.trim()
    }

    let passedValidation = true;

    const email = reqBody.email

    if(
        email.length < 6 
        || email.length > 200 
        || !email.includes('@') // doesnot account for multipule @ symbols
        || !email.substring(email.indexOf('@')).includes('.') // does not account for multiple '.' after the @ symbol
    ) {
        alert('Please enter valid email')

    }

    if(reqBody.username.length > 33 || reqBody.username.length < 3) {
        alert('Username must be within the range of 3-33 characters')

        return passedValidation = false
    }

    if(reqBody.password.length < 7) {
        alert('Password did not meet requirements!')

        return passedValidation = false
    }

    if(reqBody.password !== reqBody.password2) {
        alert('Passwords did not match')

        return passedValidation = false
    }

    if (passedValidation) {
        const endpoint = location.origin + '/user/post/home'

    const xhr = new XMLHttpRequest();

    xhr.open('POST', endpoint)

    xhr.onload = () => {
        const res = JSON.parse(xhr.responseText)
        console.log(res)
    }

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(reqBody))
    }
}



}