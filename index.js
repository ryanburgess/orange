var express     = require('express');
var reactViews  = require('express-react-views');
var app         = express();
var bodyParser  = require('body-parser');
var orange      = require('./characters.json');
var object      = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/all', function(req, res) {
  res.json(orange);   
});

function updateObject(value){
  object.push({name: value.name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});
}

app.get('/', require('./routes').index);

router.get('/name/:name', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  var name = req.params.name;
  name = name.replace(/-/g, ' ').toLowerCase();
  object = [];  
  orange.forEach(function(value) {
    if(value.name.toLowerCase() === name){
      updateObject(value);
    }
  });

  res.json(object);
});

// search by gender male or female
router.get('/gender/:gender', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  var gender = req.params.gender.toLowerCase();
  object = [];
  orange.forEach(function(value) {
    if(value.gender === gender){
      updateObject(value);
    }
  });

  res.json(object);
    
});

// search by status alive or deceased
router.get('/status/:status', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  var status = req.params.status.toLowerCase();
  object = [];
  orange.forEach(function(value) {
    if(value.status === status){
      updateObject(value);
    }
  });

  res.json(object);
});

// search by each season a character has appeared in
router.get('/season/:season', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  var season = req.params.season.toUpperCase();
  object = [];
  orange.forEach(function(value) {
    value.seasons.forEach(function(s) {
      if(s === season){
        updateObject(value);
      }
    });
    
  });

  res.json(object);
});

// search by each season a character has appeared in
router.get('/category/:category', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  var category = req.params.category.toLowerCase();
  object = [];
  orange.forEach(function(value) {
    value.category.forEach(function(c) {
      if(c === category){
        updateObject(value);
      }
    });
    
  });

  res.json(object);
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);