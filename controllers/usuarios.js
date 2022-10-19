const { request, response } = require("express");
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

module.exports = {getUsers, getUsersByID, deleteUserByID}