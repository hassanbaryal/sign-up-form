


const para = document.querySelector('.password-matches')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submitButton = document.querySelector('.submit-btn')
const signUpForm = document.querySelector('#sign-up-form')

signUpForm.addEventListener("submit", (e) =>{validateForm(e)})
confirmPassword.addEventListener('keyup', (e)=>{checkPasswords(e)})


function validateForm (e) {
    if (password.value != confirmPassword.value) {
        e.preventDefault()
    }
}

function checkPasswords (e) {
    if(password.value == confirmPassword.value) {
        para.classList.remove('error')
    } else {
        para.classList.add('error')
    }
}