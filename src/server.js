const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies


const port = 3001

const todosRoutes = require('./routes/Todos')
// const TodoRouters = require('./route')
app.use('/todos', todosRoutes)

app.listen(port, () => {
    console.log("Listening on port: ", port) 

})