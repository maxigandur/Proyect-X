let btnexitLogin = document.querySelector(".exit")
let divLogin = document.querySelector(".loginBox")
let mainHtml = document.querySelector(".blur")
let btnLoguearse = document.querySelector(".btn")

btnexitLogin.addEventListener("click",()=>{
    divLogin.classList.add("hide")
    mainHtml.classList.remove("show")
})

btnLoguearse.addEventListener("click", ()=>{
    divLogin.classList.remove("hide")
    mainHtml.classList.add("show")
})


let btnexitRegister = document.querySelector(".exitRegister")
let divRegister = document.querySelector(".registerBox")
let btnlogintoRegister = document.querySelector(".register-link")
let btnregistertoLogin = document.querySelector(".login-register")


btnexitRegister.addEventListener("click", ()=>{
    divRegister.classList.add("hide")
    mainHtml.classList.remove("show")
})

btnlogintoRegister.addEventListener("click", ()=>{
    divLogin.classList.add("hide")
    divRegister.classList.remove("hide")
})

btnregistertoLogin.addEventListener("click", ()=>{
    divLogin.classList.remove("hide")
    divRegister.classList.add("hide")
}) 


