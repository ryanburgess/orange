var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var orange      = require('./characters.json');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/all', function(req, res) {
    res.json(orange);   
});

router.get('/name/:character_name', function(req, res) {
    var name = req.params.character_name;   
    orange.forEach(function(value) {
      if(value.character_name === name){
        res.json({character_name: value.character_name, about: value.about, real_name: value.real_name, category: value.category, gender: value.gender, status: value.status, episodes: value.episodes, seasons: value.seasons});  
      }
    });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);