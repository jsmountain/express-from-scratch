const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//setup view engine/
app.set('views', __dirname+'/views/')
app.set('view engine', 'ejs')

//body parser
app.use(bodyParser.urlencoded({
	extended: false
}))

//membuar folder static public
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('main/index');
});


app.get('/post', (req, res) => {
  res.render('main/kontak');
});

app.post('/post', (req, res) => {
	console.log(req.body)
  res.render('main/succes', {
  	data: req.body
  });
});

/*app.get('/echo',(req, res) => {
	res.render('post')
})

app.post('/echo',(req, res) => {
	res.render('post')
})*/
//app.get('/', (req, res) => res.send('Hello Express!'))
//app.get('/about', (req, res) => res.send('Express is Express'))
app.listen(5432, () => console.log('Server Success berjalan di http://localhost:5432'))