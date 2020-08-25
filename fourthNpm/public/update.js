window.onload = function () {

    const heading = document.createElement('h1')
    const div = document.createElement('div')
    const form = document.createElement('form')
    const userNameUpdate = document.createElement('input')
    const emailUpdate = document.createElement('input')
    const passwordUpdate = document.createElement('input')
    const passwordValidatedUpdate = document.createElement('input')
    const idInput = document.createElement('input')
    const button = document.createElement('button')
    
    heading.innerText = "Update"
    heading.id = 'heading'
    
    div.id = 'mainDiv'
    
    form.id = 'updateForm'
    
    button.id = 'submit'
    button.innerText = 'Submit'
    button.type = 'submit'
    
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
    passwordValidatedUpdate.type = 'password'
    passwordValidatedUpdate.name = 'passwordValidate'
    passwordValidatedUpdate.placeholder = 'Re-Enter Password'

    idInput.className = 'input'
    idInput.type = 'text'
    idInput.name = 'id'
    idInput.placeholder = 'Enter ID'
    
    document.body.appendChild(heading)
    document.body.appendChild(div)
    
    div.appendChild(form)
    div.appendChild(button)
    
    form.appendChild(userNameUpdate)
    form.appendChild(emailUpdate)
    form.appendChild(passwordUpdate)
    form.appendChild(passwordValidatedUpdate)
    form.appendChild(idInput)
    
    button.onclick = submitBtn
    }
    
    function submitBtn() {
    
        const formElm = document.getElementById('updateForm');
        const reqBody = {}
    
        for (const input of formElm) {
            if(formElm[input.name].value == '') {
                alert(`complete all fields!`)
            } else{
            reqBody[input.name] = input.value
        }
    }
        
    
    const endPoint = location.origin + `/user/update/${formElm.id.value}`
    
        const xhr = new XMLHttpRequest()
    
        xhr.open('PUT', endPoint)
    
        xhr.onload = () => {
           const res = JSON.parse(xhr.responseText) 
           console.log(res)
        }
    
        xhr.setRequestHeader('Content-Type', 'application/json')
    
        xhr.send(JSON.stringify(reqBody))
    }