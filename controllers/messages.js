const rootMessage = (req, res) => {
    res.send('Mensajes')
}

const hiMessage = (req, res) => {
    res.send('Hola mundo')
}

const byeMessage = (req, res) => {
    res.send('Adiós mundo')
}

module.exports = {rootMessage, hiMessage, byeMessage}