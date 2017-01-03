var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The PottyCheck' })
})

// router.get('/map', function(req, res, next) {
//   res.render('map', { })
// })

// router.get('./public/ngViews/login.html', function(req, res, next) {
//   res.render('login', { })
// })

module.exports = router
