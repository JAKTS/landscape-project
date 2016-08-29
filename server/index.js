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
app.post('/jobs', jobCtrl.createJob); //also on Job Endpoint
app.get('/job/:jobname', jobCtrl.getJob); //also on Job Endpoint
//app.put('/jobs/id', jobCtrl.updateJob)

// Job Endpoints
app.delete('/job/:jobid', jobCtrl.deleteJob); //also on Jobs Endpoint
app.get('/job', taskCtrl.getAllTasks);
app.post('/task', taskCtrl.createTask); //also on Task Endpoint



// Task Endpoints
app.delete('/task/:taskid', taskCtrl.deleteTask); //also on Job Endpoint
app.get('/task/:taskname', taskCtrl.getTask); //also on Job Endpoint
// app.put('/task/:id', taskCtrl.updateTask);

// Client Endpoints
app.get('/client/:clientlastname', clientCtrl.getClient);
app.delete('/client/:clientid', clientCtrl.deleteClient);
app.post('/client', clientCtrl.createClient);
//app.put('/client/:id', clientCtrl.updateClient);

// User Endpoints
app.post('/user', userCtrl.createUser);
app.delete('/user/:userid', userCtrl.deleteUser);
app.get('/user/:username', userCtrl.getUser);
app.get('/user', userCtrl.getAllUsers);
//app.put('/user/:id', userCtrl.userClient);

app.listen(4000, function(){

});
