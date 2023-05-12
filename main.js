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


/* REGISTER LOGICS */
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


function recoverInfo(){

    if (localStorage.getItem("UsersID")) {
        let getUsers = localStorage.getItem("UsersID")
        let usersParsed = JSON.parse(getUsers)

        users = usersParsed 
        console.log(users)

    }   else{
        console.log("no Se encontraron datos")
    }

}
    

recoverInfo()

/* LOGIN LOGICS */

let loginEmail = document.querySelector(".inputemailLogin")
let loginPw = document.querySelector(".inputpwLogin")
let btnLogin = document.querySelector(".btnLogin").addEventListener("click", consultarDatos)

function consultarDatos (e){

    e.preventDefault()

  /*   for (const user of users) {
       
        if (loginEmail.value === user.mail && loginPw.value === user.pass) {
            console.log("Te Logeaste Exitosamente")
            console.log(user.mail, user.pass)
            Toastify({

                text: "Te Logueaste Exitosamente",
                position: "left",
                style: {
                  background: "green",
                  fontSize: "15px",
                },
                duration: 3000
      
                }).showToast();
            return
        }   
        
    } 
 */

    let contador = 0

for (const user of users) {
      
    contador++ 
    if(user.mail == loginEmail.value && user.pass == loginPw.value){
        Toastify({

            text: "Te Logueaste Exitosamente",
            position: "left",
            style: {
              background: "green",
              fontSize: "15px",
            },
            duration: 3000
  
            }).showToast();
        return
    } 
    
    
    if (contador >= users.length){
        /* window.location.reload() */

        Toastify({

            text: "Error Datos Incorrectos",
            position: "left",
            style: {
              background: "Red",
              fontSize: "15px",
            },
            duration: 3000
  
            }).showToast();

            loginEmail.value = ""
            loginPw.value = ""
        return
    }





   /*  else if (user.mail != loginEmail.value && user.pass != loginPw.value && contador == 0 || user.mail == loginEmail.value && user.pass != loginPw.value && contador == 0 || user.pass == loginPw.value && user.mail != loginEmail.value && contador == 0) {
        console.log("Sus Credenciales Son Invalidas")     
        
    }

    console.log(contador)
 */

   /*  if (user.mail == loginEmail.value && user.pass == loginPw.value) {
        console.log("Se Logeo Correctamente")
        return
    }else{

    } */

 /*    else if(user.mail == loginEmail.value && user.pass != loginPw.value){
        console.log("Su Contraseña Es Incorrecta")
        return
    }else if(user.mail != loginEmail.value && user.pass == loginPw.value){
        console.log("Su Mail Es Incorrecto")
        return
    } */

}
   

    
  
}