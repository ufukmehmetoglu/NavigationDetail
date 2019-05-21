const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '../static')))


app.listen(port, () => console.log(`Listening port ${port}`))