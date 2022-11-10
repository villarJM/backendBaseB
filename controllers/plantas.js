const { request, response } = require("express");
const { query } = require("../db/connection");
//const bcryptjs = require("bcryptjs")
const pool = require("../db/connection");
const modelPlantas = require("../models/plantas");

const addPlants = async (req = request, res = response) => {
    const {Name, Description, Ability, Price, Damage, Ranges, Attack_Direction, Recharge, Family, Active} = req.body//URI params

    if(!Name || !Description || !Ability || !Price || !Damage || !Ranges || !Attack_Direction || !Recharge || !Family || 
        !Active){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }

    let conn;

    try {

        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [plantExist] = await conn.query(modelPlantas.queryPlantExists, [Name], (error) =>{if(error) throw error})
        
        if (plantExist) {
            res.json({msg:`La Planta: '${Name}' ya se encuentra registrado.`})
            return
        }
        //generamos la consulta
        const result = await conn.query( modelPlantas.queryAddPlants, [Name, Description, Ability, Price, Damage, Ranges, Attack_Direction, Recharge, Family,
            Active], (error) => {if(error) throw error})

        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No se pudo agregar la Planta ${Name}`})
            return
        }
        res.json({msg:`Se agregó satisfactoriamente la Planta con Nombre ${Name}`})//Se manda la lista de usuarios
        
    } catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}

module.exports = {addPlants}