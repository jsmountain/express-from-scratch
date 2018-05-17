const express = require('express')
const app = express()

//setup view engine/
app.set('views', __dirname+'/views/')
app.set('view engine', 'ejs')

//membuar folder static public
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('main/index');
});

app.get('/kontak', (req, res) => {
  res.render('main/kontak');
});

//app.get('/', (req, res) => res.send('Hello Express!'))
//app.get('/about', (req, res) => res.send('Express is Express'))
app.listen(5432, () => console.log('Server Success berjalan di http://localhost:5432'))