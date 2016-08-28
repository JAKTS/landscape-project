var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var cors = require('cors');
var connectionString = 'postgres://MichaelDavis@localhost/front_to_back_dono'


var app = module.exports = express();

var massiveInstance = massive.connectSync({
  connectionString: connectionString
});
app.set('db', massiveInstance);


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

var jobCtrl = require('./controllers/jobCtrl.js');
var taskCtrl = require('./controllers/taskCtrl.js');

//Jobs Endpoints
app.get('/jobs', jobCtrl.getAllJobs);
app.post('/jobs', jobCtrl.createJob);
// app.put('/jobs/:id', jobCtrl.updateJob);

// Job Endpoints
app.get('/job/:name', jobCtrl.getJob);
app.delete('/job/:id', jobCtrl.deleteJob);
app.get('/job', taskCtrl.getAllTasks);
app.get('/task/:name', taskCtrl.getTask);

// Task Endpoints
app.post('/task', taskCtrl.createTask);
app.delete('/task/:id', taskCtrl.deleteTask);
// app.put('/task/:id', taskCtrl.updateTask);

app.listen(4000, function(){

});
