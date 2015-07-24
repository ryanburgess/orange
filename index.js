var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var orange      = require('./characters.json');
var object = []; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/all', function(req, res) {
    res.json(orange);   
});

router.get('/name/:name', function(req, res) {
    var name = req.params.name;
    name = name.replace(/-/g, ' ').toLowerCase();
    object = [];  
    orange.forEach(function(value) {
      if(value.name.toLowerCase() === name){
        object.push({name: value.name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});
      }
    });

    res.json(object);
});

// search by gender male or female
router.get('/gender/:gender', function(req, res) {
    var gender = req.params.gender.toLowerCase();
    object = [];
    orange.forEach(function(value) {
      if(value.gender === gender){
        object.push({name: value.name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});
      }
    });

    res.json(object);
    
});

// search by status alive or deceased
router.get('/status/:status', function(req, res) {
    var status = req.params.status.toLowerCase();
    object = [];
    orange.forEach(function(value) {
      if(value.status === status){
        object.push({name: value.name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});
      }
    });

    res.json(object);
});

// search by each season a character has appeared in
router.get('/season/:season', function(req, res) {
    var season = req.params.season.toUpperCase();
    object = [];
    orange.forEach(function(value) {
      value.seasons.forEach(function(s) {
        if(s === season){
          object.push({name: value.name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});
        }
      });
      
    });

    res.json(object);
});

// search by each season a character has appeared in
router.get('/category/:category', function(req, res) {
    var category = req.params.category.toLowerCase();
    object = [];
    orange.forEach(function(value) {
      value.category.forEach(function(c) {
        if(c === category){
          object.push({name: value.name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});
        }
      });
      
    });

    res.json(object);
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);