var app = require('./../index.js');
var dbTask = app.get('./db/task');

module.exports = {
  getTask: function(res, req, next){
    dbTask.get_task(function (err, task){
      if(err){
        res.json(err);
      } else {
        res.json(task);
      }
    })
  },

  getAllTasks: function(res, req, next){
    dbTask.get_all_tasks(function (err, tasks){
      if(err){
        res.json(err);
      } else{
        res.json(tasks);
      }
    })
  },

  // updateTask: fucntion(res, req, next){
  //   dbTask.update_task(function (err, task){
  //     if(err){
  //       res.json(err);
  //     } else {
  //       res.json(task);
  //     }
  //   })
  // },

  createTask: function(res, req, next){
    dbTask.create_task(function (err, task){
      if(err){
        res.json(err);
      } else {
        res.json(task);
      }
    })
  },

  deleteTask: function(res, req, next){
    dbTask.delete_task(function (err, task){
      if(err){
        res.json(err);
      } else {
        res.json(task);
      }
    })
  }
}
