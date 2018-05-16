const express = require('express')
const app = express()

//setup view engine/
app.set('views', __dirname+'/views/')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('main/index');

});


//app.get('/', (req, res) => res.send('Hello Express!'))
//app.get('/about', (req, res) => res.send('Express is Express'))
app.listen(5432, () => console.log('Hello World app berjalan di http://localhost:5432'))