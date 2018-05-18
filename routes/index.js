const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('main/index');
});

router.get('/contact', (req, res) => {
    res.render('main/contact');
});

router.get('*', (req, res) => {
    action: "/login", //post action for the form
    res.render('main/notfound');
});

router.post('/contact',(req, res) => {
    res.render('main/success',{ data: req.body });
});

module.exports = router;