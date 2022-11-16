const express = require('express')
const messagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')
const plantsRouter = require('./routes/plantas')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            messages:"/api/v1/messages",
            usuarios:"/api/v1/usuarios",
            plantas:"/api/v2/plantas"
        }
        this.middleware()
        this.routes()
    }

    routes(){
        //this.app.get('/', (req, res) => {
        //    res.send('Mensaje recibido')
        //})//End Point
        this.app.use(this.paths.messages, messagesRouter)
        this.app.use(this.paths.usuarios, usuariosRouter)
        this.app.use(this.paths.plantas, plantsRouter)
    }

    middleware(){
        this.app.use(cors())//Habilita Origen Cruzado
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port)
        })
    }
}

module.exports = Server