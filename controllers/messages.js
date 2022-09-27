const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.json({msg:'Mensajes'})
}

const hiMessage = (req, res) => {
    res.json({msg:'Hola mundo'})
}

const byeMessage = (req, res) => {
    res.json({msg:'Adiós mundo'})
}

const postMessage = (req, res) => {
    res.json({msg:'Mensaje POST'})
}

const putMessage = (req, res) => {
    res.json({msg:'Mensaje PUT'})
}

const deleteMessage = (req, res) => {
    res.json({msg:'Mensaje DELETE'})
}

module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}