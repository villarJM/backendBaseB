const express = require('express')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.routes()
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Mensaje recibido')
        })//End Point
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto 4000', this.port)
        })
    }
}

module.exports = Server