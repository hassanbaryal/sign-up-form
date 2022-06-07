

const root = document.documentElement
const para = document.querySelector('.password-matches')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submitButton = document.querySelector('.submit-btn')
const signUpForm = document.querySelector('#sign-up-form')


signUpForm.addEventListener("submit", (e) =>{validateForm(e)})
confirmPassword.addEventListener('keyup', (e)=>{checkPasswords(e)})

// for toggling light to dark them and vice versa, whenever this feature is added
root.classList.add('light')

// Prevents form from being submitted if passwords do not match
function validateForm (e) {
    if (password.value != confirmPassword.value) {
        e.preventDefault()
    }
}

// checks if both passwords match when a key is pressed on confirm password field
function checkPasswords (e) {
    if(password.value == confirmPassword.value) {
        para.classList.remove('error')
    } else {
        para.classList.add('error')
    }
}