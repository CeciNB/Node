const express = require('express')
const fetch = require('node-fetch')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome/welcome.html')
})

app.get('/catfact', (req, res) => {
    res.sendFile(__dirname + '/public/catfact/catfact.html')
})

app.get('/other', (req, res) => {
    res.sendFile(__dirname + '/public/other.html')
})

app.get('/pizza', (req, res) => {
    res.sendFile(__dirname + '/public/pizza.html')
})

app.get('/candle', (req, res) => {
    if (req.query.blow) {
        res.send({ lightsOn: 'false' })
    } else {
        res.send({ lightsOn: 'true' })
    }
})

app.get('/proxy', async (req, res) => {
    try {
        const response = await fetch('https://google.com/')
        const body = await response.text()
        return res.send(body)
    } catch (error) {
        res.send({ error: error })
    }
})

const server = app.listen(port, (error) => {
    if (error) throw error
    else console.log('Server listening on port:', server.address().port)
})
