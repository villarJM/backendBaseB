const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    const {nombre, apellido_paterno} = req.query
    ///console.log(nombre)
    if(!nombre){
        res.status(400).json({
            msg:"Falta Indicar el nombre"
        })
        return
    }

    if(!apellido_paterno){
        res.status(400).json({
            msg:"Falta Indicar el apellido paterno"
        })
        return
    }
    res.status(200).json({msg:'Mi nombre es ' + nombre + ' ' + apellido_paterno})
}

const hiMessage = (req = request, res = response) => {
    const {name, edad} = req.params
    res.status(408).json({msg:'Hola ' + name + ' ' + edad})
}

const byeMessage = (req, res) => {
    res.status(205).json({msg:'Adiós mundo'})
}

const postMessage = (req, res) => {
    const {no_control, nombre} = req.body
    //console.log(no_control,nombre)
    res.status(429).json({msg:`Número de Control: ${no_control}, Nombre: ${nombre}`})
}

const putMessage = (req, res) => {
    res.status(203).json({msg:'Mensaje PUT'})
}

const deleteMessage = (req, res) => {
    res.status(401).json({msg:'Mensaje DELETE'})
}

module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}