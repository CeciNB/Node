const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8080;

const notes = [
    {
        id: 0,
        title: 'Shopping',
        text: 'Mango, Lime, Salat',
    },
    {
        id: 1,
        title: 'Remember this',
        text: 'Putty, Sandpaper',
    },
    {
        id: 2,
        title: 'Meeting 02-03-2021',
        text: 'Internship offered',
    },
];

//Read All
app.get('/notes', (req, res) => {
    console.log(notes);
    res.send({ notes });
    console.log('notes:', notes);
});

//Read One
app.get('/notes/:id', (req, res) => {
    const noteToShow = notes.find((i) => i.id == req.params.id);
    res.send({ noteToShow });
    console.log('notes:', notes);
});

//Create one or more
app.post('/notes', (req, res) => {
    const ids = notes.map((note) => {
        return note.id;
    });
    const id = Math.max(...ids) + 1;

    const noteToAdd = {
        id: id,
        title: req.body.title,
        text: req.body.text,
    };

    notes.push(noteToAdd);
    res.send({
        addedNote: req.body,
    });
    console.log('notes:', notes);
});

//Update one
app.put('/notes/:id', (req, res) => {
    const noteToUpdateId = Number(req.params.id);
    let found = notes.find((note) => note.id === noteToUpdateId);
    const indexToUpdate = notes.indexOf(found);
    const updatedNote = {
        id: found.id,
        title: req.body.title,
        text: req.body.text,
    };
    notes.splice(indexToUpdate, 1, updatedNote);
    res.send({ updatedNote: updatedNote });
    console.log('notes:', notes);
});

//Delete one
app.delete('/notes/:id', (req, res) => {
    const noteToDeleteId = Number(req.params.id);
    let found = notes.find((note) => note.id === noteToDeleteId);
    const indexToDelete = notes.indexOf(found);
    notes.splice(indexToDelete, 1);
    console.log('notes:', notes);
    res.send({ deletedNoteID: noteToDeleteId });
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Couldn't run server: ${error}`);
    }
    console.log(`Server listening on port: ${PORT}`);
});

//console.log(`Server listening on port: ${PORT}`);

/* From class
//string query
app.get('/search', (req, res) => {
    console.log(req.url);
    res.send({ query: req.query });
});
//path variable
app.get('/telegram/:message/:name', (req, res) => {
    const message = req.params.message;
    const name = req.params.name;
    res.send({});
});
//path variable
app.get('/telegram/:name', (req, res) => {
    res.send({ message: req.params.message });
});

//http://localhost:8080/search?key=value&anotherKey=anotherValue
*/
