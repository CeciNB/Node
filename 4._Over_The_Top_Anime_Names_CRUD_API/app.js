const express = require('express');
const app = express();
app.use(express.json());

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
];

app.get('/anime_names', (req, res) => {
    res.send({ animeNames });
});

app.get('/anime_names/:id', (req, res) => {
    const animeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(
        (animeName) => animeName.id === animeNameId,
    );
    res.send({ foundAnimeName });
});

app.post('/anime_names', (req, res) => {
    const ids = animeNames.map((animeName) => {
        return animeName.id;
    });
    const id = Math.max(...ids) + 1;

    res.send({ body: req.body });
});

app.listen(8080);
