window.onload = function () {
    // 1. 
    const heading = document.createElement('h1')
    const div = document.createElement('div')
    const loginForm = document.createElement('form')
    const emailInput = document.createElement('input')
    const passwordInput = document.createElement('input')
    const submitButton = document.createElement('button')

    // 2.
    div.id = 'mainDiv'

    loginForm.id = 'login'

    emailInput.className = 'input'
    emailInput.type = 'email'
    emailInput.placeholder = 'Email'
    emailInput.name = 'email'

    passwordInput.className = 'input'
    passwordInput.placeholder = 'Password'
    passwordInput.type = 'password'
    passwordInput.name = 'password'

    submitButton.id = 'button'
    submitButton.innerText = "Log In"

    submitButton.onclick = sumbmitFunc

    // 3.
    document.body.appendChild(heading)
    document.body.appendChild(div)
    div.appendChild(loginForm)
    div.appendChild(submitButton)
    loginForm.appendChild(emailInput)
    loginForm.appendChild(passwordInput)

    heading.innerText = 'Log In!'
}

function sumbmitFunc() {
    const loginValues = document.getElementById('login')
    const reqBody = {}

    for (const input of loginValues) {
        reqBody[input.name] = input.value.trim()
        // console.log(input.value.trim())
    }

    let passedValidation = true

    const email = reqBody.email

    if(
        email.length < 6
        || email.length > 200
        || !email.includes('@')
        || !email.substring(email.indexOf('@')).includes('.')
    ) {
        alert('Please enter valid email')

        return passedValidation = false
    }

    if (reqBody.password.length < 7) {
        alert('Please enter valid password')

        return passedValidation = false

    }

    if(passedValidation) {

    // console.log(loginValues.children[0].value)
    const endpoint = location.origin + "/user/login"
    const xhr = new XMLHttpRequest()

    xhr.open('PATCH', endpoint)

    xhr.onload = function () {
        const res = JSON.parse(this.responseText)
        console.log(res)
    }

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(reqBody))

}
}
