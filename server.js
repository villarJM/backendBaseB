const express = require('express')
const messagesRouter = require('./routes/messages')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            messages:"/api/v1/messages"

        }
        this.middleware()
        this.routes()
    }

    routes(){
        //this.app.get('/', (req, res) => {
        //    res.send('Mensaje recibido')
        //})//End Point
        this.app.use(this.paths.messages, messagesRouter)
    }

    middleware(){
        this.app.use(cors())//Habilita Origen Cruzado
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto 4000', this.port)
        })
    }
}

module.exports = Server