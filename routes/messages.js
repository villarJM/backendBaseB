//http://localhost:4000/api/v1/messages
const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Mensaje')
})//End Point

router.get('/hi', (req, res) => {
    res.send('Hola mundo')
})//End Point

router.get('/bye', (req, res) => {
    res.send('Adiós mundo')
})//End Point

module.exports = router