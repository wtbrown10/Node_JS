
window.onload = function () {
    // create a form 

    //1) create 'blank' elements
    const heading = document.createElement('h1')
    const mainDiv = document.createElement('div')
    const form = document.createElement('form')
    const emailInput = document.createElement('input')
    const userNameInput = document.createElement('input')
    const passInput = document.createElement('input')
    const passConfirmInput = document.createElement('input')
    const submitButton = document.createElement('button')

    //2) set properties and event listeners
    heading.innerText = 'Register Today!'

    emailInput.placeholder = "Enter Email"
    emailInput.type = 'email'
    emailInput.name = 'email'

    userNameInput.placeholder = "Enter UserName"
    userNameInput.name = "username"

    passInput.placeholder = "Enter Password"
    passInput.type = 'password'
    passInput.name = 'password'

    passConfirmInput.placeholder = "Re-Enter Password"
    passConfirmInput.type = "password"
    passConfirmInput.name = 'password2'

    submitButton.innerText = "Register"
    submitButton.type = 'submit'

    form.id = "register"

    submitButton.id = "RegButton"

    heading.id = 'heading'

    mainDiv.id = 'mainDiv'

    // submitButton.addEventListener("click", function () {
    //     const formInputs = form.children

    //     console.log(formInputs)

    //     for (let i = 0; i < formInputs.length; i++) {
    //         console.log(form.children[i].value)
    //     }
    // })
    submitButton.onclick = sumbmitReg;

    //3) append to the DOM
    document.body.appendChild(heading)
    document.body.appendChild(mainDiv)
    mainDiv.appendChild(form)
    mainDiv.appendChild(submitButton)
    form.appendChild(emailInput)
    form.appendChild(userNameInput)
    form.appendChild(passInput)
    form.appendChild(passConfirmInput)

    const inputs = document.querySelectorAll('input')
    for (let input of inputs) {
        input.classList.add('input')
    }
}

function sumbmitReg() {
    const formElm = document.getElementById('register');
    const reqBody = {}

    for (const input of formElm) {
        // console.log(input.value)
        reqBody[input.name] = input.value
    }

    let passedValidation = true;

    if(reqBody.username.length > 33 || reqBody.username.length < 3) {
        alert('Username must be within the range of 3-33 characters')

        return passedValidation = false
    }

    if(reqBody.password !== reqBody.password2) {
        alert('Passwords did not match')

        return passedValidation = false
    }

    if (passedValidation) {
        const endpoint = location.origin + '/user/post/register'

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