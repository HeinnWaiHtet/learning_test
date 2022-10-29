var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req,res,next){
  res.render('index', {title: 'Hello Route'});
});

router.get('/ab?cd', function (req, res, next){
  res.render('index', {title : 'ab?cd'});
})

router.get('/login', function (req, res,next){
  res.redirect('/hello');
});
module.exports = router;
