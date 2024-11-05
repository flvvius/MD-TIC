const express = require('express');
const app = express();
const port = 5001;
const cors = require('cors');
const morgan = require('morgan');
const db = require('./firebase-config/db');

app.use(morgan('dev'));
app.use(cors());

app.get('/', async (req, res) => {
    const confirmMessage = await db.collection('messages').add({"flavius": "salut!"});
    res.send(confirmMessage.id);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



