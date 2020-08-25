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
    
    userNameUpdate.className = 'input'
    userNameUpdate.type = 'text'
    userNameUpdate.name = 'username'
    userNameUpdate.placeholder = 'Enter Username'
    userNameUpdate.minLength = 3
    userNameUpdate.maxLength = 33
    
    emailUpdate.className = 'input'
    emailUpdate.type = 'email'
    emailUpdate.name = 'email'
    emailUpdate.placeholder = 'Enter Email'
    
    passwordUpdate.className = 'input'
    passwordUpdate.type = 'password'
    passwordUpdate.name = 'password'
    passwordUpdate.placeholder = "Enter Password"
    passwordUpdate.minLength = 7
    
    passwordValidatedUpdate.className = 'input'
    passwordValidatedUpdate.type = 'password'
    passwordValidatedUpdate.name = 'passwordValidate'
    passwordValidatedUpdate.placeholder = 'Re-Enter Password'
    passwordValidatedUpdate.minLength = 7

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
        const userID = formElm.id.value.trim()

        if(userID  == '') {
            return alert('Must Provide User ID')
        } else if (userID.length != 24) {
            return alert('ID must be in proper format')
        }

        console.log('passes ID test');
    
        // for (const input of formElm) {
        //     if(formElm[input.name].value.trim() == '') {
        //         alert(`complete all fields!`)
        //     } else{
        //     reqBody[input.name] = input.value
        // }

        for (const input of formElm) {
            const val = input.value.trim()
            if(val != '' && input.name != 'id') {
            reqBody[input.name] = val
        }
        }
        if (Object.keys(reqBody).length == 0) {
            return alert('One input must be filled')
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