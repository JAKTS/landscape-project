var app = require('./../index.js');
var dbTask = app.get('./db/task');

  module.exports = {
    getTask: function(res, req, next){
      dbTask.get_task(req.params.taskname, function (err, task){
          res.status(200).send(task);
      });
    },

    getAllTasks: function(res, req, next){
      dbTask.get_all_tasks(function (err, tasks){
          res.status(200).json(tasks);
      });
    },

    // updateTask: fucntion(res, req, next){
    //   dbTask.update_task(function (err, task){
    //
    //   });
    // },

    createTask: function(res, req, next){
      dbTask.create_task([req.body.taskname, req.body.taskduedate, req.body.taskdescription, req.body.taskpriority], function (err, task){
        res.status(200).send
      });
    },

    deleteTask: function(res, req, next){
      dbTask.delete_task(req.params.taskid, function (err, task){
        res.status(200).send
      });
    }
  };
