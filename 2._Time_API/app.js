const express = require('express');
const app = express();

const HOST = 'localhost';
const PORT = 5555;

app.get('/', (req, res) => {
    res.send({
        status: res.statusCode,
        endpoints: {
            time: `${HOST}:${PORT}/time`,
            date: `${HOST}:${PORT}/day`,
            month: `${HOST}:${PORT}/month`,
        },
    });
});

app.get('/time', (req, res) => {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    res.send({ time: time });
});

app.get('/day', (req, res) => {
    const day = new Date().getDate();
    console.log(day);
    res.send(`The day is now: ${day}`);
});

app.get('/about', (req, res) => {
    res.send({
        version: 'v1.0.0',
    });
});

app.get('/page', (req, res) => {
    res.send('<h1>Welcome</h1>');
});

/*

*/

app.get('/month', (req, res) => {
    const month = new Date().toLocaleDateString('default', { month: 'long' });
    console.log(month);
    res.send(`The month is now: ${month}`);
});

app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);
