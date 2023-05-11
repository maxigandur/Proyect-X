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

/* REGISTER LOGIC */


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


/* LOGIN AND REGISTER LOGICS */
let registerName = document.querySelector(".inputRegisterName")
let registerMail = document.querySelector(".inputRegisterMail")
let registerPassword = document.querySelector(".inputRegisterPassword")
let registerRepeatpw = document.querySelector(".inputRepeatPassword")
let btnRegister = document.querySelector(".btnRegister").addEventListener("click", getInfo)
let users = []

class user{
    constructor(name,mail,pass,rpass){
        this.name = name
        this.mail = mail
        this.pass = pass
        this.rpass = rpass
    }
}


function getInfo(e){
    e.preventDefault()
    let newUser = new user
    newUser.name = registerName.value
    newUser.mail = registerMail.value
    newUser.pass = registerPassword.value
    newUser.rpass = registerRepeatpw.value

    users.push(newUser)
    
    
    let users_json = JSON.stringify(users)
    localStorage.setItem("UsersID", users_json)


}



window.onload = userinfo

function userinfo(){
    let getUsers = localStorage.getItem("UsersID")
    let usersParsed = JSON.parse(getUsers)
    

    for (let i = 0; i < usersParsed.length; i++) {
        console.log(usersParsed[i])
        
    }



   
    
}
    

