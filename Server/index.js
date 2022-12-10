// CONFIGURATION
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Modules and Globals





// Controllers & Routes

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(PORT, () => {
    console.log('Burnin` at port', PORT);
  })
  