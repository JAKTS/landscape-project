angular.module('davisLandscaping').service('jobSrv', function($http){



    this.addTask = function(newTask){
      return $http({
        method:'POST',
        url: '/job',
        data: newTask
      }).then(function(response){
        return response;
      })
    },

    this.deleteJob = function(jobId){
      return $http({
        method: 'DELETE',
        url: '/jobs/' + jobId
      }).then(function(response){
        return response;
      })
    },

    this.deleteTask = function(taskId){
      return $http({
        method: 'DELETE',
        url: '/job/' + taskId
      }).then(function(response){
        return response;
      })
    },

    this.getAllTasks = function(){
        return $http({
          method: 'GET',
          url: '/jobs'
        }).then(function(response){
          console.log(response.data)
          return response.data;
        });

      },

      this.getJob = function(jobName){
          return $http({
            method: 'GET',
            url: '/job/' + jobName
          }).then(function(response){
            console.log(response.data)
            return response.data;
          });

        }


});
