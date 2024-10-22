//server app
const express = require('express');
const app = express();
const httpLogger = require('morgan');
const cors = require('cors');
const port = 3000;

const TaskManager = require('./taskManagement');

app.use(httpLogger('dev'));
app.use(cors()) //see more at https://www.npmjs.com/package/cors
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) //we expect JSON data to be sent as payloads

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/tasks', (req, res) => {

    const tasks = TaskManager.getTasks();

    // const message = {
    //     message: 'Salut'
    // };
    res.status(200).send(tasks);
})

app.post('/data', (req, res) => {
  let data = req.body
  console.log('trying to post the following data: ', data)
  res.send('Succes')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});