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

var jobCtrl = require('./controllers/jobCtrlDB.js');
var taskCtrl = require('./controllers/taskCtrlDB.js');
var clientCtrl = require('./controllers/clientCtrlDB.js');
var userCtrl = require('./controllers/userCtrlDB.js');

// app.use(function (req, res, next){
//     console.log(req.body);
//     console.log(req.params);
//     console.log(req.query);
//     next();
// });

//Jobs Endpoints
app.get('/jobs', jobCtrl.getAllJobs);
app.post('/jobs', jobCtrl.createJob);
//app.put('/jobs/id', jobCtrl.updateJob)

// Job Endpoints
app.get('/job/:name', jobCtrl.getJob);
app.delete('/job/:id', jobCtrl.deleteJob);
app.get('/job', taskCtrl.getAllTasks);



// Task Endpoints
app.delete('/task/:id', taskCtrl.deleteTask);
app.get('/task/:name', taskCtrl.getTask);
app.post('/task', taskCtrl.createTask);
// app.put('/task/:id', taskCtrl.updateTask);

// Client Endpoints
app.get('/client/:name', clientCtrl.getClient);
app.delete('/client/:id', clientCtrl.deleteClient);
app.post('/client', clientCtrl.createClient);
//app.put('/client/:id', clientCtrl.updateClient);

// User Endpoints
app.post('/user', userCtrl.createUser);
app.delete('/user/:id', userCtrl.deleteUser);
app.get('/user/:name', userCtrl.getUser);
app.get('/user', userCtrl.getAllUsers);
//app.put('/user/:id', userCtrl.userClient);

app.listen(4000, function(){

});
