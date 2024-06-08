
const emailInput = document.querySelector('input[type="email"]')
const passInput = document.querySelector('input[type="password"]')
const errorMsg = document.querySelector('.error-msg')

const correctEmail = 'email@email.email'
const correctPass = '123'

const helpEmail = document.querySelector('.help-email')
const helpPass = document.querySelector('.help-pass')

const tokenName = '@OceanGuardians:token'

function focusInput() {
    errorMsg.textContent = ''
}

function sendForm() {
    if (emailInput.value === correctEmail && passInput.value === correctPass) return true
    sessionStorage.removeItem(tokenName)

    errorMsg.textContent = 'Usuário inválido!'
    return false
}

function isAlreadyLogged(){
    const token = sessionStorage.getItem(tokenName)

    if (token){
        window.location.href = 'content.html';
    }
}

function printCorrectUser(email, pass){
    helpEmail.textContent += email
    helpPass.textContent += pass
}

let seePasswordFlag = false
const eye = document.querySelector('.see-password')
function seePassword(){
    seePasswordFlag = !seePasswordFlag 

    if(seePasswordFlag){
        passInput.type = 'text' 
        eye.src = 'assets/icons/icon-eye.png'
    } else {
        passInput.type = 'password' 
        eye.src = 'assets/icons/icon-eye-off.png'
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.send').addEventListener('click', () => {
        if (!sendForm()) return
        sessionStorage.setItem(tokenName, '0')
        window.location.href = 'content.html';
    });
});

printCorrectUser(correctEmail, correctPass)

isAlreadyLogged()

alert("Seja bem vindo!!")

