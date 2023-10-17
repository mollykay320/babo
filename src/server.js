const express = require('express')
const app = express()
const initRoutes = require('./routes/web')
const bodyParser = require('body-parser');


app.use(express.urlencoded({extended: true}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initRoutes(app)

const port = 8017

app.listen(port, () => {
  console.log(`Send Mailer server running on:${port}/`)
})
