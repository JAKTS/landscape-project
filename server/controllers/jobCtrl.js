var app = require('./../index.js');
var dbJob = app.get('db/job');

  module.exports = {
    getJob: function(res, req, next){
      dbJob.get_job(req.params.name, function (err, job){
          res.status(200).send(job);
      })
    },

    getAllJobs: function(res, req, next){
      dbJob.get_all_jobs(function (err, jobs){
          res.status(200).json(jobs);
      })
    },

    // updateJob: fucntion(res, req, next){
    //   dbJob.update_job(function (err, job){
    //
    //   })
    // },

    createJob: function(res, req, next){
      dbJob.create_job([req.body.name, req.body.due_date, req.body.user, req.body.description, req.body.priority], function (err, job){

      })
    },

    deleteJob: function(res, req, next){
      dbJob.delete_job(req.params.id, function (err, job){
        res.status(200).send
      })
    }
  };
