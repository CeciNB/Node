const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

const animeNames = [
    {
        id: 1,
        title: 'Attack on Titam',
        weirdness: 6.8,
    },
    {
        id: 2,
        title: 'One Man Punch',
        protagonist: 'Saitama',
    },
]

let AUTOIMCREMENT = animeNames.length

app.get('/anime_names', (req, res) => {
    res.send({ animeNames })
})

app.get('/anime_names/:id', (req, res) => {
    const animeNameId = Number(req.params.id)
    const foundAnimeName = animeNames.find(
        (animeName) => animeName.id === animeNameId,
    )
    res.send({ foundAnimeName })
})

app.post('/anime_names', (req, res) => {
    const animeName = req.body
    animeName.id = ++AUTOIMCREMENT
    animeNames.push(animeName)
    res.send({ data: animeName })
})



app.patch('/anime_names/:id', (req, res) => {
    const message = "no"
    animeNames = animeNames.map((animeName) => {
        if (animeName.id === Number(req.params.id)) {
            return (animeName = { ...animeName, ...req.body, id: animeName.id })
            set
        }
        return animeName
    })
    res.send({ animeNames })
})

app.delete('/anime_names/:id', (req, res) => {
    animeNames = animeNames.filter(
        (animeName) => animeName.id !== Number(req.params.id),
    )
    res.send({ removedId: id })
})

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`)
})
