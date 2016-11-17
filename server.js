
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

// bring in the controller
var routes = require('./controllers/volunteer-controller.js');

var app = express();

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Serve static content for the ap;p from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use('/', routes);
app.use('/helpr', routes);
app.use('/helpr/addproj', routes);
app.use('/helpr/search', routes);
app.use('/helpr/help', routes);

// listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port);

console.log(module.exports);
