const generateBtn = document.querySelector("#generate")
const passwordBox = document.querySelector("#password")
const copyBtn = document.querySelector(".copyIcon")
const eyeBtn = document.querySelector(".eyeIcon")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*-_`~=+<>?/"
const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_`~=+<>?/"

const passwordLength = 12

function createPassword(){
    let password = ""

    password+= upperCase[Math.floor(Math.random()*upperCase.length)]
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+= numbers[Math.floor(Math.random()*numbers.length)]
    password+= symbols[Math.floor(Math.random()*symbols.length)]

    while(passwordLength>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value = password
}

generateBtn.addEventListener("click",()=>{
    createPassword()
})

function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value)
}

copyBtn.addEventListener("click",()=>{
    copyPassword()
    alert('Password copied!')
})

function showPassword(){
    if(passwordBox.type=="password"){
        passwordBox.type = "text"
        eyeBtn.src = "images/eye.png"
    }else{
        passwordBox.type = "password"
        eyeBtn.src = "images/hidden.png"
    }
}

eyeBtn.addEventListener("click",()=>{
    showPassword()
})
