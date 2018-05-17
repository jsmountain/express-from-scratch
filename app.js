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
const port = process.env.PORT || 4000;

app.listen(port, function() {
	console.log(`Server Start on ${port}`);
})
//app.listen(5432, () => console.log('Server Success berjalan di http://localhost:5432'))