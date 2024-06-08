const tokenName = '@OceanGuardians:token'
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form button').addEventListener('click', () => {
        if (!sendForm()) return
        sessionStorage.setItem(tokenName, '0')
        window.location.href = 'content.html';
    });
});

const emailInput = document.querySelector('input[type="email"]')
const passInput = document.querySelector('input[type="password"]')
const errorMsg = document.querySelector('.error-msg')

const correctEmail = 'email@email.email'
const correctPass = '123'

const helpEmail = document.querySelector('.help-email')
const helpPass = document.querySelector('.help-pass')

function printCorrectUser(email, pass){
    helpEmail.textContent += email
    helpPass.textContent += pass
}

printCorrectUser(correctEmail, correctPass)

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

isAlreadyLogged()

alert("Seja bem vindo!!")
