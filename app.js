const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/index')

app.set('views', __dirname+'/views/')
app.set('view engine','ejs')

//body parser
app.use(bodyParser.urlencoded({
	extended: false
  }));

// routes
app.use('/', router)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server starts on ${port}`))