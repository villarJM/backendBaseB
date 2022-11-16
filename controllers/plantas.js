const { request, response } = require("express");
const { query } = require("../db/connection");
const pool = require("../db/connection");
const modelPlantas = require("../models/plantas");

const getPlants = async (req = request, res = response) => {
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const plant = await conn.query(modelPlantas.queryGetPlants, (error) => {if(error) throw error})
        //console.log(plant)
        if (!plant) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: "No Existe Planta Registrado"})
            return
        }
        res.json({plant})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}
const getPlantsByID = async (req = request, res = response) => {
    const {ID} = req.params//URI params
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [plant] = await conn.query(modelPlantas.queryGetPlantByID,[ID], (error) => {if(error) throw error})

        console.log(plant)
        if (!plant) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No Existe Planta Registrado Con El ID ${ID}`})
            return
        }

        res.json({plant})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}
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
const deletePlantByID = async (req = request, res = response) => {
    const {ID} = req.params//URI params
    let conn;

    try {
        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const result = await conn.query(modelPlantas.queryDeletePlantByID,[ID], (error) => {if(error) throw error})

        console.log(result.affectedRows)
        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No Existe Planta Registrado Con el ID ${ID}`})
            return
        }

        res.json({msg:`Se Eliminó Satisfactoriamente La Planta Con ID ${ID}`})//Se manda la lista de usuarios
    }
    catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}
const updatePlantByPlant = async (req = request, res = response) => {
    const {Name, Description, Ability, Price, Damage, Ranges, Attack_Direction, Recharge, Family} = req.body//URI params
    console.log(!Price)
    if(!Name || !Description || !Ability || !Price || !Damage || !Ranges || !Attack_Direction || !Recharge || !Family){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }
    let conn;
    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const [plantExist] = await conn.query(modelPlantas.queryPlantExists, [Name])
        
        //generamos la consulta
            if(!plantExist){ 
                res.json({msg:`La Planta ${Name} No Existe.`})
                return
            }
            const result = await conn.query(modelPlantas.queryUpdatePlantByPlant, [Name, Description, Ability, Price, Damage, Ranges, Attack_Direction, Recharge, Family, Name], (error) => {if (error) throw error})

            if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
                res.status(404).json({msg: `No Se Pudo Actualizar La Planta Con El Nombre ${Name}`})
                return
            }
            res.json({msg:`Se Actualizó Satisfactoriamente La Planta ${Name}`})//Se manda la lista de usuarios
    }catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}

module.exports = {addPlants, getPlants, getPlantsByID, deletePlantByID, updatePlantByPlant}