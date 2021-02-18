const express = require('express');

const music = express();

const songs = [
    {
        id: 0,
        title: 'Close to Me',
        artist: 'The Cure',
        year: 1985,
    },
    {
        id: 1,
        title: 'Modern Love',
        artist: 'David Bowie',
        year: 1983,
    },
    {
        id: 2,
        title: 'I Wanna Dance with Somebody',
        artist: 'Whitney Houston',
        year: 1987,
    },
    {
        id: 3,
        title: 'Free Fallin',
        artist: 'Tom Petty',
        year: 1989,
    },
];

music.get('/', (req, res) => {
    res.send('Welcome to my API try /songs');
});

music.get('/songs', (req, res) => {
    res.send(songs);
});

music.get('/songs/:id', (req, res) => {
    let song = songs.filter((i) => i.id == req.params.id);
    res.send(song);
});

music.listen(5555);
