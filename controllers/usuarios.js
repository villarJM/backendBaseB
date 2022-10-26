const { request, response } = require("express");
const { query } = require("../db/connection");
const bcryptjs = require("bcryptjs")
const pool = require("../db/connection")

const getUsers = async (req = request, res = response) => {
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const [users] = await conn.query("SELECT * FROM Usuarios", (error) => {if(error) throw error})

        if (users.length === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: "No exiten usuarios registrados"})
            return
        }

        res.json({users})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}
const getUsersByID = async (req = request, res = response) => {
    const {id} = req.params//URI params
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [users] = await conn.query(`SELECT * FROM Usuarios WHERE ID = ${id}`, (error) => {if(error) throw error})

        console.log(users)
        if (!users) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No exiten usuarios registrados con el ID ${id}`})
            return
        }

        res.json({users})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}
const deleteUserByID = async (req = request, res = response) => {
    const {id} = req.params//URI params
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const result = await conn.query(`UPDATE Usuarios SET Activo = 'N' WHERE ID = ${id}`, (error) => {if(error) throw error})

        console.log(result.affectedRows)
        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No exiten usuarios registrados con el ID ${id}`})
            return
        }

        res.json({msg:`Se eliminó satisfactoriamente el usuario con ID ${id}`})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}

const addUser = async (req = request, res = response) => {
    const {Nombre, Apellidos, Edad, Genero, Usuario, Contrasena, Fecha_Nacimiento, Activo} = req.body//URI params

    if(!Nombre || !Apellidos || !Edad || !Usuario || !Contrasena || !Activo){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }
    const salt = bcryptjs.genSaltSync()
    const contrasenaCifrada = bcryptjs.hashSync(Contrasena, salt)

    let conn;

    try {

        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [userExist] = await conn.query(`SELECT Usuario FROM Usuarios WHERE Usuario = '${Usuario}'`, (error) =>{if(error) throw error})
        
        if (userExist) {
            res.json({msg:`El Usuario: '${Usuario}' ya se encuentra registrado.`})
            return
        }
        //generamos la consulta
        const result = await conn.query(`INSERT INTO Usuarios(Nombre, Apellidos, Edad, Genero, Usuario, Contrasena, Fecha_Nacimiento, Activo) VALUES ('${Nombre}', '${Apellidos}', ${Edad}, '${Genero}', '${Usuario}', '${contrasenaCifrada}', '${Fecha_Nacimiento}', '${Activo}')`, (error) => {if(error) throw error})

        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No se pudo agregar el usuarios con el Nombre ${Nombre}`})
            return
        }
        res.json({msg:`Se agregó satisfactoriamente el usuario con Nombre ${Nombre}`})//Se manda la lista de usuarios
        
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}

const updateUserByUser = async (req = request, res = response) => {
    const {Nombre, Apellidos, Edad, Genero, Usuario, Fecha_Nacimiento = '1900-01-01'} = req.body//URI params

    if(!Nombre || !Apellidos || !Edad || !Usuario){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }
    let conn;
    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const [userExist] = await conn.query(`SELECT Usuario FROM Usuarios WHERE Usuario = '${Usuario}'`)
        
                 //generamos la consulta
                 if(!userExist){ 
                    res.json({msg:`El usuario ${Usuario} no existe`})
                    return
                 }
                 const result = await conn.query(`UPDATE Usuarios SET 
                    Nombre = '${Nombre}',
                    Apellidos = '${Apellidos}',
                    Edad = ${Edad},
                    ${Genero ? `Genero = '${Genero}',` : ''} 
                    Fecha_Nacimiento = '${Fecha_Nacimiento}' 
                    WHERE Usuario = '${Usuario}'`, (error) => {if (error) throw error})

                    if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
                        res.status(404).json({msg: `No se pudo agregar el usuarios con el Nombre ${Nombre}`})
                        return
                    }
                    res.json({msg:`Se actualizo satisfactoriamente el usuario ${Usuario}`})//Se manda la lista de usuarios
               
    }catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}
module.exports = {getUsers, getUsersByID, deleteUserByID, addUser, updateUserByUser}