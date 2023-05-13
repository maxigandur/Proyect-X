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
            //INTERESANTE -> AL LOGEARTE TE ENVIA AL PROFILE (OTRO FORMULARIO HTML)
            window.location = 'profile.html'
        return
    } else if (contador >= users.length){
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
}       
}