const express = require('express')

const music = express()

const songs = [
  {
    id: 0,
    name: 'song0',
    year: 2020,
  },
  {
    id: 1,
    name: 'song1',
    year: 2020,
  },
  {
    id: 2,
    name: 'song2',
    year: 2020,
  },
  {
    id: 3,
    name: 'song3',
    year: 2020,
  },
]

music.get('/', (req, res) => {
  res.send('Welcome to my API try /songs')
})

music.get('/songs', (req, res) => {
  res.send(songs)
})

music.get('/songs/:id', (req, res) => {
  let name = songs.filter((i) => i.id == req.params.id)
  res.send(name)
})

music.listen(5555)
