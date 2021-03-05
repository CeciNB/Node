const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome.html');
});

app.get('/other', (req, res) => {
    res.sendFile(__dirname + '/public/other.html');
});

app.listen(PORT, (error) => {
    if (error) throw error;
    else console.log(`Server listening on port: ${PORT}`);
});
