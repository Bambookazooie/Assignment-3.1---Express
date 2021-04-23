const express = require('express');
const app = express();
const PORT = 5001;

app.get('*', (req, res) => {
    res.send('Assignment 3.1!')
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});