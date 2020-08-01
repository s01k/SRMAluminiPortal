var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

router.get('/assist', function(req, res, next) {
  res.render('assist', {page:'ASSIST', menuId:'assist'});
});

router.get('/events', function(req, res, next) {
  res.render('events', {page:'EVENTS', menuId:'events'});
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', {page:'GALLERY', menuId:'gallery'});
});

router.get('/members', function(req, res, next) {
  res.render('members', {page:'MEMBERS', menuId:'members'});
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {page:'signup', menuId:'signup'});
});

router.get('/login', function(req, res, next) {
  res.render('login', {page:'login', menuId:'login'});
});
module.exports = router;
