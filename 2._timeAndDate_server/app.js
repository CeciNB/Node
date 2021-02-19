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
    res.send(`The time is now: ${time}`);
});

app.get('/day', (req, res) => {
    const day = new Date().getDay();
    console.log(day);
    res.send(`The day is now: ${day}`);
});

app.get('/month', (req, res) => {
    const month = new Date().toLocaleDateString('default', { month: 'long' });
    console.log(month);
    res.send(`The month is now: ${month}`);
});

app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);
