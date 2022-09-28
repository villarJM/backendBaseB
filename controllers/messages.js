const { request, response } = require("express")

const rootMessage = (req = request, res = response) => {
    res.status(404).json({msg:'Mensajes'})
}

const hiMessage = (req, res) => {
    res.status(408).json({msg:'Hola mundo'})
}

const byeMessage = (req, res) => {
    res.status(205).json({msg:'Adiós mundo'})
}

const postMessage = (req, res) => {
    res.status(429).json({msg:'Mensaje POST'})
}

const putMessage = (req, res) => {
    res.status(203).json({msg:'Mensaje PUT'})
}

const deleteMessage = (req, res) => {
    res.status(401).json({msg:'Mensaje DELETE'})
}

module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}