const mysql = require("mysql")
//adquirimos la libreria MYSQL

//creamos la coneccion con los datos de la DB
const conection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:"usuarios"
})

//conectamos, y largamos como callback el error, y en caso de que no haya error, funciona la coneccion
conection.connect( (err) =>{
    if(err) throw(err)
    console.log("La Conexion Funciona")
})


//query -> funcion para hacer una peticion, seleccionamos todos los users y los mostramos con rows
conection.query("SELECT * from users", (err, rows)=>{
    if(err) throw(err)
    console.log("los datos de la tabla son:", rows)
})




conection.end()