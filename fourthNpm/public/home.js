


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

    userNameInput.placeholder = "Enter UserName"

    passInput.placeholder = "Enter Password"
    passInput.type = 'password'

    passConfirmInput.placeholder = "Re-Enter Password"
    passConfirmInput.type = "password"

    submitButton.innerText = "Register"
    submitButton.type = 'submit'

    form.id = "register"

    submitButton.id = "RegButton"

    heading.id = 'heading'

    mainDiv.id = 'mainDiv'



    submitButton.addEventListener("click", function () {
        const formInputs = form.children

        console.log(formInputs)

        for (let i = 0; i < formInputs.length; i++) {
            console.log(form.children[i].value)
        }

        // console.log(form.children[0].value)
    })



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
        input.classList.add('userInput')
    }







}